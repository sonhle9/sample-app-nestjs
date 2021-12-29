import { Injectable } from '@nestjs/common';
import { Book, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {

  constructor(private prisma: PrismaService) {

  }

  async create(data: CreateBookDto): Promise<Book> {
    return this.prisma.book.create({
      data
    })
  }

  async findAll() {
    return this.prisma.book.findMany({
      
    })
  }

  async findOne(id: number): Promise<Book> {
    return this.prisma.book.findUnique({
      where: {id}
    })
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    const updateUser = await this.prisma.book.update({
      where: {id},
      data: { ...updateBookDto },
    })
    return updateUser
  }

  async remove(id: number) {
    return `This action removes a #${id} book`;
  }
}

