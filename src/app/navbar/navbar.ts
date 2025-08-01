import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  @Output() activeSection = new EventEmitter<string>();

  navigate(section: string) {
    this.activeSection.emit(section);
  }
}
