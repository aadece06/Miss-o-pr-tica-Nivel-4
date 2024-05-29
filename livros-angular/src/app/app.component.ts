import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LivroListaComponent } from "./livro-lista/livro-lista.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [RouterModule, LivroListaComponent]
})
export class AppComponent {
  title = 'livros-angular';
}
