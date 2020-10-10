import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cardgroup',
  templateUrl: './cardgroup.component.html',
  styleUrls: ['./cardgroup.component.css']
})
export class CardgroupComponent implements OnInit {

  @Input() rutaimg1:string;

  @Input() titulo1:string;
  

  constructor() { }

  ngOnInit(): void {
  }

}
