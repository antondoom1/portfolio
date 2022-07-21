import s from './Menu.module.scss'
import {useEffect, useState} from 'react'
import {Nav} from './Nav/Nav'

export const Menu = () => {
  const [showMenu, setShowMenu] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShowMenu(false)
    }, 1000)
  }, [])

  const classNavClassName = showMenu ? `${s.nav} ${s.open}` : `${s.nav}`

  return (
    <nav className={classNavClassName}>

      <Nav item={s.l1} title={'contact'} link={'#contact'}/>

      <Nav item={s.l2} title={'portfolio'} link={'#project'}/>

      <Nav item={s.l3} title={'services'} link={'#services'}/>

      <Nav item={s.l4} title={'about'} link={'#about'}/>

      <span onClick={() => setShowMenu(!showMenu)}>
        {
          showMenu
            ? <Nav item={s.l5} title={'close'} toggle={s.toggle}/>
            : <Nav item={s.l5} title={'menu'} toggle={s.toggle}/>
        }
      </span>

    </nav>
  )
}

