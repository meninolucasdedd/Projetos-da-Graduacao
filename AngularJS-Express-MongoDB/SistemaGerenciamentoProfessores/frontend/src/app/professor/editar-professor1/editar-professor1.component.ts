import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { ProfessorService } from '../../services/professor.service';
import { Professor } from '../../models/professor.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({ 
  selector: 'app-editar-professor1', 
  templateUrl: './editar-professor1.component.html', 
  styleUrls: ['./editar-professor1.component.css'] 
})

export class EditarProfessor1Component implements OnInit {

  professor:Professor = new Professor();
  
  constructor(private activatedRoute:ActivatedRoute,
              private professorService:ProfessorService,
              private router:Router,
              private toasty:ToastrService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params["id"];
    this.professorService.recuperar(id).subscribe(
      (res:Professor)=>{
        this.professor = res;
      }
    );
  }

  onSubmit(editForm:NgForm){

    if(editForm.invalid){
      this.toasty.error("Todos os campos são obrigatórios.");
      return;
    }

    this.professorService.editar(this.professor).subscribe(
      (res:Professor)=>{
        console.log(`professor com id ${res._id} foi atualizado!`);
        this.router.navigate(["listar/professor"]);
      },
    );
  }

}
