import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Items, ItemsDocument } from 'src/schemas/items.schema';

@Injectable()
export class itemsRepo {
    constructor(
        @InjectModel(Items.name)
        private readonly itemsModel: Model<ItemsDocument>) {}


    async findAll(): Promise<Items[]> {
        const res = await  this.itemsModel.find();
        return res;
    }

    async findById(itemId: string): Promise<Items> {
        return this.itemsModel.findById(itemId);
    }

    async findByIds(ids: string[]): Promise<Items[]> {
        console.log(ids);
        return this.itemsModel.find({ _id: { $in: ids }});
    }

}