import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { CryptoCurrencyComponent } from './components/crypto-currency/crypto-currency.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { EmployeeListComponentModule } from './components/employee-list/employee-list.component-module';
import { EmployeesServiceModule } from './services/employees.service-module';
import { CryptoCurrencyComponentModule } from './components/crypto-currency/crypto-currency.component-module';
import { CryptoCurrencyServiceModule } from './services/crypto-currency.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products-master-details', component: ProductListComponent }, { path: 'employees-master-details', component: EmployeeListComponent }, { path: 'crypto-master-details', component: CryptoCurrencyComponent }]), ProductListComponentModule, ProductsServiceModule, EmployeeListComponentModule, EmployeesServiceModule, CryptoCurrencyComponentModule, CryptoCurrencyServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
