import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';;
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core-module';
import { Main } from "./core/components/main/main";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, CoreModule, Main],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
