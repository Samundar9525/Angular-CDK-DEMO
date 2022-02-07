import { Component, OnInit } from '@angular/core';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-demo-drag-drop',
  templateUrl: './demo-drag-drop.component.html',
  styleUrls: ['./demo-drag-drop.component.css']
})
export class DemoDragDropComponent implements OnInit {
  todo = ["Apple","Orange","Elephant","Frog"];

  done = ["Lion","Whale","Horse","Tiger",'Spider',"Butterfly"];
  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
