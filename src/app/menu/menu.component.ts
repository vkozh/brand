import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MenuContentComponent } from '../menu-content/menu-content.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private modalService: NgbModal) { }
  faBars = faBars;

  ngOnInit(): void {

  }

  open() {
    this.modalService.open(MenuContentComponent, { windowClass: 'menu-modal' });

  } 

}

@Component({
  selector: 'ngbd-modal-content',
  template: `
  `
})
export class NgbdModalContent {
  constructor() { }
}