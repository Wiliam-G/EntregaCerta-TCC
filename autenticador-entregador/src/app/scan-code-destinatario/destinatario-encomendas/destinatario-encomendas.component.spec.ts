import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DestinatarioEncomendasComponent } from './destinatario-encomendas.component';

describe('DestinatarioEncomendasComponent', () => {
  let component: DestinatarioEncomendasComponent;
  let fixture: ComponentFixture<DestinatarioEncomendasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinatarioEncomendasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DestinatarioEncomendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
