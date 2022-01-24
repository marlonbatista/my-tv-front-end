import { Component, Input, OnInit } from '@angular/core';
import { Title } from '../../models/interfaces/title.model';

@Component({
  selector: 'app-poster-new',
  templateUrl: './poster-new.component.html',
  styleUrls: ['./poster-new.component.scss']
})


export class PosterNewComponent implements OnInit {

  @Input() title !: Title;


  constructor() { }

  ngOnInit(): void {
  }

}
