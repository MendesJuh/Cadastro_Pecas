import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecaDetalheComponent } from './peca-detalhe.component';

describe('PecaDetalheComponent', () => {
  let component: PecaDetalheComponent;
  let fixture: ComponentFixture<PecaDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PecaDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PecaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
