import { Component, OnInit } from '@angular/core';
import { Cloth } from 'src/app/models/cloth';
import { Product } from 'src/app/models/product';
import { ClothService } from 'src/app/services/cloth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  dataLoaded = false;
  products: Product[] = [];
  constructor(private productService: ProductService, private clothService: ClothService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(response => {
      this.products = response
      this.dataLoaded = true;
    })
  }
 

}
