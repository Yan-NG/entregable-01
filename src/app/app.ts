import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';;
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core-module';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule,CoreModule ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
