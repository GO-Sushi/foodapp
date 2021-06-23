import {CHANGE_COUNT} from './types' ;
import {RESET_COUNT} from './types' ;
   
    // Nouvelle valeur reçu (payload)
    export const changeCount = (payload) => ({
        type : CHANGE_COUNT,
        payload
    }) ;


    export const resetCount = (payload) => ({
        type : RESET_COUNT,
        payload
    }) ;

    
    




