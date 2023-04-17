import * as TypeORM from 'typeorm'


@TypeORM.Entity()
class Users extends TypeORM.BaseEntity{
    @TypeORM.PrimaryGeneratedColumn()
    id : number 

    @TypeORM.Column({nullable : false ,unique : true })
    username : string 

    @TypeORM.Column( {nullable : false })
    fullname : string 

    @TypeORM.Column({nullable : false, unique : true  })
    email : string 

    @TypeORM.Column({nullable : false, unique : true })
    phone : string

    @TypeORM.Column({nullable : false })
    password : string

    @TypeORM.Column({nullable : false })
    bday : Date

    //verified 
    @TypeORM.Column({nullable : false , default : false })
    verified : boolean

    @TypeORM.Column({nullable : true , default : null })
    photo : string 

    //api section 
    @TypeORM.Column({ default : null,unique: true })
    apikey : string 

    @TypeORM.Column({ default : null })
    apikey_expires : Date

    @TypeORM.Column({ default : null })
    apikey_last_used : Date


    @TypeORM.Column({ default : null })
    apikey_last_ip : string

    @TypeORM.Column({ default : 0 })
    apikey_call_times : number 

    @TypeORM.Column({ default : null })
    createdat : Date

    @TypeORM.Column({ default : null })
    updatedat : Date


}

export default Users 