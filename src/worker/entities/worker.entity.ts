import { IsEmail } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne } from 'typeorm';

@Entity()
export class Worker {

    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: true})
    name: string

    @Column({nullable: true})
    company: string

    @Column({nullable: true})
    priority: string

    @Column({nullable: true})
    country: string

    @Column({nullable: true})
    phone: string

    @Column({nullable: true})
    email: string
}