import React from 'react'
import getLocaleCurrency from '../lib/getLocaleCurreny'
import CurrentBalanceStyled from '../styled-components/CurrentBalance'
import logo from './../images/logo.svg'
const CurrentBalance = ({balance=20}) => {
  return (
   <CurrentBalanceStyled>
    <div>
    <h4>My Balance</h4>
    <p>{getLocaleCurrency(balance)}</p>
    </div>
    <div className='logoWrapper'>
       <img src={logo} alt="" height={40}/>
    </div>
   </CurrentBalanceStyled>
  )
}

export default CurrentBalance