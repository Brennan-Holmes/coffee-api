import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { CommonModule } from './common/common/common.module';

@Module({
  imports: [CoffeesModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
