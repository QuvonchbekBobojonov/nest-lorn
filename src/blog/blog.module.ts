import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogSchema } from './blog.schema';

@Module({
  controllers: [BlogController],
  providers: [BlogService],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Blog',
        schema: BlogSchema,
      },
    ]),
  ],
})
export class BlogModule {}
