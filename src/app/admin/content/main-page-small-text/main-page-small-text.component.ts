import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SmallTextService } from 'src/app/services/small-text.service';

@Component({
  selector: 'app-main-page-small-text',
  templateUrl: './main-page-small-text.component.html',
  styleUrls: ['./main-page-small-text.component.css']
})
export class MainPageSmallTextComponent implements OnInit {

  smallTextAdd:FormGroup;
  constructor(private formBuilder: FormBuilder,
    private smallTextService: SmallTextService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
   this.smallTextAddForm();
  }
  smallTextAddForm() {
    this.smallTextAdd = this.formBuilder.group({
      title: ["", Validators.required],
      content: ["", Validators.required]
    })
 
  }

   add() {
    if (this.smallTextAdd.valid) {
      let smallTextModel = Object.assign({}, this.smallTextAdd.value)
      this.smallTextService.add(smallTextModel).subscribe(Response=>{
        this.toastrService.success("Başarılı")
      })
    }
    else{
      this.toastrService.error("Formunuz Eksik","Dikkat")
    }
  }

}
