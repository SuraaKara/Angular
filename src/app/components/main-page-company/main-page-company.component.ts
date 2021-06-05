import { Component, OnInit } from '@angular/core';
import { BigText } from 'src/app/models/bigText';
import { SmallText } from 'src/app/models/smallText';
import { BigTextService } from 'src/app/services/big-text.service';
import { SmallTextService } from 'src/app/services/small-text.service';

@Component({
  selector: 'app-main-page-company',
  templateUrl: './main-page-company.component.html',
  styleUrls: ['./main-page-company.component.css']
})
export class MainPageCompanyComponent implements OnInit {

  constructor(private smallTextService:SmallTextService,
    private bigTextservice:BigTextService) { }
  smallText:SmallText[] =[];
  bigText:BigText[] =[];
  ngOnInit(): void {
    this.getSmallText();
    this.getBigText();
  }
  getSmallText() {
    this.smallTextService.getSmallText().subscribe(response => {
      this.smallText = response
    })
  }
  getBigText() {
    this.bigTextservice.getBigText().subscribe(response => {
      this.bigText = response
    })
  }
}
