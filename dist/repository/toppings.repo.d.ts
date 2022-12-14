import { Model } from 'mongoose';
import { Toppings, ToppingsDocument } from 'src/schemas/toppings.schema';
export declare class toppingsRepo {
    private readonly toppingsModel;
    constructor(toppingsModel: Model<ToppingsDocument>);
    findAll(): Promise<Toppings[]>;
    findByIds(ids: string[]): Promise<Toppings[]>;
}
