import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Micropost {
    @PrimaryGeneratedColumn()
    id: number;

    // @Column()
    // content: Text;

    // @Column()
    // user_id: BigInt;

    // @Column()
    // created_at: Date;

    // @Column()
    // updated_at: Date;
}

// t.text "content"
// t.bigint "user_id", null: false
// t.datetime "created_at", precision: 6, null: false
// t.datetime "updated_at", precision: 6, null: false
// t.index ["user_id", "created_at"], name: "index_microposts_on_user_id_and_created_at"
// t.index ["user_id"], name: "index_microposts_on_user_id"