import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mundo',
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './mundo.component.html',
  styleUrl: './mundo.component.scss'
})
export class MundoComponent {

}
