import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private toastrService:ToastrService,
    private colorService:ColorService) { }
    colorAddForm:FormGroup;
  createColorAddForm() {
    this.colorAddForm = this.formBuilder.group({
      name: ["", Validators.required],
    })
  }

  ngOnInit(): void {
    this.createColorAddForm();
  }
  add() {
    if (this.colorAddForm.valid) {
      let colorModel = Object.assign({}, this.colorAddForm.value)
      this.colorService.add(colorModel).subscribe(Response=>{
        this.toastrService.success("Renk Eklendi","Başarılı")
      })
    }
    else{
      this.toastrService.error("Formunuz Eksik","Dikkat")
    }
  }
}
