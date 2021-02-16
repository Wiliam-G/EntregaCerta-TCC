import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent implements OnInit {
  @Input() editable = true;
  @Input() stars = 0;
  @Output() rating = new EventEmitter<number>();

  starsList = [1, 2, 3, 4, 5];
  constructor() { }

  ngOnInit() {
  }
  
  onStarClick(stars: number)  {
    if (this.editable) {
      this.stars = stars;
      this.rating.emit(this.stars);
    }
  }

}
