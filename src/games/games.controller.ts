import { Controller, Get, Param } from '@nestjs/common';

@Controller('games')
export class GamesController {
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

  @Get()
  getAllGames() {
    return this.games;
  }

  @Get(':id')
  getGameById(@Param('id') id: string) {
    return this.games.find((game) => game.id === id);
  }
}
