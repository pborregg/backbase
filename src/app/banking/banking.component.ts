import { Component, OnInit } from '@angular/core';
// import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.css']
})
export class BankingComponent implements OnInit {

  constructor(
    // public appService: AppService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
