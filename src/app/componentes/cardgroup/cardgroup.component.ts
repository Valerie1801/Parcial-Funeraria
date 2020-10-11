import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cardgroup',
  templateUrl: './cardgroup.component.html',
  styleUrls: ['./cardgroup.component.css']
})
export class CardgroupComponent implements OnInit {

  @Input() rutaimg:string;

  @Input() titulo:string;
  

  constructor() { }

  ngOnInit(): void {
  }

}
