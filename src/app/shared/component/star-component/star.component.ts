import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-star-component',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  constructor() { }

  @Input()
  rating: number = 0;
  starWidth: number;

  ngOnChanges():void {
    this.starWidth = this.rating * 90 / 5;
  }

}
