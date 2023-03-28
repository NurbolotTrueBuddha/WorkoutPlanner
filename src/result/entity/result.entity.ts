import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { BodyParam } from "src/auth/entity/body-params.entity";
import { Water } from "./water.entity";
import { Step } from "./step.entity";
import { Dream } from "./dream.entity";
import { Calories } from "./calories.entity";

@Entity('result')
export class Result {
    @PrimaryGeneratedColumn('uuid')
    result_id: string;

    @OneToOne(() => BodyParam)
    @JoinColumn({ name: 'bodyparam_id' })
    bodyparam_id: BodyParam;

    @OneToOne(() => Water)
    @JoinColumn({ name: 'water_id' })
    water_id: Water;

    @OneToOne(() => Step)
    @JoinColumn({ name: 'step_id' })
    step_id: Step;

    @OneToOne(() => Dream)
    @JoinColumn({ name: 'dream_id' })
    dream_id: Dream;

    @OneToOne(() => Calories)
    @JoinColumn({ name: 'calories_id' })
    calories_id: Calories;

    @Column()
    goal: number;
    
  
}