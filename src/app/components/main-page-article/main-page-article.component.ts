import { Component, OnInit } from '@angular/core';
import { SubImages } from 'src/app/models/subImages';
import { SubImagesService } from 'src/app/services/sub-images.service';

@Component({
  selector: 'app-main-page-article',
  templateUrl: './main-page-article.component.html',
  styleUrls: ['./main-page-article.component.css']
})
export class MainPageArticleComponent implements OnInit {

  constructor(private subImagesService:SubImagesService) { }
subImage:SubImages[] =[];
  ngOnInit(): void {
    this.getSubImages();
  }
  getSubImages() {
    this.subImagesService.getSubImages().subscribe(response => {
      this.subImage = response
    })
  }
}
