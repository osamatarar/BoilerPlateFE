import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRepository, Product } from '../../core/repository/impl/product.repository';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  loading = false;
  error = '';
  private destroy$ = new Subject<void>();

  constructor(private productRepository: ProductRepository) {}

  ngOnInit() {
    this.loadAllProducts();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadAllProducts() {
    this.loading = true;
    this.error = '';
    
    this.productRepository.GetAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.products = data;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Error loading products';
          console.error(err);
          this.loading = false;
        }
      });
  }

  loadInStockProducts() {
    this.loading = true;
    this.error = '';
    
    this.productRepository.GetInStockProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.products = data;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Error loading in-stock products';
          console.error(err);
          this.loading = false;
        }
      });
  }

  loadProductsByCategory(category: string) {
    this.loading = true;
    this.error = '';
    
    this.productRepository.GetProductsByCategory(category)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.products = data;
          this.loading = false;
        },
        error: (err) => {
          this.error = `Error loading products in category: ${category}`;
          console.error(err);
          this.loading = false;
        }
      });
  }

  loadProductsByPrice(price: number) {
    this.loading = true;
    this.error = '';
    
    this.productRepository.GetProductsByPrice(price)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.products = data;
          this.loading = false;
        },
        error: (err) => {
          this.error = `Error loading products under price: $${price}`;
          console.error(err);
          this.loading = false;
        }
      });
  }
} 