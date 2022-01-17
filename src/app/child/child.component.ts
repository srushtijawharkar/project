import { Component, OnInit ,Input,EventEmitter, Output} from '@angular/core';
import { isTemplateExpression } from 'typescript';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Output() updateDataEvent = new EventEmitter<string>();
  constructor() { }
@Input() item = 0
  ngOnInit(): void {
  }

}
