import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Relationship {
    @PrimaryGeneratedColumn()
    id: number;

    // @Column()
    // follower_id: number;

    // @Column()
    // followed_id: number;

    // @Column()
    // created_at: Date;

    // @Column()
    // updated_at: Date;
}

// t.integer "follower_id"
// t.integer "followed_id"
// t.datetime "created_at", precision: 6, null: false
// t.datetime "updated_at", precision: 6, null: false
// t.index ["followed_id"], name: "index_relationships_on_followed_id"
// t.index ["follower_id", "followed_id"], name: "index_relationships_on_follower_id_and_followed_id", unique: true
// t.index ["follower_id"], name: "index_relationships_on_follower_id"