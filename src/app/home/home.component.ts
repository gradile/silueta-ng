import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../models/customer';
import { SiluetaServiceService } from '../silueta-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  customers: Customer[];

  constructor(
    private siluetaService: SiluetaServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.readCustomers();
  }

  readCustomers(): void {
    this.siluetaService.readCustomers().subscribe(
      customers => {
        this.customers = customers;
      },
      error => {
        console.log(error);
      }
    );
  }
}
