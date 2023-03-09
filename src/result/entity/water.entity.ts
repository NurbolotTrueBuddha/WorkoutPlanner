import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity('water')
export class Water {
    @PrimaryGeneratedColumn('uuid')
    weight_id: string;

    @Column()
    must: string;

    @Column()
    howDo: string;

    @Column()
    left: string;
}