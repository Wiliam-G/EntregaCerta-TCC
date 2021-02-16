import { Component, OnInit } from "@angular/core";
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { ModalController } from "@ionic/angular";
import { DestinatarioEncomendasComponent } from "./destinatario-encomendas/destinatario-encomendas.component";

@Component({
  selector: "app-scan-code-destinatario",
  templateUrl: "./scan-code-destinatario.page.html",
  styleUrls: ["./scan-code-destinatario.page.scss"],
})
export class ScanCodeDestinatarioPage implements OnInit {
  data: string;

  constructor(
    private barcodeScanner: BarcodeScanner,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  scan() {
    this.data = null;
    this.barcodeScanner
      .scan({ formats: "QR_CODE" })
      .then((barcodeData) => {
        console.log("1547 Barcode data", barcodeData);
        this.data = barcodeData.text;
        this.modalCtrl
          .create({
            component: DestinatarioEncomendasComponent,
            // usar o codigo ao invés do destinatário
            componentProps: { idDestinatario: 1 },
          })
          .then((modalEl) => {
            modalEl.present();
          });
      })
      .catch((err) => {
        console.log("Error", err);
      });

      
    // this.modalCtrl
    //   .create({
    //     component: DestinatarioEncomendasComponent,
    //     componentProps: { idDestinatario: 1 },
    //   })
    //   .then((modalEl) => {
    //     modalEl.present();
    //   });
  }
}
