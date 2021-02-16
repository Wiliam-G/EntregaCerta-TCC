import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EncomendasAtivasPage } from './encomendas-ativas.page';

describe('EncomendasAtivasPage', () => {
  let component: EncomendasAtivasPage;
  let fixture: ComponentFixture<EncomendasAtivasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncomendasAtivasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EncomendasAtivasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
