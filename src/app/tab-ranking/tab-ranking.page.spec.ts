import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabRankingPage } from './tab-ranking.page';

describe('TabRankingPage', () => {
  let component: TabRankingPage;
  let fixture: ComponentFixture<TabRankingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabRankingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabRankingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
