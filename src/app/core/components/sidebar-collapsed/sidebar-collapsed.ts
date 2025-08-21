import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

export type MenuItem = {
  icon:string;
  label:string;
  route:string;
}

@Component({
  selector: 'app-sidebar-collapsed',
  imports: [CommonModule, MatListModule, MatIconModule],
  templateUrl: './sidebar-collapsed.html',
  styleUrl: './sidebar-collapsed.scss'
})
export class SidebarCollapsed {
  menuItems = signal<MenuItem[]>([
    { icon: 'dashboard', label: 'Home', route: '/home' },
    ])
}
