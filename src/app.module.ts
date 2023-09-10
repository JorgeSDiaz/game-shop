import { Module } from '@nestjs/common';
import { GamesModule } from './games/games.module';

@Module({
  imports: [GamesModule],
  controllers: [],
  providers: [],
  exports: [],
})

export class AppModule {}
