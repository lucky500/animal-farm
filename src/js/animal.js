export class Animal {
  constructor(name, foodLevel){
    this.name = name;
    this.foodLevel = 10;
  }

  setHunger(){
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

};

//exports.animalModule = Animal;
