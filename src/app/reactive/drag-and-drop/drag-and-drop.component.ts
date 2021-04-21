import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { combineLatest, fromEvent, Observable } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent implements AfterViewInit {
  left = '500px';
  top = '500px';
  @ViewChild('drag') dragItem: ElementRef;
  mouseDown$: Observable<MouseEvent>;
  mouseUp$: Observable<MouseEvent>;
  mouseMoveFirst$: Observable<{ x: number, y: number }>;
  mouseMoveSecond$: Observable<MouseEvent>;

  constructor() { }

  ngAfterViewInit(): void {
    this.secondEdition();
  }

  firstEdition() {
    this.mouseDown$ = fromEvent(this.dragItem.nativeElement, 'mousedown')
    this.mouseUp$ = fromEvent(this.dragItem.nativeElement, 'mouseup');

    this.mouseMoveFirst$ = fromEvent<MouseEvent>(document, 'mousemove')
      .pipe(
        map(event => {
          event.preventDefault();
          return {
            x: event.clientX,
            y: event.clientY
          }
        }),
        takeUntil(this.mouseUp$)
      );

    combineLatest([this.mouseDown$, this.mouseMoveFirst$])
      .subscribe(([_, position]) => {
        this.left = `${position.x}px`;
        this.top = `${position.y}px`;
      })
  }

  secondEdition() {
    this.mouseDown$ = fromEvent<MouseEvent>(this.dragItem.nativeElement, 'mousedown');
    this.mouseUp$ = fromEvent<MouseEvent>(document, 'mouseup');
    this.mouseMoveSecond$ = fromEvent<MouseEvent>(document, 'mousemove');
    this.mouseDown$.subscribe(() => {
      this.mouseMoveSecond$.pipe(
        map(event => {
          event.preventDefault();
          return { x: event.clientX, y: event.clientY }
        }),
        takeUntil(this.mouseUp$)
      ).subscribe(({ x, y }) => {
        this.left = `${x}px`;
        this.top = `${y}px`;
      })
    })
  }

}
