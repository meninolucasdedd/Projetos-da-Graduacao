
import { ToastrService } from 'ngx-toastr';
import { ProfessorService } from '../../services/professor.service';
import { Professor } from '../../models/professor.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-professor1',
  templateUrl: './registrar-professor1.component.html',
  styleUrls: ['./registrar-professor1.component.css']
})


export class RegistrarProfessor1Component implements OnInit {
  
  professor:Professor;

  constructor(private professorService: ProfessorService,
              private toasty:ToastrService,
              private router:Router) {
    this.professor = new Professor();
  }

  ngOnInit() {
  }

  onSubmit(registerForm:NgForm){
    if(registerForm.invalid){
      this.toasty.error("Todos os campos são obrigatórios.");
      return;
    }
    this.professorService.registrar(this.professor).subscribe(
      (res:Professor)=>{
        console.log(`Professor ${res._id} adicionado!`)
        this.toasty.success(`User ${res.nome} adicionado!.`);
        this.router.navigate([""]);
      }
    );
  }

}
