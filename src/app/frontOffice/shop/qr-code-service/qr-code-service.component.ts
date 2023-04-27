import { Component } from '@angular/core';
import { ShopServiceService } from 'src/app/Service/shopService/shop-service.service';

@Component({
  selector: 'app-qr-code-service',
  templateUrl: './qr-code-service.component.html',
  styleUrls: ['./qr-code-service.component.css']
})
export class QrCodeServiceComponent {
  qrCode: any;


  constructor(private qrCodeService: ShopServiceService) { }

  generateQrCode() {
    this.qrCodeService.generateQrCode(1).subscribe((result: Blob) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.qrCode = reader.result;
      };
      reader.readAsDataURL(result);
    });
  }
}
