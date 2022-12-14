import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { itemsService } from '../services/items.service';

@Controller('items')
export class itemsController {
    constructor(private readonly itemsService: itemsService) { }

    @Get()
    async findAll() {
        return await this.itemsService.findAll();
    }

    @Get('/:id')
    update(@Param('id') id: string) {
        return this.itemsService.findById(id);
    }

    @Get('itemsid/findbyids')
    findByIds(@Query('ids') ids:string)
    {
        console.log(ids);
        return this.itemsService.findByIds(ids);
    }

}