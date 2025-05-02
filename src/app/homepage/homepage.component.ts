import { Component } from '@angular/core';
import { MecanicasComponent } from '../mecanicas/mecanicas.component';
import { OQueEComponent } from '../o-que-e/o-que-e.component';

@Component({
  selector: 'app-homepage',
  imports: [
    OQueEComponent,
    MecanicasComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
