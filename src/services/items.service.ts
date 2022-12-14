import { Injectable } from '@nestjs/common';
import { itemsRepo } from 'src/repository/items.repo';
import { Items } from '../schemas/items.schema';

@Injectable()
export class itemsService {
    constructor(
        private readonly itemsRepo: itemsRepo
    ) { }

    async findAll(): Promise<Items[]> {
        return this.itemsRepo.findAll();
    }

    async findById(itemId): Promise<Items> {
        return this.itemsRepo.findById(itemId);
    }

    async findByIds(ids: string): Promise<Items[]> {
        console.log(ids);
        const idsArray=ids.split(',');
        return this.itemsRepo.findByIds(idsArray);
    }

}