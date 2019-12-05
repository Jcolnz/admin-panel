import { Injectable } from '@angular/core';
import * as data from './data';

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

    data.rawData.forEach(obj => {
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

  public mockMutliSingleSeriesData(nameArr: multiDataArr[]) {
    const mockData: ArrayData[] = [];

    nameArr.forEach(el => {
      mockData.push({
        name: el.name,
        value: this.randomGen(el.min, el.max)
      });
    });

    return mockData
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

  private createMultiSeriesData(arr, key, data) {
    const found = arr.some(el => el.name === key);
    if (!found) {
      const newEl = {
        name: key,
        series: [
          {
            name: data,
            value: 1
          }
        ]
      };
      arr.push(newEl);
    } else if (found) {
      const existingEl = arr.find(el => el.name === key);
      const existingElFound = existingEl.series.some(el => el.name === data);
      if (!existingElFound) {
        existingEl.series.push({
          name: data,
          value: 1
        });
      } else {
        existingEl.series.find(el => el.name === data).value++;
      }
    }
  }

  private randomGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
}

export class DataStructure {
  name: string;
  series: ArrayData[];
}

export class ArrayData {
  name: string;
  value: number;
}

export class multiDataArr {
  name: string;
  min: number;
  max: number;
}
