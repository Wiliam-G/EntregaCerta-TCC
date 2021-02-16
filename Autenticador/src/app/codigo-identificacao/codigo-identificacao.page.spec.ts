import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodigoIdentificacaoPage } from './codigo-identificacao.page';

describe('CodigoIdentificacaoPage', () => {
  let component: CodigoIdentificacaoPage;
  let fixture: ComponentFixture<CodigoIdentificacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodigoIdentificacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodigoIdentificacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
