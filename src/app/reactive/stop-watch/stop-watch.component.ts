import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { interval, fromEvent, from, Observable } from "rxjs";
import { map, switchMap, takeUntil } from "rxjs/operators";

@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.scss']
})
export class StopWatchComponent implements OnInit {
  @ViewChild('startbutton') startButton: ElementRef;
  @ViewChild('stopbutton') stopButton: ElementRef;
  @ViewChild('output') resultArea: ElementRef;

  tenthSecond$ = interval(100);
  startClick$: Observable<ElementRef>;
  stopClick$: Observable<ElementRef>;

  constructor() { }

  ngAfterViewInit(): void {
    this.startClick$ = fromEvent(this.startButton.nativeElement, 'click');
    this.stopClick$ = fromEvent(this.stopButton.nativeElement, 'click');

    this.startClick$.subscribe(() => {
      this.tenthSecond$
        .pipe(
          map(item => (item / 10)),
          takeUntil(this.stopClick$)
        )
        .subscribe(num => this.resultArea.nativeElement.innerText = num + 's');
    });
  }

  ngOnInit(): void {
    
  }

}
