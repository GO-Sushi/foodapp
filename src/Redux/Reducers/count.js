import {CHANGE_COUNT} from '../Actions/types'
import {RESET_COUNT} from '../Actions/types' ;

const stateInit = 0 ;

const count = (state = stateInit, action) => {
    console.log("action: " , action)

    switch (action.type) {
        case CHANGE_COUNT:
            return action.payload ;    
        break;

        case RESET_COUNT:
            return stateInit ;
        break

        default:
            return state ;
            break;
    }
}
    

export default count ;