import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { Cloth } from 'src/app/models/cloth';
import { Color } from 'src/app/models/color';
import { CategoryService } from 'src/app/services/category.service';
import { ClothService } from 'src/app/services/cloth.service';
import { ColorService } from 'src/app/services/color.service';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  categories : Category[]=[];
  cloths : Cloth[]=[];
  colors : Color[]=[];


  productAddForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private productService: ProductService,
    private categoryService:CategoryService,
    private clothService:ClothService,
    private colorService:ColorService,
    private toastrService:ToastrService
    ) { }

  ngOnInit(): void {
    this.createProductAddForm();
    this.getCategories();
    this.getCloths();
    this.getColor();
  }
  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      code: ["", Validators.required],
      name: ["", Validators.required],
      description: ["", Validators.required],
      category: ["", Validators.required],
      cloth: ["", Validators.required],
      image: ["", Validators.required],
      color: ["", Validators.required]
    })
  }
  getCategories() {
    this.categoryService.getCategories().subscribe(response=>{
      this.categories = response
    })   
  }
  getCloths() {
    this.clothService.getCloths().subscribe(response=>{
      this.cloths = response
    })   
  }
  getColor() {
    this.colorService.getColor().subscribe(response=>{
      this.colors = response
    })   
  }
  add() {
    if (this.productAddForm.valid) {
      let productModel = Object.assign({}, this.productAddForm.value)
      this.productService.add(productModel).subscribe(response=>{
        this.toastrService.success("Başarılı")
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i <responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage
              ,"Doğrulama hatası")
          }       
        } 
      })
    }else{
      this.toastrService.error("Formunuz eksik","Dikkat")
    }

    }
  }
