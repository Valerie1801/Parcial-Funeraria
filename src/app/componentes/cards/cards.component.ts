import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() rutaImagen:string;
  @Input() title:string;

  constructor() { }

  ngOnInit(): void {
  }

}
