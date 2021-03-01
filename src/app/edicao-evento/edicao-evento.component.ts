import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

@Component({
  selector: 'edicao-evento',
  templateUrl: './edicao-evento.component.html',
  styleUrls: ['./edicao-evento.component.scss']
})
export class EdicaoEventoComponent implements OnInit {

  // constructor() { }

  analistaControl = new FormControl();
  canalComunicacaoControl = new FormControl();
  quemControl = new FormControl();
  coturCNCLControl = new FormControl();
  analistaValidacaoControl = new FormControl();

  //Listas
  listaAnalistas: string[] = [
    "Gabriela",
    "Guilherme",
    "Hudson",
    "Leonardo",
    "Luana",
    "Pedro",
    "Rachel"
  ];
  listaStatus: string[] = ["Em andamento", "Concluído"];
  listaCanaisComunicacao: string[] = [
    "Canal 1",
    "Canal 2",
    "Canal 3",
    "Canal 4",
    "Canal 5",
    "Canal 6",
    "Canal 7",
    "Canal 8",
    "Canal 9",
    "Canal 10"
  ];
  listaQuem = this.listaAnalistas;
  listaOrigens = ["Origem 1", "Origem 2", "Origem 4", "Origem 4"];
  listaNiveisAlerta = ["Nível 1", "Nível 2", "Nível 3"];
  listaCoturCNCL = this.listaAnalistas;
  listaCategoria168 = [
    "Categoria 1",
    "Categoria 2",
    "Categoria 3",
    "Categoria 4",
    "Categoria 5",
    "Categoria 6"
  ];

  listaSubcategoria168 = [
    "Subcategoria 1",
    "Subcategoria 2",
    "Subcategoria 3",
    "Subcategoria 4",
    "Subcategoria 5",
    "Subcategoria 6"
  ];
  listaValidacao = [
    "Validação 1",
    "Validação 2",
    "Validação 3",
    "Validação 4",
    "Validação 5",
    "Validação 6"
  ];
  listaAnalistaValidacao = this.listaAnalistas;

  //Filtros
  filtroAnalistas: Observable<string[]>;
  filtroCanaisComunicacao: Observable<string[]>;
  filtroQuem: Observable<string[]>;
  filtroCoturCNCL: Observable<string[]>;
  filtroAnalistaValidacao: Observable<string[]>;

  ngOnInit(): void {

    this.filtroAnalistas = this.analistaControl.valueChanges.pipe(
      startWith(""),
      map(value => this._filter(value, this.listaAnalistas))
    );

    this.filtroCanaisComunicacao = this.canalComunicacaoControl.valueChanges.pipe(
      startWith(""),
      map(value => this._filter(value, this.listaCanaisComunicacao))
    );

    this.filtroQuem = this.quemControl.valueChanges.pipe(
      startWith(""),
      map(value => this._filter(value, this.listaQuem))
    );

    this.filtroCoturCNCL = this.coturCNCLControl.valueChanges.pipe(
      startWith(""),
      map(value => this._filter(value, this.listaCoturCNCL))
    );

    this.filtroAnalistaValidacao = this.analistaValidacaoControl.valueChanges.pipe(
      startWith(""),
      map(value => this._filter(value, this.listaAnalistaValidacao))
    );
  }

  private _filter(value: string, list: string[]): string[] {
    return list.filter(option => option.toLowerCase().includes(value.toLowerCase()));
  }
}