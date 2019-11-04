import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.page.html',
  styleUrls: ['./cliente-cadastro.page.scss'],
})
export class ClienteCadastroPage implements OnInit {
   
  formGroup : FormGroup; 

  constructor( private formB : FormBuilder,
    private db: AngularFirestore,
    private  toasCtrl: ToastController) {

      this.formGroup = this.formB.group({
      cpf : ['',Validators.required],
      email : ['',Validators.required],
      nome : ['',Validators.required],
      senha : ['',Validators.required],


      })

    }

  ngOnInit() {
  }
  cadastrar(){
    this.db.collection('cliente') // Seleciono a coleção do firebase
    .add(this.formGroup.value).then(() =>{ //.add realiza o cadastro, os dados do formGroup
      this.presentToast(); // Dadis cadastrados com sucesso
    }).catch(()=>{
      console.log("Erro ao Cadastrar") // Erro
    });
    //then -> Sucesso
    //catch -> Erro
  }
  // Template para toastController
  async presentToast(){
    const toast = await this.toasCtrl.create({
      message: 'Cadastro com sucesso',
      duration: 2000  
    });
    toast.present();
  }


  
}
