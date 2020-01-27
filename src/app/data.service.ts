import {Injectable} from '@angular/core';
import {ApexOptions, ApexTitleSubtitle, ApexXAxis, ApexYAxis} from 'ng-apexcharts';
import {mockData} from './mock_data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public filteredDataSet: MockData[];
  public twoFactorDataSet: ApexOptions;
  public verificationMethodsDataSet: ApexOptions;
  public domainDataSet: ApexOptions;
  public secureDomainDataSet: ApexOptions;
  public messageClassificationDataSet: ApexOptions;
  public triggeredBusinessRulesDataSet: ApexOptions;
  public lineGraphDataSet: ApexOptions;
  public totalData: number;
  public sensitivePercentage: number;
  public sentZIVVERMessage: number;
  public isOpened: number;

  constructor() {
    this.calculateDataValues();
  }

  public calculateDataValues(filtered?: MockData[]) {

    if (filtered) {
      console.log(this.filteredDataSet.length);
      this.totalData = this.filteredDataSet.length;
      this.sensitivePercentage = this.filteredDataSet.filter(x => x.is_sensitive === 'Gevoelig').length / this.totalData * 100;
      this.sentZIVVERMessage = this.filteredDataSet.filter(x => x.is_sent_securely === 'Veilig verzonden').length;
      this.isOpened = this.filteredDataSet.filter(x => x.is_read === 'Geopend').length / 
      this.filteredDataSet.filter(x => x.is_sent_securely === 'Veilig verzonden').length * 100;
    } else {
      this.totalData = mockData.length;
      this.sensitivePercentage = mockData.filter(x => x.is_sensitive === 'Gevoelig').length / this.totalData * 100;
      this.sentZIVVERMessage = mockData.filter(x => x.is_sent_securely === 'Veilig verzonden').length;
      this.isOpened = mockData.filter(x => x.is_read === 'Geopend').length / 
      mockData.filter(x => x.is_sent_securely === 'Veilig verzonden').length * 100;
    }
  }

  /* ----------- FILTERING ---------- */
  public filterData(startDate?, endDate?, organizationUnit?: string) {
    
    const localStartDate = startDate ? startDate.toISOString().slice(0, 10) : undefined;
    const localEndDate = endDate ? endDate.toISOString().slice(0, 10) : undefined;

    this.filteredDataSet = mockData.filter(obj => {
      if (organizationUnit) {
          if (obj.sending_organizational_unit === organizationUnit) {
            if (localStartDate && localEndDate) {
              const dateParts = obj.send_date.split('/');
              const objDate = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]).toISOString().slice(0, 10);
              return objDate >= localStartDate && objDate <= localEndDate;
            } else {
              return obj;
            }
          }
      } else {
        const dateParts = obj.send_date.split('/');
        const objDate = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]).toISOString().slice(0, 10);
        return objDate >= localStartDate && objDate <= localEndDate;
      }
    }) as MockData[];
    this.twoFactorData(true);
    this.verificationMethodData(true);
    this.domainData(true);
    this.secureDomainData(true);
    this.messageClassificationData(true);
    this.triggeredBusinessRulesData(true);
    this.dataCardLine(true);
    this.calculateDataValues(this.filteredDataSet);
  }
  /* ----------- FILTERING ---------- */

  public dataCardLine(filter?: boolean): ApexOptions {

    const months = ['Jan/20', 'Feb/19', 'Mar/19', 'Apr/19', 'May/19', 'June/19',
    'July/19', 'Aug/19', 'Sep/19', 'Oct/19', 'Nov/19', 'Dec/19'];

    const chartData = {
      title: {
        align: 'center',
        text: 'Number of ZIVVER emails sent over time',
        style: {
          fontSize: '16px'
        }
      } as ApexTitleSubtitle,
      yaxis: {
        min: 0,
        forceNiceScale: true,
        title: {
          text: 'Sent ZIVVER messages'
        }
      } as ApexYAxis
    } as ApexOptions;

    const localMockData = filter ? this.filteredDataSet : mockData;
    const uniqueDates = [...new Set(localMockData.map(obj => {
      const dateParts = obj.send_date.split('/');
      return parseInt(dateParts[1], 10) - 1;
    }))];

    const formattedDates: string[] = [];
    
    uniqueDates.forEach(el => {
      return formattedDates.push(months[el]);
    });
    formattedDates.sort((a, b) => {
      return months.indexOf(a) - months.indexOf(b);
    });
    console.log(formattedDates);

    const defaultData = uniqueDates.map(() => {
      return 0;
    });

    const totalsResult = {
      ...chartData,
      series: [{
        name: 'Sent Messages',
        data: [...defaultData]
      }] as ApexSeriesData[],
      xaxis: {
        ...chartData.xaxis,
        categories: formattedDates
      }
    };

    localMockData.forEach(obj => {
      const dateParts = obj.send_date.split('/');
      const parsedDate = parseInt(dateParts[1], 10) - 1;
      const monthDate = months[parsedDate];
      const dateCheck = totalsResult.xaxis.categories.indexOf(monthDate);
      totalsResult.series[0].data[dateCheck] += 1;
    });

    totalsResult.series[0].data.push(totalsResult.series[0].data.shift());
    totalsResult.xaxis.categories.push(totalsResult.xaxis.categories.shift());

    return this.lineGraphDataSet = totalsResult as ApexOptions;
  }

  /*
  {
    "send_date": "02/12/2019",
    "is_sent_securely": "Veilig verzonden",
    "is_sensitive": "Niet gevoelig",
    "classification": "",
    "is_internal_recipient": "Externe ontvanger",
    "recipient_domain": "voorbeeld-domein-vijf.nl",
    "recipient_type": "Gastontvanger",
    "verification_method": "Verificatie email",
    "is_read": "Geopend",
    "sending_organizational_unit": "Team 1"
  },
  */
  public triggeredBusinessRulesData(filter?: boolean): ApexOptions {

    const chartData = {
      title: {
        align: 'center',
        text: 'Number of emails and % sent securely, by triggered business rule',
        style: {
          fontSize: '16px'
        }
      } as ApexTitleSubtitle,
      xaxis: {
        title: {
          text: 'Number of emails classified as sensitive'
        }
      } as ApexXAxis,
      yaxis: {
        min: 0,
        forceNiceScale: true,
        title: {
          text: 'Triggered business rule'
        }
      } as ApexYAxis
    } as ApexOptions;

    const localMockData = filter ? this.filteredDataSet.filter(el => el.is_sensitive === 'Gevoelig' && el.classification !== '') :
      mockData.filter(el => el.is_sensitive === 'Gevoelig' && el.classification !== '');
    const uniqueClassifications = [...new Set(localMockData.map(item => {
        if (item.classification.includes('BSN')) {
          return 'BSN';
        } else {
          return item.classification;
        }
      }))];
    const uniqueSecure = [...new Set(localMockData.map(item => item.is_sent_securely))];
    const defaultData = uniqueClassifications.map(() => {
      return 0;
    });
    const series = uniqueSecure.map(item => {
      return {
        name: item,
        data: [...defaultData]
      };
    }) as ApexSeriesData[];
    const classificationsResult = {
      ...chartData,
      series,
      xaxis: {
        ...chartData.xaxis,
        categories: uniqueClassifications
      }
    };

    localMockData.forEach(obj => {
      const secure = classificationsResult.series.findIndex(el => el.name === obj.is_sent_securely);
      const classificationCheck = obj.classification.includes('BSN') ? 'BSN' : obj.classification;
      const classificationIndex = classificationsResult.xaxis.categories.indexOf(classificationCheck);
      classificationsResult.series[secure].data[classificationIndex] += 1;
    });

    console.log(classificationsResult)
    return this.triggeredBusinessRulesDataSet = classificationsResult as ApexOptions;
  }

  /***
   * Method uses deliberately defined xaxis as opposed to dual axis data structure.
   */
  public messageClassificationData(filter?: boolean): ApexOptions {

    const chartData = {
      title: {
        align: 'center',
        text: 'Number of emails and % sent securely, by message classification',
        style: {
          fontSize: '16px'
        }
      } as ApexTitleSubtitle,
      xaxis: {
        title: {
          text: 'Number of emails'
        }
      } as ApexXAxis,
      yaxis: {
        title: {
          text: 'Message classification'
        }
      } as ApexYAxis
    } as ApexOptions;

    // Filtering data to only guests
    const localMockData = filter ? this.filteredDataSet : mockData;

    const uniqueSensitive = [...new Set(localMockData.map(item => item.is_sensitive))];
    const uniqueSecure = [...new Set(localMockData.map(item => item.is_sent_securely))];
    const defaultData = uniqueSensitive.map(() => {
      return 0;
    });
    const series = uniqueSecure.map(item => {
      return {
        name: item,
        data: [...defaultData]
      };
    }) as ApexSeriesData[];

    const sensitiveResult = {
      ...chartData,
      series,
      xaxis: {
        ...chartData.xaxis,
        categories: uniqueSensitive
      }
    };

    localMockData.forEach(obj => {
      const sensitive = sensitiveResult.xaxis.categories.indexOf(obj.is_sensitive);
      const secure = sensitiveResult.series.findIndex(el => el.name === obj.is_sent_securely);
      sensitiveResult.series[secure].data[sensitive] += 1;
    });

    return this.messageClassificationDataSet = sensitiveResult as ApexOptions;
  }

  public secureDomainData(filter?: boolean): ApexOptions {

    const chartData = {
      title: {
        align: 'center',
        text: 'Number of emails and % sent securely, by top 10 recipient domains',
        style: {
          fontSize: '16px'
        }
      } as ApexTitleSubtitle,
      xaxis: {
        title: {
          text: 'Number of emails classified as sensitive'
        }
      } as ApexXAxis,
      yaxis: {
        title: {
          text: 'Recipient domain'
        }
      } as ApexYAxis
    } as ApexOptions;

    // Filtering data to only guests
    const localMockData = filter ? this.filteredDataSet.filter(el => el.is_sensitive === 'Gevoelig' && el.classification !== '') :
      mockData.filter(el => el.is_sensitive === 'Gevoelig' && el.classification !== '');
    // this one doesn't need graphData as no new Xaxis category values are assigned, think its the better way.
    const uniqueDomains = [...new Set(localMockData.map(item => item.recipient_domain))];
    const uniqueSecure = [...new Set(localMockData.map(item => item.is_sent_securely))];
    // need to make type
    const defaultData = uniqueDomains.map(item => {
      return {
        x: item,
        y: 0
      };
    });

    const series = uniqueSecure.map(item => {
      return {
        name: item,
        data: defaultData.map(el => ({...el}))
      };
    });

    const processedResult = {
      ...chartData,
      series
    };

    localMockData.forEach(obj => {
      const secureIndex = processedResult.series.findIndex(el => el.name === obj.is_sent_securely);
      const domainIndex = processedResult.series[secureIndex].data.findIndex(el => el.x === obj.recipient_domain);
      processedResult.series[secureIndex].data[domainIndex].y += 1;
    });

    const sums = processedResult.series.reduce(
      (s, r) => (r.data.forEach(obj => s[obj.x] = (s[obj.x] || 0) + obj.y), s),
      {} as Record<string, number>
    );

    processedResult.series.forEach(v => v.data.sort((a, b) => sums[b.x] - sums[a.x]));

    return this.secureDomainDataSet = processedResult as ApexOptions;
  }

  public twoFactorData(filter?: boolean): ApexOptions {

    const chartData = {
      title: {
        align: 'center',
        text: '% of messages sent to recipients with and without ZIVVER accounts',
        style: {
          fontSize: '16px'
        }
      } as ApexTitleSubtitle,
      xaxis: {
        title: {
          text: '% of sent ZIVVER messages'
        }
      } as ApexXAxis,
      yaxis: {
        show: false,
        labels: {
          show: false
        }
      } as ApexYAxis
    } as ApexOptions;

    // Filter out data where we don't know the recipient
    const localMockData = filter ? this.filteredDataSet.filter(el => el.recipient_type !== '') :
    mockData.filter(el => el.recipient_type !== '');
    const recipientType = [...new Set(localMockData.map(item => item.recipient_type))];
    const series = recipientType.map(recipient => {
      return {
        name: recipient,
        data: [0]
      };
    }) as ApexSeriesData[];
    const processedResult = {
      ...chartData,
      series
    };

    localMockData.forEach(obj => {
      const recipientIndex = processedResult.series.findIndex(el => el.name === obj.recipient_type);
      processedResult.series[recipientIndex].data[0] += 1;
    });

    return this.twoFactorDataSet = processedResult as ApexOptions;
  }

  public verificationMethodData(filter?: boolean): ApexOptions {

    const chartData = {
      title: {
        align: 'center',
        text: 'Verification methods used for guest recipients',
        style: {
          fontSize: '16px'
        }
      } as ApexTitleSubtitle,
      xaxis: {
        title: {
          text: '% of ZIVVER messages sent to guest recipients'
        }
      } as ApexXAxis,
      yaxis: {
        show: false,
        labels: {
          show: false
        }
      } as ApexYAxis
    } as ApexOptions;

    // Filtering data to only guests
    const localMockData = filter ? this.filteredDataSet.filter(el => el.recipient_type === 'Gastontvanger') :
      mockData.filter(el => el.recipient_type === 'Gastontvanger');

    // new set based on verification methods, makes sure to only get unique instances.
    const verificationMethods = [...new Set(localMockData.map(item => item.verification_method))];

    // new instance of series with each unique verification method
    const series = verificationMethods.map(method => {
      return {
        name: method,
        data: [0]
      };
    }) as ApexSeriesData[];

    // setting up a new object for the processed result
    const processedResult = {
      ...chartData,
      series
    };

    localMockData.forEach(obj => {
      const methodIndex = processedResult.series.findIndex(el => el.name === obj.verification_method);
      processedResult.series[methodIndex].data[0] += 1;
    });

    return this.verificationMethodsDataSet = processedResult as ApexOptions;
  }

  public domainData(filter?: boolean): ApexOptions {

    const chartData = {
      title: {
        align: 'center',
        text: 'Number of ZIVVER messages sent and % opened, by recipient domains',
        style: {
          fontSize: '16px'
        }
      } as ApexTitleSubtitle,
      xaxis: {
        title: {
          text: 'Number of ZIVVER messages sent to domain'
        }
      } as ApexXAxis,
      yaxis: {
        title: {
          text: 'Recipient domain'
        }
      } as ApexYAxis
    } as ApexOptions;

    // Filtering data to only guests
    const localMockData = filter ? this.filteredDataSet.filter(el => el.is_read !== '') : mockData.filter(el => el.is_read !== '');

    // const localMockData = mockData.filter(obj => obj.is_read !== '');
    const uniqueDomains = [...new Set(localMockData.map(obj => obj.recipient_domain))];
    const uniqueRead = [...new Set(localMockData.map(obj => obj.is_read))];
    // need to make type
    const defaultData = uniqueDomains.map(item => {
      return {
        x: item,
        y: 0
      };
    });

    const series = uniqueRead.map(item => {
      return {
        name: item,
        data: defaultData.map(el => ({...el})) // this creates a deep copy so the reference is new.
      };
    });

    const domainResult = {
      ...chartData,
      series
    };

    localMockData.forEach(obj => {
      const readIndex = domainResult.series.findIndex(el => el.name === obj.is_read);
      const domainIndex = domainResult.series[readIndex].data.findIndex(el => el.x === obj.recipient_domain);
      domainResult.series[readIndex].data[domainIndex].y += 1;
    });

    const sums = domainResult.series.reduce(
      (s, r) => (r.data.forEach(obj => s[obj.x] = (s[obj.x] || 0) + obj.y), s), {} as Record<string, number>
    );

    domainResult.series.forEach(v => v.data.sort((a, b) => sums[b.x] - sums[a.x]));

    return this.domainDataSet = domainResult as ApexOptions;
  }

  get organizationUnits() {
    return [...new Set(mockData.map(obj => obj.sending_organizational_unit))];
  }
}

export interface ApexSeriesData {
  name?: string;
  data: number[];
}

export interface MockData {
  send_date: string;
  is_sent_securely: string;
  is_sensitive: string;
  classification: string;
  is_internal_recipient: string;
  recipient_domain: string;
  recipient_type: string;
  verification_method: string;
  is_read: string;
  sending_organizational_unit: string;
}