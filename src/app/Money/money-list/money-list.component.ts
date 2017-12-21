import { Component, OnInit } from '@angular/core';

import {moneyservice} from './money.service';
import{themoney} from '../../common/money/money';

@Component({
  selector: 'app-money-list',
  templateUrl: './money-list.component.html',
  styleUrls: ['./money-list.component.css']
})
export class MoneyListComponent implements OnInit  {
  isNewForm: boolean;
  showForm: boolean;
  formmoney: themoney;
  Money: themoney[];

  constructor(private moneyservice: moneyservice){}

  ngOnInit(){
     this.moneyservice.getmoney()
    .then(Money =>this.Money=Money)
    .catch(error =>console.log(error));
  }
  
  showmoneyform (money:themoney){
    if(!money){
      money= new themoney("","","","","");
      this.isNewForm=true;
    }
    this.showForm=true;
    this.formmoney= money;
  }

  removemoney(money:themoney){
    this.moneyservice.deletemoney(money)
    .catch(error => console.log(error));
    
    
  }

  savemoney(money:themoney){
    if(money){
      if(this.isNewForm){
        this.moneyservice.insertmoney(money)
        .catch(error => console.log(error));
        
      }
      else{
        this.moneyservice.updatemoney(money)
        .catch(error => console.log(error));
        
      }
    this.showForm=false;
    this.isNewForm=false;
    money=null;  
    }
  }
}




