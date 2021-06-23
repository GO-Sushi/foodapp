import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector , useDispatch } from 'react-redux'
import { IntlProvider } from 'react-intl'
import {changeCount , resetCount} from '../../Redux/Actions/count'
import {affHome} from '../../Redux/Actions/home'

const LandingPage = () => {

  /* 
    
    const store = userSelector(store => store)
    const {count}  = useSelector(store => store)
    const count = store.count ;
 
  */

    const dispatchCount = useDispatch();
    const dispatchHome = useDispatch();

  const {count} = useSelector(store => store) 
  console.log("store: " , count)

  const plus = () => {
    console.log('plus') ; 
    console.log('count')
    dispatchCount(changeCount(count+1))
  }

  const reset = () => {
    console.log('reset') ; 
    console.log('count')
    dispatchCount(resetCount())
  }

  //useSelector utilisé pour lire
  const {home} = useSelector(store => store) 
  console.log("store: " , home)

  const affpage = () => {
    console.log('page')

    //useDispatch pour ecrire avec l'action associé
    dispatchHome(affHome(true))
    console.log("c'est good" , home)
  }


  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h2>Landing Page {count}</h2>
      

      <div>
        <button onClick={affpage}>affhome</button>
        <br/>
        <Link to="/home">Home</Link>
        <br/>
        <button onClick={plus} >plus</button>
        <br/>
        <button onClick={reset} >plus</button>
      </div>
    </div>
  )
}
export default LandingPage