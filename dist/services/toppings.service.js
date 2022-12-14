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
exports.toppingsService = void 0;
const common_1 = require("@nestjs/common");
const toppings_repo_1 = require("../repository/toppings.repo");
let toppingsService = class toppingsService {
    constructor(toppingsRepo) {
        this.toppingsRepo = toppingsRepo;
    }
    async findAll() {
        return this.toppingsRepo.findAll();
    }
    async findByIds(ids) {
        console.log(ids);
        const idsArray = ids.split(',');
        return this.toppingsRepo.findByIds(idsArray);
    }
};
toppingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [toppings_repo_1.toppingsRepo])
], toppingsService);
exports.toppingsService = toppingsService;
//# sourceMappingURL=toppings.service.js.map