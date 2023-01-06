import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Card } from '../Interfaces/Card';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  @Input() id = 0;
  @Input() titulo = "";
  @Input() tipo = "";
  @Input() data : Card[] = [
    {"id":0,
      'titulo': '',
    'link': '',
    'descripcion': ''}
  ];

  subscription: Subscription;
  editable: boolean=false;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.editable = value;
    });
   }

  ngOnInit(): void {
  }

}
