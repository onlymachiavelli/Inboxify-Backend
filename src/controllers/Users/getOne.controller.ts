import * as EXPRESS from 'express'
import * as Services from './../../services/user.services'


const getOne :EXPRESS.RequestHandler = async (req, res) =>{

    //get the target value and field . 
    const target : any = req.params.target
    const field : any = req.params.field

    //check if the field is valid
    if ((field !== "username" && field !== "email" && field !== "phone") || !target ) {
        res.status(400).send("Invalid querries")
        return
    }

    const data : any = await Services.GetOneBy(field, target)
    if (data) {
        res.status(200).send(data)
        return
    }
    res.status(404).send("User not found")
    

}


export default getOne