import { Component, OnInit } from '@angular/core';

interface page {
  name: string,
  link: string
}
@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  pages: page[] = [
    { name: 'Stop Watch', link: 'stopwatch' },
    { name: 'Drag and Drop', link: 'draganddrop' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
