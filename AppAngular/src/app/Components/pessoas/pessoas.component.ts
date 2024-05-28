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

  tituloFormulario:string ="";
  pessoas: Pessoa[] = [];

  visibilidadeTabela:boolean = true;
  visibilidadeFormulario:boolean = false;

  constructor(private pessoasService : PessoasService, private formBuilder: FormBuilder){
    this.formulario = this.formBuilder.group({ // Use formBuilder.group para inicializar o FormGroup
      nome: [null, Validators.required], // Adicione validadores, se necessário
      sobrenome: [null, Validators.required],
      idade: [null, Validators.required],
      profissao: [null, Validators.required]
    });
  }

  ngOnInit(): void {

    this.pessoasService.PegarTodos().subscribe(resultado => {
      this.pessoas = resultado;
    });

    this.tituloFormulario = 'Nova Pessoa';
  }

  ExibirFormularioCadastro(): void{
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;

    this.tituloFormulario = 'Nova Pessoa';
    this.formulario = this.formBuilder.group({ // Use formBuilder.group para inicializar o FormGroup
      nome: [null, Validators.required], // Adicione validadores, se necessário
      sobrenome: [null, Validators.required],
      idade: [null, Validators.required],
      profissao: [null, Validators.required]
    });
  }

  ExibirFormularioAtualizacao(pessoaId: any):void  {
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;

    this.pessoasService.PegarPeloId(pessoaId).subscribe(resultado => {
      this.tituloFormulario = `Atualizar ${resultado.nome} ${resultado.sobrenome}`;

      this.formulario = this.formBuilder.group({ 
        pessoaId:[resultado.pessoaId], 
        nome: [resultado.nome, Validators.required], 
        sobrenome: [resultado.sobrenome, Validators.required],
        idade: [resultado.idade, Validators.required],
        profissao: [resultado.profissao, Validators.required]
      });
    });
  }

  EnviarFormulario(): void {
      const pessoa: Pessoa = this.formulario.value;

      if(pessoa.pessoaId){
        this.pessoasService.AtualizarPessoa(pessoa).subscribe(resultado =>{
            this.visibilidadeTabela = true;
            this.visibilidadeFormulario = false;
            alert('Pessoa atualizada com sucesso');
        });
      }
      else {
        this.pessoasService.SalvarPessoa(pessoa).subscribe(resultado => {
          this.visibilidadeTabela = true;
          this.visibilidadeFormulario = false;
          alert('Pessoa inserida com sucesso');
          
          this.pessoasService.PegarTodos().subscribe(registro => {
            this.pessoas = registro;
          });
        });
      }
  }

  Voltar():void{
    this.visibilidadeTabela = true;
    this.visibilidadeFormulario = false;
  }

}
