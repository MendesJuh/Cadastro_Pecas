
import { PecaListaComponent } from './components/eventos/peca-lista/peca-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PecaDetalheComponent } from './components/eventos/peca-detalhe/peca-detalhe.component';
import { PecasComponent } from './components/eventos/pecas.component';


const routes: Routes = [

  { path: 'pecas', redirectTo: 'pecas/lista'},
  {
    path: 'pecas', component: PecasComponent,
    children: [
      {path: 'detalhe/:id', component: PecaDetalheComponent},
      {path: 'detalhe', component: PecaDetalheComponent},
      {path: 'lista', component: PecaListaComponent},
    ]
  },

  { path: '', redirectTo: 'pecas/lista', pathMatch: 'full'},
  { path: '**', redirectTo: 'pecas/lista', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
