import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecebedoresPage } from './recebedores.page';

describe('RecebedoresPage', () => {
  let component: RecebedoresPage;
  let fixture: ComponentFixture<RecebedoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecebedoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecebedoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
