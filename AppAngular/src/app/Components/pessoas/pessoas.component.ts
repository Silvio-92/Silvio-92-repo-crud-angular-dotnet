import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { Pessoa } from '../../Pessoa';
import { PessoasService } from '../../pessoas.service';


@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrl: './pessoas.component.css'
})

export class PessoasComponent implements OnInit{

  //formulario: any;
  formulario: FormGroup;

  tituloFormulario:string = "";

  constructor(private pessoasService : PessoasService, private formBuilder: FormBuilder){
    this.formulario = this.formBuilder.group({ // Use formBuilder.group para inicializar o FormGroup
      nome: [null, Validators.required], // Adicione validadores, se necessário
      sobrenome: [null, Validators.required],
      idade: [null, Validators.required],
      profissao: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.tituloFormulario = 'Nova Pessoa';
  }
  

  EnviarFormulario(): void {
    if (this.formulario.valid) { // Verifique se o formulário é válido antes de enviar
      const pessoa: Pessoa = this.formulario.value;
      this.pessoasService.SalvarPessoa(pessoa).subscribe(resultado => {
        alert('Pessoa inserida com sucesso');
      });
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }

}
