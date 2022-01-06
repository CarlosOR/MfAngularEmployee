import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'employe',
    loadChildren: () => import('./mf-employe-content/mf-employe-content.module')
      .then((m) => m.MfEmployeContentModule)
  },
  { path: '**', redirectTo: 'employe' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
