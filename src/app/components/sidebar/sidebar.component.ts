import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  collapseShow = 'hidden';

  constructor() {
  }

  roleName: string;

  ngOnInit() {
    this.roleName = 'ADMIN'
  }

  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }
}
