import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { OverlayService } from '../core/service/overlay.service';
import { ApiService } from './../services/api.service';
@Component({
  selector: 'app-cadastro-endereco',
  templateUrl: './cadastro-endereco.page.html',
  styleUrls: ['./cadastro-endereco.page.scss'],
})
export class CadastroEnderecoPage implements OnInit {

  CEP: any;
  Logradouro: any;
  Bairro: any;
  Cidade: any;
  UF: any;

  constructor(private overlay: OverlayService, public provider: ApiService, private navCtrl: NavController, private alertCtrl: AlertController, private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }
  async OnclickCadastrar() {
    this.navCtrl.navigateForward('/cadastro-checklist');
  }

  async OnclickCancelar() {
    this.navCtrl.navigateRoot('/tabs/login');
  }

  onPesquisar(item) {

    this.Logradouro = "";
    this.Bairro = "";
    this.Cidade = "";
    this.UF = "";

    //VALIDA O CEP INFORMADO
    if (this.CEP.length < 8 || this.CEP == undefined) {
      this.alertCtrl
        .create({
          message: "Ops!",
          subHeader: "O CEP informado e inválido!",
          buttons: ["OK"]
        })
        ;
    } else {

      this.overlay.loading({
        message: "Pesquisando Cep...",
        duration: 2000
      });

      //PESQUISA O CEP E CARREGA CAMPOS
      this.provider.PesquisarCep(this.CEP).subscribe((data: any) => {

        this.Logradouro = data.logradouro;
        this.Bairro = data.bairro;
        this.Cidade = data.localidade;
        this.UF = data.uf;


        if (data.erro == true) {
          this.overlay.alert
            ({
              header: "Ops!",
              message: "Nenhum registro encontrado.!",
              buttons: ["OK"]
            });
        }
      });
    }
  }
  ongeo(item) {

    var loading = this.overlay.loading({
      message: "Localizando...",
      duration: 3000
    });

    navigator.geolocation.getCurrentPosition(sucess => {
      console.log(sucess);
      var localidade = sucess.coords;

      this.provider
        .pesquisaGeo(localidade.latitude, localidade.longitude)
        .subscribe((data: any) => {
          console.log(data);
          this.CEP = data.address.postcode.replace("-", "");
          this.Logradouro = data.address.road;

          var b = data.address.neighbourhood != undefined
          console.log(b);
          if (b == null || b == undefined || b == false) {
            b = data.address.suburb;
          }
          this.Bairro = b;
          this.Cidade = data.address.city;
          this.UF = data.address.state;
        });
    });
  }
}
