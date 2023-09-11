import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class GamesService {
  private games = [
    {
      id: '1000',
      slug: 'pixel-gear',
      name: 'Pixel Gear',
      name_original: 'Pixel Gear',
    },
    {
      id: '950',
      slug: 'infinite-air-with-mark-mcmorris',
      name: 'Infinite Air with Mark McMorris',
      name_original: 'Infinite Air with Mark McMorris',
    },
    {
      id: '750',
      slug: 'final-fantasy-xv',
      name: 'FINAL FANTASY XV',
      name_original: 'FINAL FANTASY XV',
    },
    {
      id: '800',
      slug: 'mutant-mudds-deluxe',
      name: 'Mutant Mudds Deluxe',
      name_original: 'Mutant Mudds Deluxe',
    },
  ];

  findAll() {
    return this.games;
  }

  findGameById(id: string) {
    const game = this.games.find((game) => game.id === id);

    if (!game) {
      throw new NotFoundException(`Game with id ${id} not found`);
    }

    return game;
  }

  add(game) {
    this.games.push(game);
    return this.games[this.games.length - 1]
  }

  update(id: string, game) {
    const gameIndex = this.games.findIndex((game) => game.id === id);

    if (gameIndex === -1) {
      throw new NotFoundException(`Game with id ${id} not found`);
    }

    this.games[gameIndex] = game;
    return this.games[gameIndex];
  }

  remove(id: string) {
    const gameIndex = this.games.findIndex((game) => game.id === id);

    if (gameIndex === -1) {
      throw new NotFoundException(`Game with id ${id} not found`);
    }

    const removedGame = this.games[gameIndex];
    this.games.splice(gameIndex, 1);
    return removedGame;
  }
}
