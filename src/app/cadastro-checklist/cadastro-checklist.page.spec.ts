import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastroChecklistPage } from './cadastro-checklist.page';

describe('CadastroChecklistPage', () => {
  let component: CadastroChecklistPage;
  let fixture: ComponentFixture<CadastroChecklistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroChecklistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroChecklistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
