import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';


import { routing } from './professor.routing';
import { RegistrarProfessor1Component } from './registrar-professor1/registrar-professor1.component';
import { EditarProfessor1Component } from './editar-professor1/editar-professor1.component';
import { ListarProfessor1Component } from './listar-professor1/listar-professor1.component'; 


@NgModule({
  declarations: [RegistrarProfessor1Component, EditarProfessor1Component, ListarProfessor1Component],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule,
    routing
  ]
})
export class ProfessorModule { }
