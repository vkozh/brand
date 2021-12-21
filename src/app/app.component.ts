import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 
import { Subject } from 'rxjs';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 /* template:`<div
      stickySidebars
      updateSticky="updateSticky">
</div>`*/
})
export class AppComponent /*implements OnDestroy*/{
  faBars = faBars;
  title = 'brand';

  /*updateSticky: Subject<boolean> = new Subject();
  updateMethod(){
    this.updateSticky.next(true);
  }
 
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));*/
}

