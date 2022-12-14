import { Injectable } from '@nestjs/common';
import { toppingsRepo } from '../repository/toppings.repo';
import { Toppings } from '../schemas/toppings.schema';

@Injectable()
export class toppingsService {
    constructor(
        private readonly toppingsRepo: toppingsRepo
    ) { }

    async findAll(): Promise<Toppings[]> {
        return this.toppingsRepo.findAll();
    }

    async findByIds(ids : string): Promise<Toppings[]> {
        console.log(ids);
        const idsArray = ids.split(',');
        return this.toppingsRepo.findByIds(idsArray);
    }

}