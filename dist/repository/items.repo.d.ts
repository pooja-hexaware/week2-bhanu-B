import { Model } from 'mongoose';
import { Items, ItemsDocument } from 'src/schemas/items.schema';
export declare class itemsRepo {
    private readonly itemsModel;
    constructor(itemsModel: Model<ItemsDocument>);
    findAll(): Promise<Items[]>;
    findById(itemId: string): Promise<Items>;
    findByIds(ids: string[]): Promise<Items[]>;
}
