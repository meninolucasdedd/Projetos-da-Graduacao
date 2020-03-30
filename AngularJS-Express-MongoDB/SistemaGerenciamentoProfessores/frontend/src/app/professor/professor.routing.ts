import { GuardService } from '../services/guard.service';
import { EditarProfessor1Component } from './editar-professor1/editar-professor1.component';
import { RegistrarProfessor1Component } from './registrar-professor1/registrar-professor1.component';
import { ListarProfessor1Component } from './listar-professor1/listar-professor1.component';

import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';

const routes:Routes = [
    {path:'',component: RegistrarProfessor1Component},
    {path:'listar/professor',component:ListarProfessor1Component, canActivate: [GuardService]},
    {path:'registrar/professor',component:RegistrarProfessor1Component},
    {path:'editar/professor/:id',component:EditarProfessor1Component, canActivate: [GuardService]},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);