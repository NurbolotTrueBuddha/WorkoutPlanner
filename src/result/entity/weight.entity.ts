import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity('weight')
export class Weight {
    @PrimaryGeneratedColumn('uuid')
    weight_id: string;

    @Column()
    must: string;

    @Column()
    howDo: string;

    @Column()
    left: string;
}