import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent {

  private oldRating: number;

  private stars: boolean[];

  private maxStars = 5;

  @Input()
  readonly = true;

  @Input()
  public get rating(): number {
    return this.oldRating;
  }

  public set rating(value: number) {
    this.oldRating = value || 0;
    this.stars = Array(this.maxStars).fill(true, 0, this.rating);
  }

  @Output()
  readonly ratingChange: EventEmitter<number> = new EventEmitter();

  public fillStarsWithColor(index: number): void {
    if (!this.readonly) {
      this.rating = index + 1;
      this.ratingChange.emit(this.rating);
    }
  }

}
