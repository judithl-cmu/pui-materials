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

var animal = [new PolarBear("Lucy", 25), new Panda("PaoPao", 25), new Peacock("Judy", 24)];

var name = ["Lucy", "PaoPao", "Judy", "George", "Gary", "Kiri", "randomName"];


// Writing functions

function generateRandomIndex(maxIndex) {
    var randomIndex = Math.floor(Math.random() * maxIndex);
    return randomIndex;
}

function generateRandomName() {
    
    //     call the generateRandomIndex(maxIndex) function we wrote above
    var randomNameIndex = generateRandomIndex(name.length);
    console.log(name.length);
    console.log("index value: " + randomNameIndex);
    // save the random value it returns in a variable (i.e. randomIndex)
    // use the variable to access the necessary index in the array you created above
    console.log("index 0: " + name[0]);
    return name[randomNameIndex];

    //var randomName = //animal[generateRandomIndex(animal.length)].name;
}
/*
function generateRandomAge(maxIndex) {
    var randomAge = animal[generateRandomIndex(animal.length)].age;
    return randomAge;
}

function generateRandomAnimal() {
    var randomAnimal = animal[generateRandomIndex(animal.length)];
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
*/
// Identify the animal

