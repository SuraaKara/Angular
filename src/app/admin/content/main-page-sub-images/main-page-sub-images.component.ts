import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SubImagesService } from 'src/app/services/sub-images.service';

@Component({
  selector: 'app-main-page-sub-images',
  templateUrl: './main-page-sub-images.component.html',
  styleUrls: ['./main-page-sub-images.component.css']
})
export class MainPageSubImagesComponent implements OnInit {

  subImagesAdd:FormGroup;
  constructor(private formBuilder: FormBuilder,
    private subImagesService: SubImagesService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
   this.subImagesAddForm();
  }
  subImagesAddForm() {
    this.subImagesAdd = this.formBuilder.group({
      title: ["", Validators.required],
      content: ["", Validators.required],
      image: ["", Validators.required]
    })
 
  }

   add() {
    if (this.subImagesAdd.valid) {
      let subImagesModel = Object.assign({}, this.subImagesAdd.value)
      this.subImagesService.add(subImagesModel).subscribe(Response=>{
        this.toastrService.success("Başarılı")
      })
    }
    else{
      this.toastrService.error("Formunuz Eksik","Dikkat")
    }
  }
}
