import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BigTextService } from 'src/app/services/big-text.service';

@Component({
  selector: 'app-main-page-big-text',
  templateUrl: './main-page-big-text.component.html',
  styleUrls: ['./main-page-big-text.component.css']
})
export class MainPageBigTextComponent implements OnInit {
  bigTextAdd:FormGroup;
  constructor(private formBuilder: FormBuilder,
    private bigTextService: BigTextService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
   this.bigTextAddForm();
  }
  bigTextAddForm() {
    this.bigTextAdd = this.formBuilder.group({
      title: ["", Validators.required],
      content: ["", Validators.required]
    })
 
  }

   add() {
    if (this.bigTextAdd.valid) {
      let bigTextModel = Object.assign({}, this.bigTextAdd.value)
      this.bigTextService.add(bigTextModel).subscribe(Response=>{
        this.toastrService.success("Başarılı")
      })
    }
    else{
      this.toastrService.error("Formunuz Eksik","Dikkat")
    }
  }
}
