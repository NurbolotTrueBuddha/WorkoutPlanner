import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity('step')
export class Step {
    @PrimaryGeneratedColumn('uuid')
    weight_id: string;

    @Column()
    must: string;

    @Column()
    howDo: string;

    @Column()
    left: string;
}