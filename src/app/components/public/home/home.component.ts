import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productes=['produit1','produit2','produit3'];

  constructor() { }

  ngOnInit(): void {
  }

}