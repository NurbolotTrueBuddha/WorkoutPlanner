import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { User } from "src/auth/entity/user.entity";

@Entity('body_params')
export class BodyParam {
    @PrimaryGeneratedColumn('uuid')
    body_id: string;

    @Column()
    height: number;

    @Column()
    weight: number;

    @Column()
    age: number;

    @Column()
    user_id: string
}