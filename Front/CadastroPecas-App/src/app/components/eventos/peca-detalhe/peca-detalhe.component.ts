
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Peca } from '../../../models/Peca';
import { PecaService } from '../../../services/peca.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsLocaleService, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-peca-detalhe',
  templateUrl: './peca-detalhe.component.html',
  styleUrls: ['./peca-detalhe.component.scss']
})
export class PecaDetalheComponent implements OnInit {
   modalRef: BsModalRef;
   pecaId: number;
   peca = {} as Peca;
   form!: FormGroup;
   estadoSalvar = 'post';
   loteAtual = {id: 0, nome: '', indice: 0};
   get f(): any{
    return this.form.controls;
   }
   get modoEditar(): boolean{
    return this.estadoSalvar === 'put';
   }
   get lotes(): FormArray{
    return this.form.get('lotes') as FormArray;
   }

  constructor(private fb: FormBuilder,
              private localeService: BsLocaleService,
              private activatedRouter: ActivatedRoute,
              private router: Router,
              private pecaService: PecaService,

              private spinner: NgxSpinnerService,
              private modalService: BsModalService,
              private toastr: ToastrService) {

               }
  public carregarEvento(): void{
    this.pecaId = +this.activatedRouter.snapshot.paramMap.get('id');
    if (this.pecaId != null && this.pecaId !== 0){
      this.spinner.show();
      this.estadoSalvar = 'put';
      this.pecaService.getPecasById(this.pecaId).subscribe(
        (peca: Peca) => {
          this.peca = {...peca};
          this.form.patchValue(this.peca);

        },
        (error: any) => {
          this.toastr.error('Erro ao tentar carregar a peça.', 'Erro!');
          console.error(error);
        }
      ).add(() => this.spinner.hide());
    }
  }

  ngOnInit(): void {
    this.carregarEvento();

    this.validation();
  }

  public validation(): void {
    this.form = this.fb.group({
      descricao: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      preco: ['', Validators.required],

    });
  }


  public resetForm(): void{
    this.form.reset();
  }

  public salvarEvento(): void{
    this.spinner.show();
    if (this.form.valid){

      this.peca =
      this.estadoSalvar === 'post'
        ? { ...this.form.value }
        : { id: this.peca.id, ...this.form.value };
      this.pecaService[this.estadoSalvar](this.peca).subscribe(
          (pecaRetorno: Peca) => {this.toastr.success('Peça salvo com sucesso', 'Sucesso');
                                      this.router.navigate([`pecas/detalhe/${pecaRetorno.id}`]);
          },
          (error: any) => {
            console.error(error);
            this.spinner.hide();
            this.toastr.error('Error ao salvar o evento', 'Erro');
          },
          () => this.spinner.hide()
        );

    }
  }






}
