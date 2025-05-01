import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';


export const routes: Routes = [
  //Rota para a página inicial
  {path: '', component: HomepageComponent, pathMatch: 'full'},

  // --- Adicionar outras rotas aqui depois ---
  //Ex: {path: 'outra-pagina', component: OutraPaginaComponent},

  //Rota Coringa (opcional): Redireciona para a página inicial se a rota não for encontrada
  {path: '**', redirectTo: ''}, // Rota coringa
  // --- Fim das rotas ---
  // --- Adicionar outras rotas aqui depois ---
];
