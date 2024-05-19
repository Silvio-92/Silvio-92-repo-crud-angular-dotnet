import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrl: './pessoas.component.css'
})

export class PessoasComponent implements OnInit{

  formilario: any;
  tituloFormulario:string = "";

  ngOnInit(): void {
    this.tituloFormulario = 'Nova Pessoa';
    this.formilario = new FormControl({
      nome: new FormControl(null),
      sobrenome: new FormControl(null),
      idade: new FormControl(null),
      profissao: new FormControl(null),
    });
  }

}
