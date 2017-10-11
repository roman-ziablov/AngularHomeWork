import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

export interface IUser {
  cell: string;
  dob: string;
  email: string;
  gender: string;
  phone: string;
  name: {
        title: string;
        first: string;
        last: string;
  };
  id: {
      name: string;
      value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

@Injectable()
export class Users {

  private FILTER_YEAR: number = 1975;

  constructor (
    private HttpClient: HttpClient
  ) {

  }

  private sendRequest(seed?: string): Promise<IUser> {
      return this.HttpClient.get<{results: IUser[]}>(seed ? `https://randomuser.me/api/?seed=${seed}` : 'https://randomuser.me/api/') 
                    .toPromise()
                    .then((response) => {
                      return  response.results[0];
                    });
  }
  public getUsers(): Promise<IUser[]> {
      let usersObtained: IUser[] = [];
      return new Promise((resolve) => {

          const filterAndResolve = (user: IUser) => {
              usersObtained.push(user);
              let isValid = (new Date(user.dob)).getFullYear() <= this.FILTER_YEAR;
              if (isValid) {
                  resolve(usersObtained);
              } else {
                  this.sendRequest(user.email).then(filterAndResolve);
              }
          };

          this.sendRequest()
          .then(filterAndResolve);

      });
  }



}

