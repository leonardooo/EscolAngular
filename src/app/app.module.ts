import { AppRouting } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListarEscolaComponent } from './listar-escola/listar-escola.component';
import { EditarEscolaComponent } from './editar-escola/editar-escola.component';
import { LoginComponent } from './login/login.component';
import { SimNaoPipe } from './shared/pipes/sim-nao.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListarEscolaComponent,
    EditarEscolaComponent,
    LoginComponent,
    SimNaoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
