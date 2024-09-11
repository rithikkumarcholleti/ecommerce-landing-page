import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Fetch data from the backend
    this.http.get('http://localhost:5000/api/products')
      .subscribe((data: any) => {
        this.products = data;
      }, error => console.error('Error fetching products:', error));
  }
}
