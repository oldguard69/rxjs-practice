import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { interval, fromEvent, Observable } from "rxjs";
import { map, takeUntil } from "rxjs/operators";

@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.scss']
})
export class StopWatchComponent implements AfterViewInit {
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
}
