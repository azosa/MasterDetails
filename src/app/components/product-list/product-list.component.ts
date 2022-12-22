import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  styleUrls: ['./product-list.component.scss'],
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  readonly list$: Observable<ProductModel[]> = this._productsService.getAll();
  private _selectedProductIdSubject: Subject<string> = new Subject<string>();
  public selectedProductId$: Observable<string> = this._selectedProductIdSubject.asObservable();
  readonly details$: Observable<ProductModel> = this.selectedProductId$.pipe(
    switchMap(data => this._productsService.getOne(data)));

  constructor(private _productsService: ProductsService) {
  }

  selectProduct(id: string): void {
    this._selectedProductIdSubject.next(id);
  }
}
