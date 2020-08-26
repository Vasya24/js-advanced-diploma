import Character from '../Character';

export default class Undead extends Character {
  constructor(level, type = 'daemon') {
    super(level, type);
    this.attack = 10;
    this.defence = 40;
    this.walkAbility = 1;
    this.attackAbility = 4;
  }
}
