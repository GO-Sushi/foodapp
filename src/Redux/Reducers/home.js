import {AFF_HOME} from '../Actions/types'

const stateInit = "false" ;

const home = (state = stateInit, action) => {
    console.log("action: " , action)

    switch (action.type) {
        case AFF_HOME:
            return action.payload ;    
        break;

        default:
            return state ;
            break;
    }
}
    

export default home ;