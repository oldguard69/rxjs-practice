import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-form-array-with-table',
  templateUrl: './form-array-with-table.component.html',
  styleUrls: ['./form-array-with-table.component.scss']
})
export class FormArrayWithTableComponent implements OnInit {
  data = [ { from: new Date(), to: new Date() } ];
  dataSource = new BehaviorSubject<AbstractControl[]>([]);
  displayColumns = ['from', 'to'];
  rows: FormArray = this.fb.array([]);
  form: FormGroup = this.fb.group({ 'dates': this.rows });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.data.forEach((d) => this.addRow(d, false));
    this.updateView();
  }

  emptyTable() {
    while (this.rows.length !== 0) {
      this.rows.removeAt(0);
    }
  }

  addRow(d?, noUpdate?: boolean) {
    const row = this.fb.group({
      'from'   : [d && d.from ? d.from : null, []],
      'to'     : [d && d.to   ? d.to   : null, []]
    });
    this.rows.push(row);
    if (!noUpdate) { this.updateView(); }
  }

  updateView() {
    this.dataSource.next(this.rows.controls);
  }

}
