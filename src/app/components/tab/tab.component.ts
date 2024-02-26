import { Component, OnInit } from '@angular/core';
import { Iskill } from '../interface/stdinterface';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  selectedSkillSet : string = "Angular";
  numsValue = 10;
  skillsArr : Array<Iskill> = [
    {
      skillName : 'javascript',
      content : `<strong>Javascript</strong>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt eaque aliquam minima porro sapiente itaque,
      et dolorem quis illo adipisci pariatur quam, aperiam fugit a ea, laboriosam suscipit accusamus esse.
`
    },
    {
      skillName : 'angular',
      content : `<strong>Angular</strong>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt eaque aliquam minima porro sapiente itaque,
      et dolorem quis illo adipisci pariatur quam, aperiam fugit a ea, laboriosam suscipit accusamus esse.
`
    },
    {
      skillName : 'node',
      content : `<strong>Node</strong>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt eaque aliquam minima porro sapiente itaque,
      et dolorem quis illo adipisci pariatur quam, aperiam fugit a ea, laboriosam suscipit accusamus esse.
`
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

  selectSkill(skill : string){
    console.log(skill);
    this.selectedSkillSet = skill
  }
}
