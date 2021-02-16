import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import {
  ModalController,
  ActionSheetController,
  AlertController,
} from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { map, switchMap } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { Capacitor, Plugins } from "@capacitor/core";

import { MapModalComponent } from "../../map-modal/map-modal.component";
import { environment } from "../../../../environments/environment";
import { Endereco } from "src/app/enderecos/endereco.model";

@Component({
  selector: "app-location-picker",
  templateUrl: "./location-picker.component.html",
  styleUrls: ["./location-picker.component.scss"],
})
export class LocationPickerComponent implements OnInit {
  @Input() showPreview = false;
  @Output() locationPick = new EventEmitter<Endereco>();

  @Input() selectedLocationImage: string;
  isLoading = false;

  constructor(
    private modalCtrl: ModalController,
    private http: HttpClient,
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {}

  onPickLocation() {
    this.actionSheetCtrl
      .create({
        header: "Please choose",
        buttons: [
          {
            text: "Auto localização",
            handler: () => {
              this.locateUser();
            },
          },
          {
            text: "Escolha no mapa",
            handler: () => {
              this.openMap();
            },
          },
          { text: "Cancel", role: "cancel" },
        ],
      })
      .then((actionSheetEl) => actionSheetEl.present());
  }

  private openMap() {
    this.modalCtrl
      .create({
        component: MapModalComponent,
      })
      .then((modalEl) => {
        modalEl.present();

        modalEl.onDidDismiss().then((modalData) => {
          if (!modalData.data) {
            return;
          }

          this.createPlace(modalData.data.lat, modalData.data.lng);
        });
      });
  }

  private createPlace(lat: number, lng: number) {
 
    let pickedLocation;
    // const pickedLocation: Endereco = {
    //   coordinates: {
    //     lat: lat,
    //     lng: lng,
    //   },
    //   nome: null,
    //   staticImageMapUrl: null,
    // };

    this.isLoading = true;

    this.getAddress(lat, lng)
      .pipe(
        switchMap((res) => {
          console.log(res);
          pickedLocation = {
            rua: res[1].long_name,
            numero: res[0].long_name,
            bairro: res[2].long_name,
            cidade: res[3].long_name,
            estado: res[4].long_name,
            cep: res[6].long_name,
            staticImageMapUrl: "",
            lat,
            lng
          };
          return of(
            this.getMapImage(
              pickedLocation.lat,
              pickedLocation.lng,
              18
            )
          );
        })
      )
      .subscribe((staticImageMapUrl) => {
        pickedLocation.staticImageMapUrl = staticImageMapUrl;
        this.locationPick.emit(pickedLocation);
        this.selectedLocationImage = staticImageMapUrl;
        this.isLoading = false;
      });
  }

  private locateUser() {
    if (!Capacitor.isPluginAvailable("Geolocation")) {
      this.showErrorAlert();
      return;
    }

    this.isLoading = true;
    Plugins.Geolocation.getCurrentPosition()
      .then((geoPosition) => {
        this.createPlace(
          geoPosition.coords.latitude,
          geoPosition.coords.latitude
        );
        this.isLoading = false;
      })
      .catch((error) => {
        this.isLoading = false;
        this.showErrorAlert();
      });
  }

  private showErrorAlert() {
    this.alertCtrl
      .create({
        header: "Could not fetch location",
        message: "Please use the map to pick a location!",
        buttons: ["Okay"],
      })
      .then((alertEl) => alertEl.present());
  }

  private getAddress(lat: number, lng: number) {
    return this.http
      .get<any>(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${environment.googleMapsAPIKey}`
      )
      .pipe(
        map((geoData) => {
          if (!geoData || !geoData.results || geoData.results.length === 0) {
            return null;
          }
          
          console.log(geoData);
          return geoData.results[0].address_components;
        })
      );
  }

  private getMapImage(lat: number, lng: number, zoom: number) {
    return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=500x300&maptype=roadmap
    &markers=color:red%7Clabel:Place%7C${lat},${lng}
    &key=${environment.googleMapsAPIKey}`;
  }
}
