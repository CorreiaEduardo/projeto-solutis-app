import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaReceberListarComponent } from './conta-receber-listar.component';

describe('ContaReceberListarComponent', () => {
  let component: ContaReceberListarComponent;
  let fixture: ComponentFixture<ContaReceberListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaReceberListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaReceberListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
