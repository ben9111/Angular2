import { Component, OnInit } from '@angular/core';
import {forEach} from "@angular/router/src/utils/collection";
import {PhoneService} from '../phone.service'

@Component({
  selector: 'app-phones',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})

export class PhoneComponent implements OnInit {

 phones;
 text;

  constructor(private _phonoService : PhoneService) {

    this._phonoService = _phonoService;

  }

  ngOnInit() {

     this.phones = this._phonoService.getPhones();
  }

  AddPhone() {

    var newJson = {
      text:this.text,
    }

    this.phones.push(newJson);

    this._phonoService.addPhones(newJson);



  }
  deletePhone(phontext) {
    console.log(phontext);

    for(var i = 0 ; i < this.phones.length;i++){
        if (this.phones[i].text == phontext){

      this.phones.splice(i,1);
    }
    }

    var jsonToDelete = {

        text:phontext
    }

    this._phonoService.DeletePhone(jsonToDelete)
  }




}
