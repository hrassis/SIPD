import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoEventoComponent } from './edicao-evento.component';

describe('EdicaoEventoComponent', () => {
  let component: EdicaoEventoComponent;
  let fixture: ComponentFixture<EdicaoEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicaoEventoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
