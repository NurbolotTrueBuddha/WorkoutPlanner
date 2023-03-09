import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity('calories')
export class Calories {
    @PrimaryGeneratedColumn('uuid')
    weight_id: string;

    @Column()
    must: string;

    @Column()
    howDo: string;

    @Column()
    left: string;
}