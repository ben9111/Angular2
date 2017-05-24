import { Injectable } from '@angular/core';
import {initPhone} from './initPhone'

@Injectable()
export class PhoneService extends initPhone{

  constructor() {
    super();
    console.log("Initializing PhoneBook...")
   this.load();
  }


  getPhones(){

    var phoneadd = JSON.parse(localStorage.getItem('phones'));

    return phoneadd;

  }

   addPhones(phoneJson){

//we fetch all the phonebooks ads
    var phoneadd = JSON.parse(localStorage.getItem('phones'));

    //we push the new phoneJson
    phoneadd.push(phoneJson);
//set new phone book
    localStorage.setItem('phones',JSON.stringify(phoneadd));

}

DeletePhone(phoneJsonDel){

  var phoneadd = JSON.parse(localStorage.getItem('phones'));

  for (var i=0;i<phoneadd.length;i++) {

    if (phoneadd[i].text == phoneJsonDel.text) {

      phoneadd.splice(i, 1);

    }
  }
    //return to the LocalStorage

    localStorage.setItem("phones",JSON.stringify(phoneadd));

  }


}
