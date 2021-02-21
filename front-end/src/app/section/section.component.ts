import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  present="First";

  constructor() { }

  startTime(string:string){
    this.present = string;
  }

  

  ngOnInit(): void {
  }

}
