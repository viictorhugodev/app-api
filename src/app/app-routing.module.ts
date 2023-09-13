import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosComponent } from './datos/datos.component';
import { ImagenComponent } from './imagen/imagen.component';

const routes: Routes = [
  { path: '', component: DatosComponent },
  { path: 'imagen', component: ImagenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

