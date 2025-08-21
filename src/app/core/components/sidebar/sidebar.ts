import {MediaMatcher} from '@angular/cdk/layout';
import {Component, OnDestroy, computed, inject, signal} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterOutlet} from '@angular/router';
import { SidebarCollapsed } from "../sidebar-collapsed/sidebar-collapsed";

@Component({
  selector: 'app-sidebar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, RouterOutlet, SidebarCollapsed],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  collapsed = signal(false);
  sidenavWidth = computed(() => this.collapsed() ? '60px' : '250px');
}
