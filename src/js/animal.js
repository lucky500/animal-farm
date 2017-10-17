export class Animal {
  constructor(name, foodLevel){
    this.name = name;
    this.foodLevel = foodLevel;
  }

  setHunger(foodLevel){
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  feed(foodLevel){
    return this.foodLevel += 10;
  }

};

//exports.animalModule = Animal;
