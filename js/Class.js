class Pet{
    constructor(name,age,type,breed,price,quantity,gender,services,owner,contactPhone){
        this.name=name;
        this.age=age;
        this.type=type;
        this.breed=breed;
        this.price=price;
        this.quantity=quantity;
        this.gender=gender;
        this.services=services;
        this.owner=owner;
        this.contactPhone=contactPhone;

    }
}
var ObjSalon = {
    nameSalon:"Pets",
    address: {
        street: "Km2 Carretera Tijuana Colonia Zaragoza, Mexicali BC",
        number: "49"
    },
    hours:{
        open: "8 am",
        close: "4 pm"
    },
    pets:[

    ]
}

var Porfirio = new Pet("Porfirio",7,"Dog","Cruza Husky",90, 2, "Male", "Full services", "Jesus", "6862540081");
var Mistica = new Pet("Mistica",7,"Dog","Cruza Husky",90,3, "Female", "Full services", "Jesus", "6862540081");
var Rafael = new Pet("Rafael",2,"Turtle","Turtle ninja",90,1, "Male", "Full services", "Jesus", "6862540081");
var LaPocha = new Pet("LaPocha",4,"Dog","Pitbull",90,2, "Female", "Full services", "Jesus", "6862540081");
var Godzilla = new Pet("Godzilla",4,"Lizard","Lizard",90,3, "Male", "Full services", "Jesus", "6862540081");

ObjSalon.pets.push(Porfirio);
ObjSalon.pets.push(Mistica);
ObjSalon.pets.push(Rafael);
ObjSalon.pets.push(LaPocha);
ObjSalon.pets.push(Godzilla);

//console.log(ObjSalon.pets);
//get the inputs and store them in variables
var txtName = document.getElementById("name");
var txtage = document.getElementById("age");
var txttype = document.getElementById("type");
var txtbreed = document.getElementById("breed");
var txtprice = document.getElementById("price");
var txtquantity = document.getElementById("quantity");
var txtgender = document.getElementById("gender");
var txtservices = document.getElementById("services");
var txtowner = document.getElementById("owner");
var txtcontactphone = document.getElementById("contactphone");

function clearInputs(){
    txtName.value="";
    txtage.value="";
    txttype.value="";
    txtbreed.value="";
    txtprice.value="";
    txtquantity.value="";
    txtgender.value="";
    txtservices.value="";
    txtowner.value="";
    txtcontactphone.value=""
}


function register(){
    //create the Pet
    var NewPet = new Pet(txtName.value,txtage.value,txttype.value,txtbreed.value,txtprice.value,txtgender.value, txtservices.value, txtowner.value, txtcontactphone.value);

    //Push the new pet
    ObjSalon.pets.push(NewPet);

    clearInputs();

    //console.log(ObjSalon.pets);
    
    display(ObjSalon);
}

