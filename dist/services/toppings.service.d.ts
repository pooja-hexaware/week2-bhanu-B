import { toppingsRepo } from '../repository/toppings.repo';
import { Toppings } from '../schemas/toppings.schema';
export declare class toppingsService {
    private readonly toppingsRepo;
    constructor(toppingsRepo: toppingsRepo);
    findAll(): Promise<Toppings[]>;
    findByIds(ids: string): Promise<Toppings[]>;
}
