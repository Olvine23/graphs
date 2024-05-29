import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private paymentsUrl = 'https://app.stockapp.africa/api/PaymentManager/GetPaymentsGraphList?year=2024';
  private shopUrl = 'https://app.stockapp.africa/api/ManageShop/GetShopGraphList?year=2024';
  private usersUrl = 'https://app.stockapp.africa/api/ManageUser/GetUsersGraphAnalysis?year=2024';

  constructor(private http: HttpClient) { }

  getPaymentsGraphList(): Observable<any> {
    return this.http.get(this.paymentsUrl);
  }

  getShopGraphList(): Observable<any> {
    return this.http.get(this.shopUrl);
  }

  getUsersGraphAnalysis(): Observable<any> {
    return this.http.get(this.usersUrl);
  }
}
