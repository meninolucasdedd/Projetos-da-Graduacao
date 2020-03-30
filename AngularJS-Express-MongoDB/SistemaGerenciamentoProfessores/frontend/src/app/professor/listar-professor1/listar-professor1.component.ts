import { ProfessorService } from '../../services/professor.service';
import { Professor } from '../../models/professor.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-professor1',
  templateUrl: './listar-professor1.component.html',
  styleUrls: ['./listar-professor1.component.css']
})
export class ListarProfessor1Component implements OnInit {

  professores:Professor[];



  constructor(private professorService: ProfessorService,
    private router:Router) { 
    
    this.professores = [];
    }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.professorService.listar().subscribe(
      (res:Professor[]) =>{
        this.professores = res;
      }
    )
  }


  deletar(id:number){
    if(!confirm("Hey DOIDO, Presta atenção ai!")){
      return;
    }

    this.professorService.deletar(id).subscribe(
      (res:any)=>{
        this.listar();
      }
    )
  }

  editar(id:number){
    this.router.navigate(['editar/professor', id]);

  }

}
