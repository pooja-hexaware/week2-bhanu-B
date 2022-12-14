"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const items_service_1 = require("../services/items.service");
let itemsController = class itemsController {
    constructor(itemsService) {
        this.itemsService = itemsService;
    }
    async findAll() {
        return await this.itemsService.findAll();
    }
    update(id) {
        return this.itemsService.findById(id);
    }
    findByIds(ids) {
        console.log(ids);
        return this.itemsService.findByIds(ids);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("../schemas/items.schema").Items] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], itemsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    openapi.ApiResponse({ status: 200, type: require("../schemas/items.schema").Items }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], itemsController.prototype, "update", null);
__decorate([
    (0, common_1.Get)('itemsid/findbyids'),
    openapi.ApiResponse({ status: 200, type: [require("../schemas/items.schema").Items] }),
    __param(0, (0, common_1.Query)('ids')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], itemsController.prototype, "findByIds", null);
itemsController = __decorate([
    (0, common_1.Controller)('items'),
    __metadata("design:paramtypes", [items_service_1.itemsService])
], itemsController);
exports.itemsController = itemsController;
//# sourceMappingURL=items.controller.js.map