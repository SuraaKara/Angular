import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit {

  categoryAddForm:FormGroup;
  constructor(private formBuilder: FormBuilder,
    private categoryService:CategoryService,
    private toastrService:ToastrService
    ) { }

  createCategoryAddForm() {
    this.categoryAddForm = this.formBuilder.group({
      name: ["", Validators.required],
    })
  }

  ngOnInit(): void {
    this.createCategoryAddForm();
  }
  add() {
    if (this.categoryAddForm.valid) {
      let categoryModel = Object.assign({}, this.categoryAddForm.value)
      this.categoryService.add(categoryModel).subscribe(response=>{
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
