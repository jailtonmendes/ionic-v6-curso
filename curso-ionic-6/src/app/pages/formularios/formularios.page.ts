import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.page.html',
  styleUrls: ['./formularios.page.scss'],
})
export class FormulariosPage implements OnInit {

  public criarInput: any[] = new Array;
  public criarListaSuspensa: any[] = new Array;
  public listaInput: any[] = new Array;
  public listaSuspensa: any[] = new Array;
  public listaSuspensaTemp: any[] = new Array;

  public temInput: boolean;
  public exibirNovoInput: boolean;
  public temListaSuspensa: boolean;
  public exibirNovaListaSuspensa: boolean;
  public exibirlistaSuspensaTemp: boolean;
  public btnSalvarListaSuspensa: boolean;

  public valorListaSuspensa = '';
  public nomeInput = '';
  public placeholderInput = '';
  public tipoInput = '';
  public nomeTituloDaLista = '';

  //LISTA SUSPENSA
  public nomeOpcaoDaListaSuspensa = '';

  constructor(private alertCtrl: AlertController) { 

    this.listaInput = []

    this.listaSuspensa = [
      {value: 'feminino', nome: 'Feminino', ngModel: 'sexo'},
      {value: 'masculino', nome: 'Masculino', ngModel: 'sexo'}
    ]

    this.criarInput = []
    this.criarListaSuspensa = []

    this.temInput = false;
    this.temListaSuspensa = false;
    this.exibirNovoInput = false;
    this.exibirlistaSuspensaTemp = false;
    this.btnSalvarListaSuspensa = false;

  }

  ngOnInit() {
    if(this.listaInput.length > 0) {
      this.temInput = true;
    }
    if(this.listaSuspensa.length > 0) {
      // this.temListaSuspensa =true;
    }
  }

  novoInput() {
    this.exibirNovoInput = !this.exibirNovoInput;
    //Limpar valores do input
    this.nomeInput = '';
    this.tipoInput = '';
  }

  novaListaSuspensa() {
    this.exibirNovaListaSuspensa = !this.exibirNovaListaSuspensa;
  }

  //ADICIONANDO NOVO INPUT
  addNovoInput() {
    let id: '';
    console.log(id)
    let nomeInput = this.nomeInput;
    let tipoInput = this.tipoInput;
    let novoInput = {id: id, nome: nomeInput, tipo: tipoInput};

    if(this.nomeInput == '' || this.nomeInput == null) {
      this.alertComun('Informe o título do input')

    }else {
      this.listaInput.push(novoInput);
      this.nomeInput = '';
      this.tipoInput = '';
      this.temInput = true;
      console.log('novoInput', novoInput)
    }
    
  }

  //ADICIONANDO NOVA LISTA SUSPENSA
  addListaSuspensa() {
      let nomeOpcaoDaListaSuspensa = this.nomeOpcaoDaListaSuspensa;
      let novaListaSuspensa = {nome: nomeOpcaoDaListaSuspensa}

    if(this.nomeOpcaoDaListaSuspensa == '' ) {
      this.alertComun('Informe o título da lista!')

    }else {
      this.criarListaSuspensa.push(novaListaSuspensa)
      this.exibirlistaSuspensaTemp = true; 
      this.btnSalvarListaSuspensa = true

      this.nomeOpcaoDaListaSuspensa = '';
    }
    
  }

  salvarListaSuspensa() {

    this.listaSuspensa = this.criarListaSuspensa;
    this.temListaSuspensa = true;
    // this.nomeTituloDaLista = '';
    this.nomeOpcaoDaListaSuspensa = '';
    console.log('salvar = ', this.listaSuspensa);
  }




  qualValor() {
    console.log('O valor é: ', this.valorListaSuspensa)
  }


  async alertComun(mensagem) {
    let alert = await this.alertCtrl.create({
      header: 'Atenção',
      // subHeader: 'Subtitle',
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
  }

}
