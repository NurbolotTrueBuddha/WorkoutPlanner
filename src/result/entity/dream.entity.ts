import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity('dream')
export class Dream {
    @PrimaryGeneratedColumn('uuid')
    weight_id: string;

    @Column()
    must: string;

    @Column()
    howDo: string;

    @Column()
    left: string;
}