import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { Encomenda } from "src/app/encomendas/encomenda.model";

@Component({
  selector: "app-encomenda-detail-modal",
  templateUrl: "./encomenda-detail-modal.component.html",
  styleUrls: ["./encomenda-detail-modal.component.scss"],
})
export class EncomendaDetailModalComponent implements OnInit {
  @Input() encomenda: Encomenda;
  data: string;
  teste = "TESTEEEEEEEEEE";

  constructor(
    private modalCtrl: ModalController,
    private barcodeScanner: BarcodeScanner
  ) {}

  ngOnInit() {}

  onCancel() {
    console.log("click");
    this.modalCtrl.dismiss();
  }

  scan() {
    this.data = null;
    this.barcodeScanner
      .scan({ formats: "QR_CODE" })
      .then((barcodeData) => {
        console.log("1547 Barcode data", barcodeData);
        this.data = barcodeData.text;
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }
}
