function PolarBear(name, age) {
    this.name = name;
    this.age = age;
    this.type = "Polor Bear";
    this.image = "polar-bear.jpg";
}

function Panda(name, age) {
    this.name = name;
    this.age = age;
    this.type = "Panda";
    this.image = "panda.jpg";
}

function Peacock(name, age) {
    this.name = name;
    this.age = age;
    this.type = "Peacock";
    this.image = "peacock.jpg";
}

var animals = [new PolarBear(), new Panda(), new Peacock()];

var names = ["Lucy", "PaoPao", "Judy", "George", "Gary", "Kiri", "Gigi"];


// Writing functions

function generateRandomIndex(maxIndex) {
    var randomIndex = Math.floor(Math.random() * maxIndex);
    return randomIndex;
}

function generateRandomName() {
    var randomName = names[generateRandomIndex(names.length)];
    return randomName;
}

function generateRandomAge() {
    //var randomAge = 5/*[generateRandomIndex(5)]*/;
    console.log("???");
    //var randomIdx = generateRandomIndex(5);
    //return randomIdx;
    //return randomAge;
}

function generateRandomAnimal() {
    var randomAnimal = animals[generateRandomIndex(animals.length)];
    if (randomAnimal instanceof PolarBear) {
        return new PolarBear(generateRandomName(), generateRandomAge());
    }
    else if (randomAnimal instanceof Panda) {
        return new Panda(generateRandomName(), generateRandomAge());    
    }
    else {
        return new Peacock(generateRandomName(), generateRandomAge());
    }
}

// Identify the animal

$(document).ready(function() {
    var animal = generateRandomAnimal();
    $("#animal-description").text(animal.name + " is a " + animal.type + " and it's " + animal.age + " years old.")
    $("#animal-img").attr("src", animal.image);

    //select animal
/*    function saveAnimalLocally() {
        localStorage.setItem("savedAnimal", JSON.stringify(animal));
        console.log("animal saved!");
    }
*/
    $("#save").on("click", function() {
        //saveAnimalLocally();
        console.log("hi");
    });
});