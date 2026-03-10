import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ConfirmDialog} from 'primeng/confirmdialog';
import {Toast} from 'primeng/toast';
import { ShowcaseComponent } from './showcase.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ConfirmDialog, Toast, ShowcaseComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('language-booster');
}
