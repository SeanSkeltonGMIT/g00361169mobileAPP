import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeatherdataPage } from './weatherdata.page';

describe('WeatherdataPage', () => {
  let component: WeatherdataPage;
  let fixture: ComponentFixture<WeatherdataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherdataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherdataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
