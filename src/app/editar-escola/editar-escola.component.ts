import { EscolaService } from './../shared/services/escola.service';
import { Escola } from './../shared/model/escola';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-escola',
  templateUrl: './editar-escola.component.html',
  styleUrls: ['./editar-escola.component.css']
})
export class EditarEscolaComponent implements OnInit {

  form: FormGroup;

  escola: Escola = new Escola(null, null, null, null, null);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private service: EscolaService
  ) {}

  ngOnInit() {
    this.initEscola();
    this.buildForm();
  }

  public salvar() {
    const value = this.form.value;
    this.escola.nome = value.nome;
    this.escola.matriculados = +value.matriculados;
    this.escola.professores = +value.professores;
    this.escola.labinformatica = value.labinfo;

    if (this.escola.id) {
      this.service.alterar(this.escola).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/listar']);
      });
    } else {
      this.service.incluir(this.escola).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/listar']);
      });
    }
  }

  private initEscola() {
    this.route.params.subscribe(
      params => {
        const id = params['id'];
        if (id >= 0) {
          this.service.consultar(id).subscribe(
            res => {
              this.escola = res;
              this.buildForm();
          });
        }
    });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      nome: [this.escola.nome, Validators.required],
      matriculados: [this.escola.matriculados, Validators.required],
      professores: [this.escola.professores, Validators.required],
      labinfo: [this.escola.labinformatica, Validators.required]
    });
  }

}
