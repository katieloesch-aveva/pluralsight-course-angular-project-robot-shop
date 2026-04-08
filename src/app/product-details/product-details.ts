import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe, NgIf, NgClass } from '@angular/common';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  imports: [NgIf, CurrencyPipe, NgClass],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  @Input() product!: IProduct;
  @Output() buy = new EventEmitter();

  buyBtnClicked(product: IProduct) {
    console.log(`product ${product.name} added to cart`);
    this.buy.emit()
  }

  getImgUrl(product: IProduct) {
    if (!product) {
      return '';
    }

    return '/assets/images/robot-parts/' + product.imageName;
  }

  getDiscountClasses(product: IProduct) {
    if (product.discount > 0) return ['strikethrough'];
    else return [];
  }
}
