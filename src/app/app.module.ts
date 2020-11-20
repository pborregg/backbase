import { BannerComponent } from './banner/banner.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BankingComponent } from './banking/banking.component';
import { LoginComponent } from './login/login.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BankingDetailsComponent } from './banking-details/banking-details.component';

// We may be missing a route...
const ROUTES = [
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'banking-register',
    component: BankingComponent,
    data: {
      breadcrumb: 'Banking Register'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      breadcrumb: 'Login'
    }
  }
];

@NgModule({
  declarations: [	
    AppComponent,
    BankingComponent,
    LoginComponent,
    BreadcrumbComponent,
    CallbackComponent,
    BannerComponent,
      BankingDetailsComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
