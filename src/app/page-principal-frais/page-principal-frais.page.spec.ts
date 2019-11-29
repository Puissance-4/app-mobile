import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagePrincipalFraisPage } from './page-principal-frais.page';

describe('PagePrincipalFraisPage', () => {
  let component: PagePrincipalFraisPage;
  let fixture: ComponentFixture<PagePrincipalFraisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePrincipalFraisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagePrincipalFraisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
