import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaPagarListarComponent } from './conta-pagar-listar.component';

describe('ContaPagarListarComponent', () => {
  let component: ContaPagarListarComponent;
  let fixture: ComponentFixture<ContaPagarListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaPagarListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaPagarListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
