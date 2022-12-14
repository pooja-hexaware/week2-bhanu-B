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
exports.toppingsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const toppings_service_1 = require("../services/toppings.service");
let toppingsController = class toppingsController {
    constructor(toppingsService) {
        this.toppingsService = toppingsService;
    }
    async findAll() {
        return this.toppingsService.findAll();
    }
    async findByIds(ids) {
        console.log(ids);
        const response = this.toppingsService.findByIds(ids);
        return response;
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("../schemas/toppings.schema").Toppings] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], toppingsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('getbyids'),
    openapi.ApiResponse({ status: 200, type: [require("../schemas/toppings.schema").Toppings] }),
    __param(0, (0, common_1.Query)('ids')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], toppingsController.prototype, "findByIds", null);
toppingsController = __decorate([
    (0, common_1.Controller)('toppings'),
    __metadata("design:paramtypes", [toppings_service_1.toppingsService])
], toppingsController);
exports.toppingsController = toppingsController;
//# sourceMappingURL=toppings.controller.js.map