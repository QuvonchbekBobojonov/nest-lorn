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
  Post, UsePipes, ValidationPipe,
} from '@nestjs/common';
import { BlogDto } from './dto/blog.dto';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}
  @HttpCode(HttpStatus.OK)
  @Get()
  async getBlog() {
    return this.blogService.getPosts();
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  @UsePipes(ValidationPipe)
  async createBlog(@Body() body: BlogDto) {
    return this.blogService.createPost(body);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async getBlogById(@Param('id') id: number) {
    return this.blogService.getPostById(id);
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  async updateBlog(@Param('id') id: number, @Body() body: BlogDto) {
    return this.blogService.updatePost(id, body);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async deleteBlog(@Param('id') id: number) {
    const blog = await this.blogService.getPostById(id);
    if (!blog) {
      throw new NotFoundException('Blog not found');
    }
    return this.blogService.deletePost(id);
  }
}
