import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProfessor1Component } from './listar-professor1.component';

describe('ListarProfessor1Component', () => {
  let component: ListarProfessor1Component;
  let fixture: ComponentFixture<ListarProfessor1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarProfessor1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProfessor1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
