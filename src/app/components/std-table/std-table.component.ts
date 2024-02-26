import { Component, OnInit } from '@angular/core';
import { stdArr } from '../consts/students';
import { Istd } from '../interface/stdinterface';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {
  studentsData : Array<Istd> = stdArr
  constructor() { }

  ngOnInit(): void {
    console.log(this.studentsData);
  }

}
