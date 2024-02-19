import { Component } from '@angular/core';

@Component({
  selector: 'app-styling',
  templateUrl: './styling.component.html',
  styleUrls: ['./styling.component.scss']
})
export class StylingComponent {
box1:boolean = true;

toggleBoxColor() {
  this.box1 =!this.box1;
}
}
