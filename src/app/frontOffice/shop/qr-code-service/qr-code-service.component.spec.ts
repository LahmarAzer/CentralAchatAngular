import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrCodeServiceComponent } from './qr-code-service.component';

describe('QrCodeServiceComponent', () => {
  let component: QrCodeServiceComponent;
  let fixture: ComponentFixture<QrCodeServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrCodeServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrCodeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
