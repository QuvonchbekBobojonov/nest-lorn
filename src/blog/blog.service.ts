import { Injectable } from '@nestjs/common';
import { BlogDto } from './dto/blog.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Blog, BlogDocument } from './blog.schema';
import { Model } from 'mongoose';

@Injectable()
export class BlogService {
  constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) {}

  async getPosts() {
    return this.blogModel.find({});
  }

  async createPost(body: BlogDto) {
    return this.blogModel.create(body);
  }

  async getPostById(id: number) {
    return this.blogModel.findById(id);
  }

  async updatePost(id: number, body: BlogDto) {
    return this.blogModel.findByIdAndUpdate(id, body, { new: true });
  }

  async deletePost(id: number) {
    return this.blogModel.findByIdAndDelete(id);
  }
}
