import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { Product } from './products/product.model';
import { ProductsModule } from './products/products.module';


@Module({
  imports: [ProductsModule, MongooseModule.forRoot('mongodb+srv://Rev722:OLs0D633Cdfl8w22@arcademind.mi8vhmp.mongodb.net/?retryWrites=true&w=majority&appName=Arcademind')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
