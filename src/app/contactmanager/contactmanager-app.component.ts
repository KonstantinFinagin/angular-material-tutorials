import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contactmanager-app',
  template: `
    <app-sidenav></app-sidenav>
  `,
  styles: []
})
export class ContactManagerAppComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconSet(
      sanitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg'));
  }

  ngOnInit() {
  }

}
