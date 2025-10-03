import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { BlogDto } from './dto/blog.dto';

@Controller('blog')
export class BlogController {
  blogs: BlogDto[];
  constructor() {
    this.blogs = [
      {
        id: 1,
        title: 'First Blog',
        content: 'This is the content of the first blog post.',
      },
      {
        id: 2,
        title: 'Second Blog',
        content: 'This is the content of the second blog post.',
      },
      {
        id: 3,
        title: 'Third Blog',
        content: 'This is the content of the third blog post.',
      },
      {
        id: 4,
        title: 'Fourth Blog',
        content: 'This is the content of the fourth blog post.',
      },
    ];
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  async getBlog() {
    return this.blogs;
  }
}
