/**
 * Created by ben on 5/24/17.
 */
export class initPhone {

  load() {


    if ((localStorage.getItem("phones") == undefined ) || (localStorage.getItem("phones") == null)) {

      console.log("Phones Book empty create....");

      var phone = [

        {
          text: "testing"
        },
        {
          text: "tesing2"
        },
        {
          text: "testing3",
        },
      ];


      localStorage.setItem("phones", JSON.stringify(phone));
      return
    } else {

      console.log("there is already phonebooks exists")
    }

  }
}

