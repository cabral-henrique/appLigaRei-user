import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabConvocarPage } from './tab-convocar.page';

describe('TabConvocarPage', () => {
  let component: TabConvocarPage;
  let fixture: ComponentFixture<TabConvocarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabConvocarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabConvocarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
