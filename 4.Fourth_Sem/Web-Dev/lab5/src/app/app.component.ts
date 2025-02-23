import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { CATEGORIES, Category, Product } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ProductListComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories: Category[] = CATEGORIES;
  selectedCategory: Category | null = null;

  selectCategory(category: Category): void {
    this.selectedCategory = category;
  }

  removeProduct(product: Product): void {
    if (this.selectedCategory) {
      this.selectedCategory.products = this.selectedCategory.products.filter(
        (p) => p.id !== product.id
      );
    }
  }
}
