console.log("Welcome to AddressBook");
class AddressBook{
    firstname;
    lastname;
    address;
    city;
    state;
    zip;
    phonenumber;
    emailId;
    constructor(fiirstname,lastname,address,city,state,zip,phonenumber,emailId){
        this.firstname = fiirstname; 
        this.lastname = lastname;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phonenumber = phonenumber
        this.emailId = emailId
    }
    get name(){ return this._name; }
    set name(name){this._name = name; }

    toString(){
        return "firstname="+this.firstname+ ",lastname='"+this.lastname+",address="+this.address+",city='"+this.city+",state='"+this.state+",Zip='"+this.zip+",Phonenumber='"+this.phonenumber+",emailId='"+this.emailId;
    }
}
let addressBook =new AddressBook("Nitish","Priyadarshi","Patna","Patna","Bihar","800006","7677271993","nitish@gmail.com");
console.log(addressBook.toString());