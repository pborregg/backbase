import { Component, OnInit } from '@angular/core';
// import { AppService } from '../app.service';
import { Router } from '@angular/router';
// import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  public title = 'Backbase';

  constructor(
    // public appService: AppService,
    private router: Router// ,
    // public auth: AuthService
  ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() { }

  // tslint:disable-next-line: typedef
  logout() {
    // this.appService.username = '';
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }
}
