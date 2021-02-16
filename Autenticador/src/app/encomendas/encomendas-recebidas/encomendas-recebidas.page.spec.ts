import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EncomendasRecebidasPage } from './encomendas-recebidas.page';

describe('EncomendasRecebidasPage', () => {
  let component: EncomendasRecebidasPage;
  let fixture: ComponentFixture<EncomendasRecebidasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncomendasRecebidasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EncomendasRecebidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
