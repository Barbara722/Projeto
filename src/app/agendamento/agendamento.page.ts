import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.page.html',
  styleUrls: ['./agendamento.page.scss'],
})
export class AgendamentoPage implements OnInit {
   nome : string;
   sobrenome : string;
   data : string;
   horario : string;
   bairro : string;
   rua : string;
   cep : string;
   formGroup : FormGroup; 

   constructor( private formB : FormBuilder,
     private db: AngularFirestore,
     private  toasCtrl: ToastController) {
 
       this.formGroup = this.formB.group({
       nome : ['',Validators.required],
       sobrenome : ['',Validators.required],
       data : ['',Validators.required],
       horario : ['',Validators.required],
       bairro : ['',Validators.required],
       rua : ['',Validators.required],
       cep : ['',Validators.required],
       
       })
 
     }
 
   ngOnInit() {
   }
   agendar(){
     this.db.collection('agendamento') 
     .add(this.formGroup.value).then(() =>{ 
       this.presentToast(); 
     }).catch(()=>{
       console.log("Erro ao Agendar") 
     });
    
   }
   
   async presentToast(){
     const toast = await this.toasCtrl.create({
       message: 'Agendado com sucesso',
       duration: 2000  
     });
     toast.present();
   }
 }
 