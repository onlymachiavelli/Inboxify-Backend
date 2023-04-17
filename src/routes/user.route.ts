import * as Express from 'express'

const UserRoute = Express.Router()

import createUser from '../controllers/Users/createuser.controller'
import GetAll from '../controllers/Users/GetAll.controller'
import getOne from '../controllers/Users/getOne.controller'

UserRoute.post('/' , createUser)
UserRoute.get('/all' , GetAll)
UserRoute.get('/' , getOne)

export default UserRoute