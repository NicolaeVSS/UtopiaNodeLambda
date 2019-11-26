import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne, CreateDateColumn} from "typeorm";
import { User } from "./User";
import { Ticket } from "./Ticket";

@Entity({name:'booking'})
export class Booking {

    @PrimaryGeneratedColumn()
    bookingId: number;

    // many bookings for one user
    @ManyToOne(type => User, user => user.userId, {eager:true, onDelete:'CASCADE',onUpdate:'CASCADE'})
    @JoinColumn({ name: "userId" })
    user: User;

    @Column({width:1})
    isPaid: number;

    @CreateDateColumn({ type: 'datetime', default: () => 'LOCALTIMESTAMP' })
    createDate: string;

}