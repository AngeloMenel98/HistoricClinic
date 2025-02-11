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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("../repository/user.repository");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    create(user) {
        return this.userRepository.createUser(user);
    }
    findAll() {
        return this.userRepository.find();
    }
    async findOne(id) {
        const user = await this.userRepository.findOneBy({ id });
        if (!user) {
            throw new common_1.NotFoundException(`User with Id #${id} not Found`);
        }
        return user;
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    async updateLoginAt(id, userDTO) {
        const user = await this.findOne(id);
        const newUser = await this.userRepository.updateUser(Object.assign(user, userDTO));
        return {
            id: newUser.id,
            username: newUser.username,
            role: newUser.role,
        };
    }
    async findByUsernameOrEmail(username, email) {
        const user = await this.userRepository.findOne({
            where: [{ username, email }],
        });
        if (!user) {
            return null;
        }
        return user;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UsersService);
//# sourceMappingURL=users.service.js.map