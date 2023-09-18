
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PecasComponent } from './components/eventos/pecas.component';


import { NavComponent } from './shared/nav/nav.component';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { NgxCurrencyModule } from 'ngx-currency';
import { DateTimeFormatPipe } from './helpers/DateTimeFormat.pipe';

import { TitleComponent } from './shared/title/title.component';
import { PecaDetalheComponent } from './components/eventos/peca-detalhe/peca-detalhe.component';
import { PecaListaComponent } from './components/eventos/peca-lista/peca-lista.component';
import { PecaService } from './services/peca.service';

defineLocale('pt-br', ptBrLocale);
@NgModule({
  declarations: [
    AppComponent,
      PecasComponent,
      NavComponent,
      DateTimeFormatPipe,
      TitleComponent,
      PecaDetalheComponent,
      PecaListaComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    NgxSpinnerModule,
    NgxCurrencyModule,
    ToastrModule.forRoot({timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true})
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
  PecaService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
