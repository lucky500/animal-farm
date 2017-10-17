export class Animal {
  constructor(name, healthLevel, pauseLevel, healthAlert){
    this.name = name;
    this.healthLevel = healthLevel;
    this.pauseLevel = pauseLevel;
    this.healthAlert = healthAlert;
  }

  setHunger(healthLevel){
    this.pauseLevel = setInterval(() => {
      this.healthLevel--;
      if(this.healthLevel === 10){
        alert("My energy is running low");
      }
    }, 3000);
  }

  feed(healthLevel){
    return this.healthLevel += 10;
  }

  sleep(healthLevel){
    clearInterval(this.pauseLevel);
  }

  waken(healthLevel){
    this.setHunger();
  }

};

//exports.animalModule = Animal;
