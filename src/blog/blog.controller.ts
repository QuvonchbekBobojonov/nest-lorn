import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
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

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async createBlog(@Body() body: BlogDto) {
    this.blogs.push({
      id: this.blogs[this.blogs.length - 1].id + 1,
      title: body.title,
      content: body.content,
    });
    return this.blogs;
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async getBlogById(@Param('id') id: number) {
    const blog = this.blogs.find((blog) => blog.id === Number(id));
    if (!blog) {
      throw new NotFoundException('Blog not found');
    }
    return blog;
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  async updateBlog(@Param('id') id: number, @Body() body: BlogDto) {
    const blogIndex = this.blogs.findIndex((blog) => blog.id === Number(id));
    if (blogIndex === -1) {
      throw new NotFoundException('Blog not found');
    }
    this.blogs[blogIndex] = {
      id: Number(id),
      title: body.title,
      content: body.content,
    };
    return this.blogs[blogIndex];
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async deleteBlog(@Param('id') id: number) {
    const blogIndex = this.blogs.findIndex((blog) => blog.id === Number(id));
    if (blogIndex === -1) {
      throw new NotFoundException('Blog not found');
    }
    this.blogs.splice(blogIndex, 1);
  }
}
