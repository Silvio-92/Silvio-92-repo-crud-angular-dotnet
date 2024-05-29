import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PessoasService } from './pessoas.service'; // Aula 5
import { CommonModule } from '@angular/common'; // Aula 5
import { HttpClientModule } from '@angular/common/http'; // Aula 5
import { ReactiveFormsModule } from '@angular/forms';
import { PessoasComponent } from './Components/pessoas/pessoas.component'; // Aula 5
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importação necessária
import { ModalModule } from 'ngx-bootstrap/modal'; // Importação do ngx-bootstrap modal



@NgModule({
  declarations: [
    AppComponent,
    PessoasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Adicione esta linha
    AppRoutingModule,
    CommonModule,         // Aula 5
    HttpClientModule,     // Aula 5
    ReactiveFormsModule,   // Aula 5
    ModalModule.forRoot() // Certifique-se de configurar o ngx-bootstrap modal
  ],
  providers: [HttpClientModule, PessoasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
