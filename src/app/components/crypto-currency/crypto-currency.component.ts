import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CryptoCurrencyModel } from '../../models/crypto-currency.model';
import { CryptoCurrencyService } from '../../services/crypto-currency.service';

@Component({
  selector: 'app-crypto-currency',
  styleUrls: ['./crypto-currency.component.scss'],
  templateUrl: './crypto-currency.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoCurrencyComponent {
  readonly list$: Observable<CryptoCurrencyModel[]> = this._cryptoCurrencyService.getAll();
  private _selectedCryptoCurrencySubject: Subject<CryptoCurrencyModel> = new Subject<CryptoCurrencyModel>();
  public selectedCryptoCurrency$: Observable<CryptoCurrencyModel> = this._selectedCryptoCurrencySubject.asObservable();

  constructor(private _cryptoCurrencyService: CryptoCurrencyService) {
  }

  select(cryptoCurrency:CryptoCurrencyModel): void {
    this._selectedCryptoCurrencySubject.next(cryptoCurrency);
  }
}
