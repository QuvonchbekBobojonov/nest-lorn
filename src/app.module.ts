import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://moorfo:2jzYKPxM93HS7JCe@cluster0.6cppbiq.mongodb.net/?retryWrites=true&w=majority',
    ),
    BlogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// 2jzYKPxM93HS7JCe
