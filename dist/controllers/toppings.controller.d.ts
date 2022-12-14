import { toppingsService } from '../services/toppings.service';
export declare class toppingsController {
    private readonly toppingsService;
    constructor(toppingsService: toppingsService);
    findAll(): Promise<import("../schemas/toppings.schema").Toppings[]>;
    findByIds(ids: string): Promise<import("../schemas/toppings.schema").Toppings[]>;
}
