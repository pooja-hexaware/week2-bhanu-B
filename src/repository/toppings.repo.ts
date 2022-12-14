import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Toppings, ToppingsDocument } from 'src/schemas/toppings.schema';

@Injectable()
export class toppingsRepo {
    constructor(
        @InjectModel(Toppings.name)
        private readonly toppingsModel: Model<ToppingsDocument>) {}


    async findAll(): Promise<Toppings[]> {
        return this.toppingsModel.find({}).exec();
    }

    async findByIds(ids: string[]): Promise<Toppings[]> {
        return this.toppingsModel.find({ _id : {$in : ids}});
    }

    
}