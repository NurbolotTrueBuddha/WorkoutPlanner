import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { User } from "src/auth/entity/user.entity";

@Entity('body_params')
export class BodyParam {
    @PrimaryGeneratedColumn('uuid')
    body_id: string;

    @Column()
    height: string;

    @Column()
    weight: string;

    @Column()
    age: string;

    @OneToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user_profile: User;
}