import React from 'react'
//import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCashRegister } from '@fortawesome/free-solid-svg-icons'

import './CartBtn.scss'

const CartBtn = ({ isCartBtn, setIsCartBtn }) => {
  return (
    <div className="cartBtn">
      <div className="cartModalContent">
        <div className="title">
          <div
            className="ham"
            onClick={() => {
              setIsCartBtn(prev => !prev)
            }}
          >
            <div className="line hamTopLine" />
            <div className="line hamBtmLine" />
          </div>
          <FontAwesomeIcon icon={faCashRegister} className="icon" size="lg" />
          <span className="text">장바구니에 상품이 담겼습니다 !</span>
        </div>
      </div>
    </div>
  )
}

export default CartBtn