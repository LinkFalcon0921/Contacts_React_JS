class Contacts {
  site = "http://www.raydelto.org/agenda.php";
  //Object en
  contact = {
    name: "",
    l_name: "",
    tel: "",
    get telPhone() {
      return this.tel;
    },
    set telPhone(valueNew) {
      //Remove the (-) if exists
      valueNew = valueNew.split("-").join("");

      //   console.log (valueNew);

      if (valueNew.length >= 10) {
        this.tel =
          valueNew.substring(0, 3) +
          "-" +
          valueNew.substring(3, 6) +
          "-" +
          valueNew.substring(6, 10);
      } else {
        this.tel = undefined;
      }
    },
    get() {
      return {
        name: this.name,
        apellido: this.l_name,
        telefono: this.telPhone,
      };
    },
  };
  sendContact(name, lName, tels) {
    //Set the values
    const nContact = this.contact;
    nContact.name = name;
    nContact.l_name = lName;
    nContact.tel = tels;

    if (nContact.tel == undefined) {
      return false;
    }

    fetch(this.site, {
      //Send the data
      method: "POST",
      body: JSON.stringify(nContact.get()),
    }).then(function (contactos) {
      if (contactos.ok) {
        //send the info
        return true;
      } else {
        return false;
      }
    });
  }
}

const ls = new Contacts();

let value = ls.contact;

// value.name = "100";
// value.l_name = "100";
// value.telPhone = "8092122133928133";

console.log(value.telPhone);
