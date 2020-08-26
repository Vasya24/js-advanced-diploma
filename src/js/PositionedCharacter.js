import Character from './Character';

export default class PositionedCharacter {
  constructor(character, position) {
    if (!(character instanceof Character)) {
      throw new Error('Только дети и внуки! Нутыпонел');
    }

    if (typeof position !== 'number') {
      throw new Error('Должно быть число');
    }

    this.character = character;
    this.position = position;
  }
}
