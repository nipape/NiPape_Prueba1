import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  constructor(
    private alertController: AlertController
  ) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Si los datos coinciden recibirás tu correo',
      buttons: ['Ok!'],
    });

    await alert.present();
  }
  ngOnInit() {
  }

}
