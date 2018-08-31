import { AuthGuard } from './shared/guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarEscolaComponent } from './listar-escola/listar-escola.component';
import { EditarEscolaComponent } from './editar-escola/editar-escola.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: LoginComponent },
  { path: 'listar', component: ListarEscolaComponent, canActivate: [ AuthGuard ] },
  { path: 'editar/:id', component: EditarEscolaComponent, canActivate: [ AuthGuard ] },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
