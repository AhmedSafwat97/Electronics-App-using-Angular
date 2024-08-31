import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {


  constructor(private viewportScroller: ViewportScroller) { }

  
  scrollToElement(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      console.log('Scrolling to element');
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  }

