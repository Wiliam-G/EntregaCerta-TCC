import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScanCodeDestinatarioPage } from './scan-code-destinatario.page';

describe('ScanCodeDestinatarioPage', () => {
  let component: ScanCodeDestinatarioPage;
  let fixture: ComponentFixture<ScanCodeDestinatarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanCodeDestinatarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScanCodeDestinatarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
