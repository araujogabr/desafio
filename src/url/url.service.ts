import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { URL } from './url.entity';

@Injectable()
export class URLService {
  constructor(
    @InjectRepository(URL)
    private readonly urlRepository: Repository<URL>,
  ) {}

  async findAll(): Promise<URL[]> {
    return this.urlRepository.find();
  }

  async findOne(id: number): Promise<URL> {
    return this.urlRepository.findOne({ where: { id } });
  }
  

  async create(urlData: Partial<URL>): Promise<URL> {
    const url = this.urlRepository.create(urlData);
    return this.urlRepository.save(url);
  }

  async update(id: number, urlData: Partial<URL>): Promise<boolean> {
    const result = await this.urlRepository.update(id, urlData);
    return result.affected > 0;
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.urlRepository.delete(id);
    return result.affected > 0;
  }
}
