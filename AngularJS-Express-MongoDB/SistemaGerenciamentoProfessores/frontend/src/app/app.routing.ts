import { ModuleWithProviders } from '@angular/core';
import { GuardService } from './services/guard.service';
import { Routes, RouterModule } from '@angular/router';

import { EditarProfessor1Component } from './professor/editar-professor1/editar-professor1.component';
import { ListarProfessor1Component } from './professor/listar-professor1/listar-professor1.component';
import { RegistrarProfessor1Component } from './professor/registrar-professor1/registrar-professor1.component';


const routes:Routes = [
    /*{path:'',component:LoginUserComponent},
    {path:'list/user',component:ListUserComponent, canActivate: [GuardService]},
    {path:'register/user',component:RegisterUserComponent},
    {path:'edit/user/:id',component:EditUserComponent, canActivate: [GuardService]},*/

    {path:'professor',loadChildren:'./professor/professor.module#ProfessorModule'},

    /*{path:'list/product',component:ListProductComponent, canActivate: [GuardService]},
    {path:'register/product',component:RegisterProductComponent},
    {path:'edit/product/:id',component:EditProductComponent, canActivate: [GuardService]},*/

    // otherwise redirect to login
    { path: '**', redirectTo: '' }
  ];

export const routing:ModuleWithProviders = RouterModule.forRoot(routes);