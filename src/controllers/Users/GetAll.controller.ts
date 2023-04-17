import * as EXPRESS from 'express'
import * as Services from './../../services/user.services'


const GetAll : EXPRESS.RequestHandler =async  (req, res) =>{
    const datas : any = await Services.GetAll()
    if (datas.length ) {
        res.status(200).send(datas)
        return
    }
    res.status(404).send("There's 0 users so far ")
}

export default GetAll