import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { toppingsController } from '../controllers/toppings.controller';
import { toppingsService } from '../services/toppings.service';
import { toppingsRepo } from '../repository/toppings.repo';
import { Toppings, ToppingsSchema } from '../schemas/toppings.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Toppings.name, schema: ToppingsSchema }])
    ],
    controllers: [toppingsController],
    providers: [toppingsService, toppingsRepo],
    exports: [toppingsService, toppingsRepo]
  })
  export class toppingsModule {}