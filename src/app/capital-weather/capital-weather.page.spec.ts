import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CapitalWeatherPage } from './capital-weather.page';

describe('CapitalWeatherPage', () => {
  let component: CapitalWeatherPage;
  let fixture: ComponentFixture<CapitalWeatherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapitalWeatherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CapitalWeatherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
