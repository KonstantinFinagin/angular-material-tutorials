import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  private _isSmallScreen: boolean;
  get isSmallScreen(): boolean {
    return this._isSmallScreen;
  }

  private mediaMatcher: MediaQueryList =
    matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  users: Observable<User[]>;

  constructor(
    public breakPointObserver: BreakpointObserver,
    private router: Router,
    private userService: UserService) {
  }

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  ngOnInit() {

    this.users = this.userService.users;
    this.userService.loadAll();

    this.router.events.subscribe(() => {
      if (this.isSmallScreen) {
        this.sidenav.close();
      }
    });

    this.breakPointObserver
    .observe([`(min-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this._isSmallScreen = false;
      } else {
        this._isSmallScreen = true;
      }
    });
  }
}
