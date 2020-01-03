import {Injectable} from '@angular/core';
import {ApexOptions, ApexTitleSubtitle, ApexXAxis, ApexYAxis} from 'ng-apexcharts';
import * as data from './data';
import {mockData} from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public filteredDataSet: any;
  public twoFactorDataSet: ApexOptions;
  public verificationMethodsDataSet: ApexOptions;
  public domainDataSet: ApexOptions;

  constructor() {
  }

  /* ----------- FILTERING ---------- */
  public filterData(startDate?, endDate?) {
    this.filteredDataSet = mockData.filter(obj => {
      const objDate = new Date(obj.send_date);
      return objDate >= startDate && objDate <= endDate;
    });
    this.twoFactorData(true);
    this.verificationMethodData(true);
    this.domainData(true);
  }
  /* ----------- FILTERING ---------- */

  /* ----------- APEX DATA GENERATION ---------- */

  /*public apexGroupedBarData(): ApexBarSeries {
    return {
      series: [
        {
          name: 'SENT_MESSAGES',
          data: [197, 348, 359, 351]
        },
        {
          name: 'RECEIVED_MESSAGES',
          data: [285, 424, 414, 442]
        },
        {
          name: 'READ_MESSAGES',
          data: [256, 389, 394, 396]
        },
        {
          name: 'INTERNAL_MESSAGES',
          data: [178, 268, 286, 299]
        }],
      xaxis: {
        categories: ['2019-01-07', '2019-01-14', '2019-01-21', '2019-01-28']
      }
    };
  }*/

  /*public apex2faData(filteredData?): ApexBarSeries {
    const result = new ApexBarSeries();
    result.xaxis = {
      title: {
        text: '% of sent ZIVVER messages'
      }
    };

    let rawData = data.rawData;

    if (filteredData) {
      rawData = filteredData;
    }

    rawData.forEach(obj => {
      const recipient = obj.RECIPIENT_TYPE;
      const existingEl = result.series.find(({ name }) => name === recipient) as ApexSeriesData;
      existingEl !== undefined ? existingEl.data[0] += 1 : result.series.push({ name: recipient, data: [1] });
    });

    console.log(result);
    return this.apex2faTest = result;
  }*/

  /*apexVerificationData(filteredData?): ApexBarSeries {
    const result = new ApexBarSeries();
    let rawData = data.rawData;

    if (filteredData) {
      rawData = filteredData;
    }

    // need to remove zivver && personal and orgazantional access code seperate
    rawData.forEach(obj => {
      const method = obj.VERIFICATION_METHOD;
      // if (method === 'Organization Access Code' || method === 'Personal Access Code' || method === 'Generated Code') {
      //  method = 'Access Code';
      // }
      const existingObj = result.series.find(({ name }) => name === method) as ApexSeriesData;
      existingObj !== undefined ? existingObj.data[0] += 1 : result.series.push({ name: method, data: [1] });
    });

    return result;
  }*/

  /*public apexDomainData(): ApexBarSeries {
    const result = new ApexBarSeries();
    const domainsList = ['gmail.com', 'hotmail.com', 'connect4care.nl', 'veenendaal.nl'];
    // const domainsList = [...new Set(data.rawData.map(obj => obj.RECIPIENT_DOMAIN))]; // becomes x
    result.series = [
      {
        name: 'Unopened',
        data: []
      },
      {
        name: 'Opened',
        data: []
      },
    ];

    data.rawData.forEach(obj => {
      const currentDomainIndex = domainsList.findIndex(domain => domain === obj.RECIPIENT_DOMAIN);
      if (obj.RECIPIENT_DOMAIN === 'gmail.com' || obj.RECIPIENT_DOMAIN === 'hotmail.com' ||
        obj.RECIPIENT_DOMAIN === 'connect4care.nl' || obj.RECIPIENT_DOMAIN === 'veenendaal.nl') {
        if (obj.IS_OPENED === 1) {
          result.series[1].data[currentDomainIndex] !== undefined ? result.series[1].data[currentDomainIndex] += 1 :
            result.series[1].data[currentDomainIndex] = 1;
        } else {
          result.series[0].data[currentDomainIndex] !== undefined ? result.series[0].data[currentDomainIndex] += 1 :
            result.series[0].data[currentDomainIndex] = 1;
        }
      }
    });

    result.xaxis.categories = ['gmail.com', 'hotmail.com', 'connect4care.nl', 'veenendaal.nl'];
    // result.xaxis.categories = domainsList;

    return result;
  }*/

  /*public apexBusinessRules(): ApexBarSeries {
    const result = new ApexBarSeries();
    result.xaxis.categories = ['Bsn', 'Medical', 'Legal'];
    result.series = [
      {
        name: 'Secure',
        data: [0, 0, 0]
      },
      {
        name: 'Normal',
        data: [0, 0, 0]
      }
    ];

    for (let i = 0; i < 1000; i++) {

      const type = this.randomGen(0, 1);
      const category = this.randomGen(0, 2);
      result.series[type].data[category] += 1;
    }

    return result;
  }

  public apexSparkline(min, max, total): void {
    const result = new ApexBarSeries();
    result.series.push({
        data: []
    });

    for (let i = 0; i < total; i++) {
      result.series[0].data.push(this.randomGen(min, max));
    }

    return result;
  }*/

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
  public sentSecurely(graphData: ApexOptions, sensitiveOnly?: boolean, domain?: boolean): ApexOptions {

    const localMockData = mockData;
    const filteredLocalMockData = localMockData.filter(el => el.is_sensitive === 'Gevoelig' && el.classification !== '');

    // this one doesn't need graphData as no new Xaxis category values are assigned, think its the better way.
    if (domain) {
      const uniqueDomains = [...new Set(filteredLocalMockData.map(item => item.recipient_domain))];
      const uniqueSecure = [...new Set(filteredLocalMockData.map(item => item.is_sent_securely))];
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

      const domainResult = {
        series
      };

      filteredLocalMockData.forEach(obj => {
        const secureIndex = domainResult.series.findIndex(el => el.name === obj.is_sent_securely);
        const domainIndex = domainResult.series[secureIndex].data.findIndex(el => el.x === obj.recipient_domain);
        domainResult.series[secureIndex].data[domainIndex].y += 1;
      });

      const sums = domainResult.series.reduce(
        (s, r) => (r.data.forEach(obj => s[obj.x] = (s[obj.x] || 0) + obj.y), s),
        {} as Record<string, number>
      );

      domainResult.series.forEach(v => v.data.sort((a, b) => sums[b.x] - sums[a.x]));

      return domainResult as ApexOptions;
    }

    if (sensitiveOnly) {
      const uniqueClassifications = [...new Set(filteredLocalMockData.map(item => {
          if (item.classification.includes('BSN')) {
            return 'BSN';
          } else {
            return item.classification;
          }
        }))];
      const uniqueSecure = [...new Set(filteredLocalMockData.map(item => item.is_sent_securely))];
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
        series,
        xaxis: {
          ...graphData.xaxis,
          categories: uniqueClassifications
        }
      };

      filteredLocalMockData.forEach(obj => {
        const secure = classificationsResult.series.findIndex(el => el.name === obj.is_sent_securely);
        const classificationCheck = obj.classification.includes('BSN') ? 'BSN' : obj.classification;
        const classificationIndex = classificationsResult.xaxis.categories.indexOf(classificationCheck);
        classificationsResult.series[secure].data[classificationIndex] += 1;
      });

      return classificationsResult as ApexOptions;

    } else {
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
        series,
        xaxis: {
          ...graphData.xaxis,
          categories: uniqueSensitive
        }
      };

      localMockData.forEach(obj => {
        const sensitive = sensitiveResult.xaxis.categories.indexOf(obj.is_sensitive);
        const secure = sensitiveResult.series.findIndex(el => el.name === obj.is_sent_securely);
        sensitiveResult.series[secure].data[sensitive] += 1;
      });

      return sensitiveResult as ApexOptions;
    }
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
    const localMockData = filter ? this.filteredDataSet : mockData;

    // const localMockData = mockData.filter(obj => obj.is_read !== '');
    const uniqueDomains = [...new Set(localMockData.map(obj => obj.recipient_domain))];
    const uniqueRead = [...new Set(localMockData.map(obj => obj.is_read === '' ? 'Unknown' : obj.is_read))];
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
      const readIndex = domainResult.series.findIndex(el => el.name === obj.is_read || (el.name === 'Unknown' && obj.is_read === ''));
      const domainIndex = domainResult.series[readIndex].data.findIndex(el => el.x === obj.recipient_domain);
      domainResult.series[readIndex].data[domainIndex].y += 1;
    });

    const sums = domainResult.series.reduce(
      (s, r) => (r.data.forEach(obj => s[obj.x] = (s[obj.x] || 0) + obj.y), s), {} as Record<string, number>
    );

    domainResult.series.forEach(v => v.data.sort((a, b) => sums[b.x] - sums[a.x]));

    return this.domainDataSet = domainResult as ApexOptions;
  }
}

export interface ApexSeriesData {
  name?: string;
  data: number[];
}
