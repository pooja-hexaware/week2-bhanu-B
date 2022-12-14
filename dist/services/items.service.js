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
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemsService = void 0;
const common_1 = require("@nestjs/common");
const items_repo_1 = require("../repository/items.repo");
let itemsService = class itemsService {
    constructor(itemsRepo) {
        this.itemsRepo = itemsRepo;
    }
    async findAll() {
        return this.itemsRepo.findAll();
    }
    async findById(itemId) {
        return this.itemsRepo.findById(itemId);
    }
    async findByIds(ids) {
        console.log(ids);
        const idsArray = ids.split(',');
        return this.itemsRepo.findByIds(idsArray);
    }
};
itemsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [items_repo_1.itemsRepo])
], itemsService);
exports.itemsService = itemsService;
//# sourceMappingURL=items.service.js.map