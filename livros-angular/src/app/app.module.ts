import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';
import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    LivroDadosComponent
  ],
  imports: [
    AppComponent,
    LivroListaComponent,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ControleEditoraService,
    ControleLivrosService
  ],

})
export class AppModule { }
