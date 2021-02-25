import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdDetalhesComponent } from './prod-detalhes.component';

describe('ProdDetalhesComponent', () => {
  let component: ProdDetalhesComponent;
  let fixture: ComponentFixture<ProdDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
