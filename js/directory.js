function  display(ArrayObj){
    //Create vars
    var pets =  ArrayObj.pets;
    var text="";
    var petSection = document.getElementById("petSection");

document.getElementsByTagName
    var typePet = "";

    //Travel the pets array
    for(var x=0;x<pets.length;x++){
            //create the HTML text
            //console.log(pets[x]);

            typePet = GetTypePet(pets[x].type);

            text+=`<div class="pet">
                    <h2>${pets[x].name} | ${typePet}</h2>
                    <p>Age:${pets[x].age}</p>
                    <p>type:${pets[x].type}</p>                    
                    <p>Breed:${pets[x].breed}</p>                    
                    <p>Price:${pets[x].price}</p>                    
                    <p>Gender:${pets[x].gender}</p>                    
                    <p>Services:${pets[x].services}</p>                    
                    <p>Contact Phone:${pets[x].contactPhone}</p>                    
                </div>` ;

    }


    petSection.innerHTML = text;
    //console.log(text);

    //display the per on the HTML

}

function GetTypePet(TypePet){
    const dogImg ='<i class="fas fa-dog"></i>';
    const LizardImg = '<i class="fas fa-dragon"></i>';
    const TurtleImg = '<i class="fas fa-turtle"></i>';
    
    if(TypePet==="Dog"){
        TypePet = dogImg;
    }else if(TypePet==="Lizard"){
        TypePet = LizardImg;
    }else if(TypePet==="Turtle"){
        TypePet = TurtleImg;
    }
   
    return TypePet;
}


display(ObjSalon);


//EXTRA CHALLENGE: Disp[aly number of pets of the registered]