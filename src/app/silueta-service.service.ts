import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './models/customer';

@Injectable({
  providedIn: 'root'
})
export class SiluetaServiceService {
  constructor(private httpClient: HttpClient) {}

  private REST_API_SERVER =
    'http://cybercheetah.ipower.com/Silueta/silueta-api/api/';

  readCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${this.REST_API_SERVER}read.php`);
  }
}
