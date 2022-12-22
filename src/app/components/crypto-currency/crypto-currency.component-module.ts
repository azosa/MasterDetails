import { NgModule } from '@angular/core';
import { CryptoCurrencyComponent } from './crypto-currency.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatListModule} from "@angular/material/list";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    MatGridListModule,
    MatListModule,
    NgForOf,
    AsyncPipe,
    NgIf,
    MatButtonModule
  ],
  declarations: [CryptoCurrencyComponent],
  providers: [],
  exports: [CryptoCurrencyComponent]
})
export class CryptoCurrencyComponentModule {
}
