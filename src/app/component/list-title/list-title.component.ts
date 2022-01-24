import { ActivatedRoute } from '@angular/router';
import { Category } from '../../models/enums/category.model';
import { HttpResp } from './../../http-resp';
import { Observable, ObservedValueOf } from 'rxjs';
import { TitleService } from './../title/title.service';
import { Component, Input, OnInit } from '@angular/core';
import {
  Title,
  TitleCategory,
  Titles,
} from '../../models/interfaces/title.model';

@Component({
  selector: 'app-list-title',
  templateUrl: './list-title.component.html',
  styleUrls: ['./list-title.component.scss'],
})
export class ListTitleComponent implements OnInit {

  titles !: Titles;
  // animes$!: Observable<HttpResp>;
  // series$!: Observable<HttpResp>;
  // movies$!: Observable<HttpResp>;

  categorys = Category;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // this.animes$ = this.getTitles("ANIME", 0, 4, 'dateRegister,desc');
    // this.series$ = this.getTitles("MOVIE", 0, 4, 'dateRegister,desc');
    // this.movies$ = this.getTitles("SERIE", 0, 4, 'dateRegister,desc');
    this.activatedRoute.params.subscribe(
      (param) => {
        this.titles = this.activatedRoute.snapshot.data['titles'];
        console.log(this.titles);
      }
    );
  }

  // getTitles(category?: String) {
  //   return this.titleService.getAll(category);
  // }
}
