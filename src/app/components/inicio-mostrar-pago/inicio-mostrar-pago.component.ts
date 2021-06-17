import { Pago } from './../../models/pago.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-mostrar-pago',
  templateUrl: './inicio-mostrar-pago.component.html',
  styleUrls: ['./inicio-mostrar-pago.component.css']
})
export class InicioMostrarPagoComponent implements OnInit {
   public pago : Pago;
  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   /* this.activatedRoute.params.subscribe(params => {
      console.log(params, "holaaaa")
    })*/
    this.pago= new Pago();
    this.activatedRoute.queryParamMap.subscribe(params =>{
      if(params.get('telephone')!=null){
      //this.pago.description=params.get('description');
      this.pago.telephone=params.get('telephone');
      this.pago.buyerEmail= params.get('buyerEmail');
      this.pago.referenceCode= params.get('referenceCode');
      this.pago.pseBank= params.get('pseBank');
      this.pago.transactionId=params.get('transactionId');
      this.pago.processingDate = params.get('processingDate');
      this.pago.message= params.get('message');
      this.pago.transactionState = params.get('transactionState');
       if(this.pago.message=="APPROVED"){
         this.apiService.ordenesService.pagar(this.pago.referenceCode).subscribe(params => {
           console.log(params)
           
         })

       }
      }
      else{
        this.router.navigate(['inicio/consultar-orden']);
      }
    }     
      )
  }

  cargarDatos(): void{
    /*this.activatedRoute.params.subscribe(params => {
      let referenceCode = params['referenceCode']
      let merchantId = params['merchantId']
      
      if(referenceCode && merchantId){
        console.log(referenceCode + merchantId);
        alert(referenceCode + merchantId);

      }
    })*/
    /*this.urlTree = this.router.parseUrl(this.router.url);
    this.urlTree = this.router.parseUrl(this.router.url);

    this.username = this.urlTree.queryParams['username'];
    this.type = this.urlTree.queryParams['type'];
    this.agent = this.urlTree.queryParams['agent'];*/

  }

}
