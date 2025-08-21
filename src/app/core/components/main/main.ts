import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Sidebar } from "../sidebar/sidebar";

@Component({
  selector: 'app-main',
  imports: [Header, Sidebar],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {

}
