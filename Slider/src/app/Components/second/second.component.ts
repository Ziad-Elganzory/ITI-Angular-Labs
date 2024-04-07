import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent implements OnInit {

  index = 0;
  interval: any;
  images: string[] = [
    "../../../assets/images/one.jpg",
    "../../../assets/images/two.jpg",
    "../../../assets/images/three.jpg",
    "../../../assets/images/four.jpg",
    "../../../assets/images/five.jpg"
  ];

  slide() {
    this.interval = setInterval(() => {
      this.index++;
      if(this.index > this.images.length -1){
        this.index = 0;
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  next() {
    if (this.index < this.images.length - 1) {
      this.index++;
    }
  }

  prev() {
    if (this.index > 0) {
      this.index--;
    }
  }
  
  ngOnInit(): void {}

}
