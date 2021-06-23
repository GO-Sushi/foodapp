import {combineReducers} from "redux" ;
import menu from './menu' ;
import produit from './produit'
import count from './count' ;
import home from './home'

export default combineReducers({menu, produit , count ,home}) ;
