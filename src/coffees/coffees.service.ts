import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {}

  async findAll(): Promise<Coffee[]> {
    return this.coffeeRepository.find();
  }

  async findOne(id: string): Promise<Coffee | null> {
    return this.coffeeRepository.findOne({ where: { id: +id } });
  }

  async create(createCoffeeDto: Partial<Coffee>): Promise<Coffee> {
    const coffee = this.coffeeRepository.create(createCoffeeDto);
    return this.coffeeRepository.save(coffee);
  }

  async update(id: string, updateCoffeeDto: any): Promise<Coffee | undefined> {
    const existingCoffee = await this.coffeeRepository.findOne({
      where: { id: +id },
    });

    if (!existingCoffee) {
      return undefined;
    }

    const updatedCoffee = { ...existingCoffee, ...updateCoffeeDto };
    return this.coffeeRepository.save(updatedCoffee);
  }

  async remove(id: string): Promise<Coffee | undefined> {
    const coffee = await this.coffeeRepository.findOne({ where: { id: +id } });

    if (!coffee) {
      return undefined;
    }

    return this.coffeeRepository.remove(coffee);
  }
}
