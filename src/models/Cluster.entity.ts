import * as TypeORM from 'typeorm'
import Users from './users.schema'

@TypeORM.Entity()
class Cluster {
    @TypeORM.PrimaryGeneratedColumn()
    id : number 

    @TypeORM.Column()
    name : string

    @TypeORM.Column()
    description : string

    @TypeORM.Column()
    image : string

    @TypeORM.Column()
    link : string

    @TypeORM.Column()
    created_at : Date

    @TypeORM.Column()
    updated_at : Date


    @TypeORM.ManyToMany(type => Users, user => user.clusters)
    users : Users[]
    

}

export default Cluster 