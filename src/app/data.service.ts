import {Injectable} from '@angular/core';
import * as data from './data';
import {ApexChart, ApexXAxis, ApexYAxis} from 'ng-apexcharts';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public convertedData: any[];
  public verificationMethods: any[] = [];
  public parsedData: DataStructure[] = [];
  public businessRulesData: DataStructure[] = [];
  constructor() {
    this.convertData();
    this.mockBusinessRulesData();
  }

  public convert2FAArray() {
    const twoFactorData = data.twoFaData;
    let zivverCount = 0;
    let guestCount = 0;

    twoFactorData.forEach(item => {
      item === 'Recipient with ZIVVER' ? zivverCount++ : guestCount++;
    });

    this.convertedData = [
      {
        name: 'data',
        series: [
          {
            name: 'Recipient with ZIVVER',
            value: zivverCount
          },
          {
            name: 'Guest',
            value: guestCount
          }
        ]
      }
    ];

    return this.convertedData;
  }

  public convertVerificationType() {
    const verificationData = data.verificationData;
    const verificationMethodData = {
      name: 'data',
      series: [
        {
          name: 'ZIVVER',
          value: 0
        },
        {
          name: 'AccessCode',
          value: 0
        },
        {
          name: 'Email',
          value: 0
        },
        {
          name: 'Sms',
          value: 0
        }
      ]
    };

    verificationData.forEach(el => {
      switch (el) {
        case 'Zivver': {
          verificationMethodData.series[0].value++;
          break;
        }
        case 'Organization Access Code':
        case 'Personal Access Code': {
          verificationMethodData.series[1].value++;
          break;
        }
        case 'Email': {
          verificationMethodData.series[2].value++;
          break;
        }
        case 'Sms': {
          verificationMethodData.series[3].value++;
          break;
        }
      }
    });

    return this.verificationMethods.push(verificationMethodData);
  }

  public convertData() {
    return data.rawData.map(obj => {
      if (obj.RECIPIENT_DOMAIN === 'gmail.com' || obj.RECIPIENT_DOMAIN === 'connect4care.nl' || obj.RECIPIENT_DOMAIN === 'veenendaal.nl' ||
        obj.RECIPIENT_DOMAIN === 'hotmail.com') {
        if (this.parsedData.some(e => e.name === obj.RECIPIENT_DOMAIN) === false) {
          this.parsedData.push({
            name: obj.RECIPIENT_DOMAIN,
            series: [
              {
                name: 'Opened',
                value: 0
              },
              {
                name: 'Unopened',
                value: 0
              }
            ]
          });
        }
        if (this.parsedData.some(e => e.name === obj.RECIPIENT_DOMAIN) === true) {
          if (obj.IS_OPENED === 1) {
            const el = this.parsedData.find(e => e.name === obj.RECIPIENT_DOMAIN);
            el.series.find(e => e.name === 'Opened').value++;
          } else {
            const el = this.parsedData.find(e => e.name === obj.RECIPIENT_DOMAIN);
            el.series.find(e => e.name === 'Unopened').value++;
          }
        }
      }
    });
  }


  public mockSingleSeriesData(seriesName: string, min, max, total) {
    const mockData: DataStructure[] = [{
      name: seriesName,
      series: [
        {
          name: '1',
          value: 1
        }
      ]
    }];
    let count = 0;

    while (count < total) {

      mockData[0].series.push({
        name: count.toString(),
        value: this.randomGen(min, max)
      });
      count++;
    }

    return mockData;
  }

  public mockMutliSingleSeriesData(nameArr: MultiDataArr[]) {
    return nameArr.map(item => {
      return {
        name: item.name,
        value: this.randomGen(item.min, item.max)
      };
    });
  }

  public mockBusinessRulesData() {
    const mockData: DataStructure[] = [];
    let count = 0;

    while (count < 1000) {
      const type = this.randomGen(1, 3) === 1 ? 'medical' : this.randomGen(1, 3) === 2 ? 'bsn' : 'legal';
      const secure = this.randomGen(1, 2) === 1 ? 'secure' : 'normal';
      this.createMultiSeriesData(mockData, type, secure);
      count++;
    }

    return this.businessRulesData = mockData;
  }

  private createMultiSeriesData(arr, key, name) {
    const found = arr.some(el => el.name === key);
    if (!found) {
      const newEl = {
        name: key,
        series: [
          {
            name,
            value: 1
          }
        ]
      };
      arr.push(newEl);
    } else if (found) {
      const existingEl = arr.find(el => el.name === key);
      const existingElFound = existingEl.series.some(el => el.name === name);
      if (!existingElFound) {
        existingEl.series.push({
          name,
          value: 1
        });
      } else {
        existingEl.series.find(el => el.name === name).value++;
      }
    }
  }

  private randomGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  /* ----------- APEX DATA GENERATION ---------- */

  public apexGroupedBarData(): ApexBarSeries {
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
  }

  public apex2faData(): ApexBarSeries {
    const result = new ApexBarSeries();

    data.rawData.forEach(obj => {
      const recipient = obj.RECIPIENT_TYPE;
      const existingEl = result.series.find(({ name }) => name === recipient) as ApexSeriesData;
      existingEl !== undefined ? existingEl.data[0] += 1 : result.series.push({ name: recipient, data: [1] });
    });

    return result;
  }

  apexVerificationData(): ApexBarSeries {
    const result = new ApexBarSeries();

    data.rawData.forEach(obj => {
      let method = obj.VERIFICATION_METHOD;
      if (method === 'Organization Access Code' || method === 'Personal Access Code' || method === 'Generated Code') {
        method = 'Access Code';
      }
      const existingEl = result.series.find(({ name }) => name === method) as ApexSeriesData;
      existingEl !== undefined ? existingEl.data[0] += 1 : result.series.push({ name: method, data: [1] });
    });

    return result;
  }
}

export interface DataStructure {
  name: string;
  series: ArrayData[];
}

export interface ArrayData {
  name: string;
  value: number;
}

export interface MultiDataArr {
  name: string;
  min: number;
  max: number;
}

export class ApexBarSeries {
  series: ApexSeriesData[] = [];
  xaxis?: ApexXAxis = {};
  yaxis?: ApexYAxis = {};

  constructor() {}
}

export interface ApexSeriesData {
  name: string;
  data: number[];
}

/* Data example
   {
     "KEY_MESSAGE":"20a3804f27917719e63f139e65242b970bd0513ebc4ca3f77f6fb5a2d69c7786",
     "KEY_ACCOUNT_RECIPIENT":"b7b68620b602335dccf8b709704ab6fac0912213b7c25005499ae152b84a40f3",
     "SENT_AT":"2019-12-03T22:13:58.661+01:00",
     "IS_INTERNAL_RECIPIENT":0,
     "RECIPIENT_TYPE":"Guest",
     "VERIFICATION_METHOD":"Email",
     "RECIPIENT_DOMAIN":"rentawarroom.nl",
     "IS_OPENED":0
   },
   */
