import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(
    private alertController: AlertController
  ) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Usuario registrado',
      buttons: ['Ok!'],
    });

    await alert.present();
  }
  ngOnInit() {
  }

}
