import { Escola } from './../shared/model/escola';
import { EscolaService } from './../shared/services/escola.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-escola',
  templateUrl: './listar-escola.component.html',
  styleUrls: ['./listar-escola.component.css']
})
export class ListarEscolaComponent implements OnInit {

  escolas: Escola[];
  escola: Escola;

  constructor(
    private service: EscolaService
  ) {
    this.escolas = [];
    this.listarEscolas();
  }

  ngOnInit() {
  }

  apagar(id: number) {
    this.service.excluir(id).subscribe(
      res => {
        console.log(res);
        this.listarEscolas();
    });
  }

  listarEscolas() {
    this.service.listar().subscribe(
      resp => {
        this.escolas = resp;
        console.log('listarEscolas() ' + resp);
      }
    );
  }

}
