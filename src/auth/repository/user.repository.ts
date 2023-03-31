import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BodyParam } from "../entity/body-params.entity";
import { User } from "../entity/user.entity";
import { BodyParamsDto } from "../utils/dto/body-params.dto";
import { ByIdDto } from "../utils/dto/by-id.dto";
import { RegisterDto } from "../utils/dto/registration.dto";

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(BodyParam)
        private bodyParamsRepository: Repository<BodyParam>
    ) {}

    async createUser(userData: RegisterDto) {
        const result = await this.userRepository.insert(userData);
        if(result) {
            return userData;
        }
        else {
            return null;
        }
    }

    async findByEmail(email: string) {

        return await this.userRepository.findOneBy({ email: email });
    }

    async addBodyParams(params: BodyParamsDto){

        const result = await this.bodyParamsRepository.insert(params)

        if(result){
            return params
        }
        else{
            return null;
        }

    }
    async getUserById(id:ByIdDto){

        let userInfo = await this.userRepository.findOneBy({
            id : id.id
        })

        let bodyInfo = await this.bodyParamsRepository.findOneBy({
            user_id: id.id
        })

        const res = Object.assign(bodyInfo, userInfo);
        if(userInfo && bodyInfo){
            return res
        }
        else {
            return "нет такого пользователя"
        }
    }
    
}
