import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClothService } from 'src/app/services/cloth.service';

@Component({
  selector: 'app-cloth',
  templateUrl: './cloth.component.html',
  styleUrls: ['./cloth.component.css']
})
export class ClothComponent implements OnInit {

  
  constructor(private formBuilder: FormBuilder,
    private clothService:ClothService,
    private toastrService:ToastrService
    ) { }
    clothAddForm:FormGroup;
  createClothAddForm() {
    this.clothAddForm = this.formBuilder.group({
      name: ["", Validators.required],
    })
  }

  ngOnInit(): void {
    this.createClothAddForm();
  }
  add() {
    if (this.clothAddForm.valid) {
      let clothModel = Object.assign({}, this.clothAddForm.value)
      this.clothService.add(clothModel).subscribe(response=>{
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
