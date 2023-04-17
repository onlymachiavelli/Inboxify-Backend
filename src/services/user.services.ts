import Users from "../models/users.schema"
const targetFields : any = [
    'username',
    'fullname',
    'email',
    'phone',
    'password',
    'bday',
    'photo',
    'apikey',
    'apikey_expires',
    'apikey_last_used',
    'apikey_last_ip',
    'apikey_call_times'
]



const GetAll = async () =>{
    return await Users.find()

} 

const GetOne = async (id : number) =>{

    return await Users.findOne({
        where : {
            id : id 
        }
    
    })

}

const Create = async (datas : any) =>{

    await Users.save(datas)
}

const Update = async (id : number , datas : any) =>{
    await Users.update(id , datas)
}

const Delete = async (id : number) =>{
    await Users.delete(id)
}
export {
    GetAll,
    GetOne,
    Create,
    Update,
    Delete
    
}