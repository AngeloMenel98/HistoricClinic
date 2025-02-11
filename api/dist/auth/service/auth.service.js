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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../../users/service/users.service");
const jwt_1 = require("@nestjs/jwt");
const user_entity_1 = require("../../users/entities/user.entity");
const bCrypt_helper_1 = require("../../helpers/hash/bCrypt.helper");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async createUser(authDTO) {
        const existingUser = await this.userService.findByUsernameOrEmail(authDTO.username, authDTO.email);
        if (existingUser) {
            if (existingUser.email === authDTO.email) {
                throw new common_1.ConflictException('Email is already taken');
            }
            if (existingUser.username === authDTO.username) {
                throw new common_1.ConflictException('Username is already taken');
            }
        }
        const passwordHashed = await (0, bCrypt_helper_1.hashValue)(authDTO.password);
        const newUser = new user_entity_1.User();
        newUser.username = authDTO.username;
        newUser.email = authDTO.email;
        newUser.password = passwordHashed;
        newUser.role = authDTO.role;
        return this.userService.create(newUser);
    }
    async login(loginDTO) {
        if (!loginDTO.username && !loginDTO.email) {
            throw new common_1.BadRequestException('Username or Email must be in the request');
        }
        const user = await this.userService.findByUsernameOrEmail(loginDTO.username, loginDTO.email);
        const isPasswordValid = await (0, bCrypt_helper_1.compareHash)(loginDTO.password, user.password);
        if (!isPasswordValid) {
            throw new common_1.ForbiddenException('Password is not valid');
        }
        user.loginAt = new Date();
        await this.userService.updateLoginAt(user.id, user);
        return this.generateToken(user);
    }
    generateToken(user) {
        const payload = { id: user.id, username: user.username, role: user.role };
        const token = this.jwtService.sign(payload);
        return { token };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map