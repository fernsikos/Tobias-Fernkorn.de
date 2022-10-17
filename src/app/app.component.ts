// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  slideshowArray = ['code.jpg', 'macbook.jpg', 'programming.jpg', 'programming2.jpg','website.jpg'];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateSlideshow()
  };


  updateSlideshow() {

    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.slideshowArray.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 1);
    }, 5000);
  };


}
