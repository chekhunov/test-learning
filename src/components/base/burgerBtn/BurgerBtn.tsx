import React, { FC } from 'react'
import cn from 'classnames'

import style from './BurgerBtn.module.scss'

interface BurgerBtnProps {
  show?: boolean
}
const BurgerBtn: FC<BurgerBtnProps> = ({ show }) => {
  return (
    <span className={cn(style.burger, { active: show })}>
      <span></span>
    </span>
  )
}

export default BurgerBtn
