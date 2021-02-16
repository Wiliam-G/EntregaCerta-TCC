import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EncomendasPage } from './encomendas.page';

describe('EncomendasPage', () => {
  let component: EncomendasPage;
  let fixture: ComponentFixture<EncomendasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncomendasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EncomendasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
