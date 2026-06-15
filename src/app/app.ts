import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet, RouterLinkWithHref, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    RouterLinkWithHref
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private router = inject(Router)

  ngOnInit(): void {
    const last_route = localStorage.getItem('lastVisitedRoute');
    if(last_route && last_route !== '/'){
      this.router.navigateByUrl(last_route);
    }

    //guardar en lcoalstorage la ultima ruta 
    this.router.events.pipe(
      filter( 
        (event): event is NavigationEnd => event instanceof NavigationEnd
      )
    ).subscribe( 
      (event: NavigationEnd) => {
      localStorage.setItem(LOCALSTORAGE_LAST_VISIT_ROUTE_KEY, event.urlAfterRedirects)
      }
    )
  }

}

const LOCALSTORAGE_LAST_VISIT_ROUTE_KEY = 'lastVisitedRoute';