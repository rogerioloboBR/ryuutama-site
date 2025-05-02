import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { OQueEComponent } from './o-que-e/o-que-e.component';
import { MecanicasComponent } from './mecanicas/mecanicas.component';
import { ClassesComponent } from './classes/classes.component';
import { RyuujinComponent } from './ryuujin/ryuujin.component';
import { MundoComponent } from './mundo/mundo.component';
import { RecursosComponent } from './recursos/recursos.component';
import { ComoJogarComponent } from './como-jogar/como-jogar.component';


export const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  // Componentes embutidos na home (não precisam de rota própria aqui se a navegação for só por #)
  // Mas manteremos as páginas separadas para o futuro
  { path: 'o-que-e', component: OQueEComponent },
  { path: 'mecanicas', component: MecanicasComponent },
  // Novas rotas para as páginas dedicadas
  { path: 'classes', component: ClassesComponent },
  { path: 'ryuujin', component: RyuujinComponent }, // Ou /mestres
  { path: 'mundo', component: MundoComponent },
  { path: 'recursos', component: RecursosComponent }, // Incluirá "Onde Comprar"
  { path: 'como-jogar', component: ComoJogarComponent },
  { path: '**', redirectTo: '' } // Rota coringa
];
