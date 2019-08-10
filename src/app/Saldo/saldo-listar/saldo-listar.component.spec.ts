import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldoListarComponent } from './saldo-listar.component';

describe('SaldoListarComponent', () => {
  let component: SaldoListarComponent;
  let fixture: ComponentFixture<SaldoListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaldoListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaldoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
