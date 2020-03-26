import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaLService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-consulta',
  templateUrl: './persona-consulta.component.html',
  styleUrls: ['./persona-consulta.component.css']
})
export class PersonaConsultaComponent implements OnInit {

personas:Persona[];
searchText:string;

  constructor(private personaLService: PersonaLService) { }

  ngOnInit() {
    this.get();
  }

  get(){
    this.personas = this.personaLService.get();
  }

}
