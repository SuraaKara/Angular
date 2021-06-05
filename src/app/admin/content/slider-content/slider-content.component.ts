import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SliderService } from 'src/app/services/slider.service';

@Component({
  selector: 'app-slider-content',
  templateUrl: './slider-content.component.html',
  styleUrls: ['./slider-content.component.css']
})
export class SliderContentComponent implements OnInit {

  sliderAdd:FormGroup;
  constructor(private formBuilder: FormBuilder,
    private sliderService: SliderService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
   this.sliderAddForm();
  }
  sliderAddForm() {
    this.sliderAdd = this.formBuilder.group({
      title: ["", Validators.required],
      content: ["", Validators.required],
      image: ["", Validators.required]
    })
 
  }

   add() {
    if (this.sliderAdd.valid) {
      let sliderModel = Object.assign({}, this.sliderAdd.value)
      this.sliderService.add(sliderModel).subscribe(Response=>{
        this.toastrService.success("Başarılı")
      })
    }
    else{
      this.toastrService.error("Formunuz Eksik","Dikkat")
    }
  }

}
