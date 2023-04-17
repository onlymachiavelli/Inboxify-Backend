import crypto from 'crypto'
import {GetOneBy} from './../services/user.services'
import { log } from 'console'

const GenerateAPIKey :any = async () =>{
    
    //generate 
    const apikey = crypto.randomBytes(20).toString('hex')
    console.log(apikey)
    


    const target : any =await  GetOneBy("apikey" ,apikey)
    console.log(target)
    //check if apikey exists
    if (target) {
        return GenerateAPIKey()
    }
    return apikey
}

export default GenerateAPIKey