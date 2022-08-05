// NOTE - I know some of this code isn't completely correct.
// I worked heavily with my small group today (they are a good bunch) but
// there we still a few pieces I couldn't figure out,
// like how to add a default pet that could then be reassigned.


// Write a class called Unicorn
// it should have a dynamic name property
// it should have a color property, that is silver by default
// it should have a method called "say" that returns whatever string is passed in, with "*~*" at the beginning and end of the string

class Unicorn {
  constructor(name) {
    this.name = name;
    this.color = "silver";
  }

  say(text) {
    console.log("*~*" + text + "*~*")
  }
}

var pabloTheUnicorn = new Unicorn("Pablo");
pabloTheUnicorn.say("Que pasaaaaa!")


// Write a class called Vampire
// it should have a dynamic name property
// it should have a pet property, that is a bat, by default BUT it could be dynamic if info is passed in initially
// it should have a thirsty property, that is true by default
// it should have a drink method. When called, the thirsty property changes to false


class Vampire {
  constructor(name, pet) {
    this.name = name;
    this.pet = "bat";
    this.thirsty = true
    }
  changePet(newPet) {
    this.pet = newPet;
  }
  drink() {
    this.thirsty = false;
  }
}

var realPet = new Vampire("Count Chocula","dog")
console.log(realPet)

//  Write a Dragon class
// it should have a dynamic name property (string)
//  it should have a dynamic rider property (string)
//  it should have a dynamic color property (string)
//  it should have a isHungry property that is true by default
//  it should have a eat method. If the dragon eats 4 times, it is no longer hungry
  // HINT: This requires you to use your knowledge from the conditionals lesson

  class Dragon {
  constructor(name, rider, color) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.isHungry = true;
  };

  eat(meals) {
    if (meals >= 4) {
      this.isHungry = false;
    }
  };
}

var myDragon = new Dragon("Rex", "Yous Guys", "black");

myDragon.eat();
console.log(myDragon);

//  BIG CHALLNEGE: Write a Hobbit class
//  it should have a dynamic name property (string)
//  it should have a dynamic disposition property (string)
//  it should have an age property that defaults to 0
//  it should have a celebrateBirthday method. When called, the age increases by 1
//  it should have an isAdult property (boolean) that is false by default. once a Hobbit is 33, it should be an adult
//  it should have an isOld property that defaults to false. once a Hobbit is 101, it is old.
//  it should have a hasRing property. If the Hobbit's name is "Frodo", true, if not, false.

class Hobbit {
  constructor(name, disposition, age) {
    this.name = name;
    this.disposition = disposition;
    this.age = age;
    this.isAdult = false;
    this.isOld = false;
    this.hasRing = false;
    if (this.name === "Frodo") {
      this.hasRing = true;
    }
    }
    celebrateBirthday() {
      this.age++;
     if (this.age >= 33) {
     this.isAdult = true
  } if (this.age >= 101) {
       this.isOld = true
  }
       return
    }
}
var Hobbit1 = new Hobbit("Bilbo", "drunk", 165);
Hobbit1.celebrateBirthday()
console.log(Hobbit1)
