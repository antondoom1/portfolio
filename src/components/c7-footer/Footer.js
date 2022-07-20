import s from './Footer.module.css'
import sContainer from '../../common/styles/Container.module.css'

export const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={`${sContainer.container} ${s.container}`}>
        <h2>Anton Yakavenka</h2>
        <div className={s.iconsBlock}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <span>©2022 All rights reserved</span>
      </div>
    </div>
  )
}
