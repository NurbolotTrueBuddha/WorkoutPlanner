import { Injectable, Request } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BodyParam } from "../entity/body-params.entity";
import { User } from "../entity/user.entity";
import { BodyParamsDto } from "../utils/dto/body-params.dto";
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

    async findByUsername(username: string) {
        return await this.userRepository.findOneBy({ username: username });
    }

    async addBodyParams(params: BodyParamsDto){

        console.log(params)

        const result = await this.bodyParamsRepository.insert(params)

        if(result){
            return params
        }
        else{
            return null;
        }

    }
    
}
