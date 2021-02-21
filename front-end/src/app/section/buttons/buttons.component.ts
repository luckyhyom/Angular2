import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  test:number=0;

  //컴포넌트에 이벤트를 넣어줌
  @Output() clickEvent = new EventEmitter<string>();

  constructor() { }

  start() {
    // 자식이 부모에게 데이터를 전달할 수 있는 구조의 이벤트.
    // 자식 이벤트 발생 후, 부모 이벤트 발생
    this.clickEvent.emit('string!!');
    // this.clickEvent.emit(10);
  }

  ngOnInit(): void {
  }

}
