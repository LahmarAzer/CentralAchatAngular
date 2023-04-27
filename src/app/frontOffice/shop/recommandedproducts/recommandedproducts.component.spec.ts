import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommandedproductsComponent } from './recommandedproducts.component';

describe('RecommandedproductsComponent', () => {
  let component: RecommandedproductsComponent;
  let fixture: ComponentFixture<RecommandedproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommandedproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommandedproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
