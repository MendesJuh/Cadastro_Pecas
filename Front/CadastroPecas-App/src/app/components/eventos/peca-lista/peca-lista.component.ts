import { Router } from '@angular/router';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Peca } from '@app/models/Peca';
import { PecaService } from '@app/services/peca.service';

@Component({
  selector: 'app-peca-lista',
  templateUrl: './peca-lista.component.html',
  styleUrls: ['./peca-lista.component.scss']
})
export class PecaListaComponent implements OnInit {

  public pecas: Peca[] = [];
  public pecasFiltrados: Peca[] = [];

  public pecaId = 0;

  private _filtroLista: string = '';
  modalRef?: BsModalRef;
  message?: string;

  public get filtroLista(): string{
    return this._filtroLista;
  }

  public set filtroLista(value: string){
    this._filtroLista = value;
    this.pecasFiltrados = this.filtroLista ? this.filtrarPecas(this.filtroLista) : this.pecas;
  }
  public filtrarPecas(filtrarPor: string): Peca[]{
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.pecas.filter(
      (peca: any) => peca.descricao.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
      peca.descricao.toLocaleLowerCase().indexOf(filtrarPor) !== -1
      );

  }

  constructor(private pecaService: PecaService,
              private modalService: BsModalService,
              private toastr: ToastrService,
              private spinner: NgxSpinnerService,
              private router: Router) { }

  public ngOnInit(): void {
    this.spinner.show();
    this.getPecas();
  }


  public getPecas(): void{
    this.pecaService.getPecas().subscribe({
      next: (response: Peca[]) => {
       this.pecas = response,
       this.pecasFiltrados = response;
     },
      error: (error: any) => {
        this.spinner.hide();
        this.toastr.error('Erro ao carregar os Eventos', 'Erro');
      },
      complete: () => this.spinner.hide()
    });
  }

  openModal(event: any, template: TemplateRef<any>, pecaId: number): void {
    event.stopPropagation();
    this.pecaId = pecaId;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    this.modalRef?.hide();
    this.spinner.show();
    this.pecaService.deletePeca(this.pecaId).subscribe(
      (result: any) => {
        if (result.message === 'Deletado'){
        this.toastr.success('A peça foi deletada com Sucesso.', 'Deletado!');
        this.getPecas();
        }
      },
      (error: any) => {
        console.error(error);
        this.toastr.error(`Erro ao tentar deletar a peça ${this.pecaId}`, 'Erro');
      }
    ).add(() => this.spinner.hide());

  }

  decline(): void {
    this.message = 'Declined!';
    this.modalRef?.hide();
  }
  detalhePeca(id: number): void {
    this.router.navigate([`pecas/detalhe/${id}`]);
  }

}
