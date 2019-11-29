import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailFichePage } from './detail-fiche.page';

describe('DetailFichePage', () => {
  let component: DetailFichePage;
  let fixture: ComponentFixture<DetailFichePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFichePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailFichePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
