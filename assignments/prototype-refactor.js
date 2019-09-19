/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/



class GameObject {
    constructor(characteristic){
        this.createdAt = characteristic.createdAt,
        this.name = characteristic.name,
        this.dimensions = characteristic.dimensions ;
    }

    //methods
    destroy(){
        return `${this.name} was removed from the game.`;
    }

}//GameObject close


class CharacterStats extends GameObject{
    constructor(characteristic){
       super(characteristic),
        this.healthPoints = characteristic.healthPoints;
    }
    //methods
    takeDamage(){
        return `${this.name} took damage.`;
  
    }
}//CharacerStats close
 
class Humanoid extends CharacterStats{ 
    constructor(characteristic) {
        super(characteristic),
        this.team = characteristic.team,
        this.weapons = characteristic.weapons,
        this.language = characteristic.language;
    }

    greet(){
        return `${this.name} offers a greeting in ${this.language}`;
    }
  }
  
  
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
  
  
    // function Villain(characteristic){
      
    //   Humanoid.call(this, characteristic);
    // }
    //   Villain.prototype = Object.create(Humanoid.prototype);
     
     
     
     
    //   Villain.prototype.smack = function(character,damage){
  
    //     character.healthPoints = character.healthPoints - this.damage;
  
    //     return `${this.name} smacks ${character.name} for ${damage} damage!`;
       
    // };
  
   
  
  
  
  
    // function Hero(characteristic){
    //   Humanoid.call(this, characteristic);
    // }
    //   Hero.prototype = Object.create(Humanoid.prototype);
    //   Hero.prototype.slaps = function(character,damage){
    //     character.healthPoints = character.healthPoints - this.damage;
    //     return `${this.name} slaps ${character.name} for ${damage} damage!`;
    //   };
      
    // const goblin = new Villain({
    //   createdAt: new Date(),
    //   dimensions: {
    //     length: 1,
    //     width: .5,
    //     height: .5,
    //   },
    //   healthPoints: 8,
    //   name: 'Snotnose',
    //   team: 'Dank Clan',
    //   weapons: [
    //     'dagger',
    //   ],
    //   language: 'goblin',
    // });
  
  
     
    // const warrior = new Hero({
    //   createdAt: new Date(),
    //   dimensions: {
    //     length: 2,
    //     width: 1.5,
    //     height: 1,
    //   },
    //   healthPoints: 8,
    //   name: 'John',
    //   team: 'Mercenary',
    //   weapons: [
    //     'pike',
    //   ],
    //   language: 'common',
    // });
  
    
    // console.log(warrior.slaps(goblin, 2));
    
    // console.log(goblin.smack(warrior, 2));
  