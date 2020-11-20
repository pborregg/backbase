import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.css'],
})
export class BankingComponent implements OnInit {
  transactions = [];

  constructor(
    public appService: AppService, 
    private router: Router
  ) {}

  ngOnInit() {
    this.appService
      .getTransactions()
      .subscribe((transactions) => (this.transactions = transactions));
  }

  goToAddMemberForm() {
    this.router.navigate(['/transaction-details']);
  }

  editTransactionByID(id: number) {}

  deleteTransactionById(id: number) {}
}
