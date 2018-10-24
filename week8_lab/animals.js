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
    var randomIdx = generateRandomIndex(5);
    return randomIdx;
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
    var animal = JSON.parse(localStorage.getItem("savedAnimal"));
    var hasSavedAnimal = false;
    if (animal === null) {
        animal = generateRandomAnimal();
        $("#save").text("Save Me");
    }

    else {
        hasSavedAnimal = true;
        $("#save").text("Clear Me");
    }

    $("#animal-description").text(animal.name + " is a " + animal.type + " and it's " + animal.age + " years old.")
    $("#animal-img").attr("src", animal.image);

    //select animal
    function saveAnimalLocally() {
        localStorage.setItem("savedAnimal", JSON.stringify(animal));
    }

    $("#save").on("click", function() {
        if (hasSavedAnimal) {
            $("#save").css("display", "none");
            $("#save").text("Cleared!");
            $("#save").css("display", "block");
            localStorage.removeItem("savedAnimal");
        }

        else {
            $("#save").css("display", "none");
            $("#save").text("Saved!");
            $("#save").css("display", "block");
            saveAnimalLocally();

            // if button was clicked, hide button and show message to user
        }
    });
    // click to add to cart
    $("#add-to-cart").on ("click", function() {

    });
});