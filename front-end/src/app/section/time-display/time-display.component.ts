import { Component, Input, OnInit, SimpleChanges, NgModule, OnChanges } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss']
})
export class TimeDisplayComponent implements OnInit,OnChanges {

  @Input() inputData:string;

  test = 1;
  constructor() {
    this.inputData='';
   }

  ngOnChanges(changes:SimpleChanges){
    console.log(changes);
    for(let propName in changes){
      
    }    
  }

  ngOnInit(): void {
  }

}
