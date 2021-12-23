import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    // @Column()
    // name: string;

    // @Column()
    // email: string;

    // @Column()
    // created_at: Date;

    // @Column()
    // updated_at: Date;

    // @Column()
    // password_digest: string;

    // @Column()
    // remember_digest: string;

    // @Column()
    // admin: boolean;

    // @Column()
    // activation_digest: string;

    // @Column()
    // activated: boolean;

    // @Column()
    // activated_at: Date;

    // @Column()
    // reset_digest: string;

    // @Column()
    // reset_sent_at: Date;
}

// t.datetime "created_at", precision: 6, null: false
// t.datetime "updated_at", precision: 6, null: false
// t.boolean "admin", default: false
// t.string "activation_digest"
// t.boolean "activated", default: false
// t.index ["email"], name: "index_users_on_email", unique: true