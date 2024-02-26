import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillsets',
  templateUrl: './skillsets.component.html',
  styleUrls: ['./skillsets.component.scss']
})
export class SkillsetsComponent implements OnInit {
  skills :Array<string> = ["HTML","CSS","JS","ANGULAR"];
  
  constructor() { }

  ngOnInit(): void {
  }

}
