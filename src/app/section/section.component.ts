import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  @Input() titulo = "";
  @Input() tipo = "";
  @Input() data = [
    {'titulo': 'ILSE',
    'link': '/assets/ILSE-logo.jpg',
    'descripcion': 'Escuela Secundaria nacional dependiente de la UBA.'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
