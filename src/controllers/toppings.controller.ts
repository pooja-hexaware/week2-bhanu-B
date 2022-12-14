import { Body, Controller, Delete, Get, Param, Post,Query } from '@nestjs/common';
import { toppingsService } from '../services/toppings.service';


@Controller('toppings')
export class toppingsController {
    constructor(private readonly toppingsService: toppingsService) { }

    @Get()
    async findAll() {
        return this.toppingsService.findAll();
    }

    @Get('getbyids')
    async findByIds(@Query('ids') ids:string) {
        console.log(ids);
        const response=this.toppingsService.findByIds(ids);
        return response;
    }

}