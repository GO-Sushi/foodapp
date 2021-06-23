import Page from 'material-ui-shell/lib/containers/Page'
import React, {useContext} from 'react'
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import { useIntl } from 'react-intl'
import { FirebaseContext } from '../../components/Firebase'
import {useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const HomePage = () => {
  
  const firebase = useContext(FirebaseContext)
  const intl = useIntl()

  console.log("firebase", firebase)

  const {home} = useSelector(store => store) 
  console.log("store: " , home)

 
  let message = "home"


  if (home !== true){
    
    message = "pas de msg"
    
  }

  return (
    <Page pageTitle={intl.formatMessage({ id: 'home' })}>
      <Scrollbar
        style={{ height: '100%', width: '100%', display: 'flex', flex: 1 }}
      >
        {intl.formatMessage({ id: `${message}` })}
        <br/>
        <Link to="/"> retour au landing </Link>
      </Scrollbar>
    </Page>
  )
}
export default HomePage
