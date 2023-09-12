import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
  constructor(
    private readonly gamesService: GamesService
  ) {}

  @Get()
  getAllGames() {
    return this.gamesService.findAll();
  }

  @Get(':id')
  getGameById(@Param('id') id: string) {
    return this.gamesService.findGameById(id);
  }

  @Post()
  addGame(@Body() game) {
    return this.gamesService.add(game);
  }

  @Put(':id')
  updateGame(@Param('id') id: string, @Body() game) {
    return this.gamesService.update(id, game);
  }

  @Delete(':id')
  deleteGame(@Param('id') id: string) {
    return this.gamesService.remove(id);
  }
}
