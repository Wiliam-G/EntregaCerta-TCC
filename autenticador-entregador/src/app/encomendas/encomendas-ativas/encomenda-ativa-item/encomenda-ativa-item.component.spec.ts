import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EncomendaAtivaItemComponent } from './encomenda-ativa-item.component';

describe('EncomendaAtivaItemComponent', () => {
  let component: EncomendaAtivaItemComponent;
  let fixture: ComponentFixture<EncomendaAtivaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncomendaAtivaItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EncomendaAtivaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
