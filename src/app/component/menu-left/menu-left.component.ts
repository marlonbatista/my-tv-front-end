import { AppRoutingModule } from './../../app-routing.module';
import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from './menu';

@Component({
  selector: 'app-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.scss'],
})
export class MenuLeftComponent implements OnInit {
  logo = environment.logo;
  showMenu = false;
  menuList!: Menu[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const rota = this.router.url;
    this.menuList = this.inputRoute();
  }

  openMenu() {
    this.showMenu = !this.showMenu;
  }

  inputRoute(): Menu[] {
    return [
      {
        icon: 'search',
        name: 'Search',
        route: '/search',
      },
      {
        icon: 'home',
        name: 'Home',
        route: '',
      },
      {
        icon: 'movie',
        name: 'Movies',
        route: '',
      },
      {
        icon: 'app_registration',
        name: 'Register a new title',
        route: 'register'

      }
    ];
  }
}
