import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DadosPessoaisPage } from './dados-pessoais.page';

describe('DadosPessoaisPage', () => {
  let component: DadosPessoaisPage;
  let fixture: ComponentFixture<DadosPessoaisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosPessoaisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DadosPessoaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
