import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AuthGuard } from './services/auth-guard.guard';

const Routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'home', component: HomeComponent },
    { path: 'protegida', component: ProtegidaComponent,
    canActivate:[ AuthGuard ]  },
    { path: '**', pathMatch:'full', redirectTo: 'login' }
];

export const APP_ROUTING = RouterModule.forRoot(Routes);