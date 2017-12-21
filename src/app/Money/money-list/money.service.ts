import {Injectable} from '@angular/core';

import {themoney} from '../../common/money/money';

@Injectable()

export class moneyservice{
    Money:themoney[]=[
        new themoney ('11/11','9:00', '11:00', '2 Hrs', '50$'),
        new themoney ('11/11','9:00', '11:00', '2 Hrs', '50$'),
        new themoney ('11/11','9:00', '11:00', '2 Hrs', '50$'),
        new themoney ('11/11','9:00', '11:00', '2 Hrs', '50$'),
        
      ];
    
      getmoney():Promise< themoney[]>{
        return new Promise (resolve =>{
            setTimeout(() =>resolve(this.Money),1000);
     });
    }
   deletemoney(money:themoney): Promise<any>{
    return new Promise(resolve =>{
        setTimeout(() =>{ 
    var index=this.Money.indexOf(money,0);
    if (index>-1){
      this.Money.splice(index,1);
    }
}, 1000);
});
   }
   insertmoney(money:themoney):Promise<any>{
    return new Promise(resolve =>{
        setTimeout(() =>{
    this.Money.push(money);
}, 1000);
});
   } 
   updatemoney(money:themoney):Promise<any>{
    //Nothing for this
    return Promise.resolve();
}
}