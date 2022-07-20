import s from './Nav.module.css'

export const Nav = () => {
  return (
    <nav className={s.nav}>
      <a href="src/components/c1-menu/nav/Nav">Main</a>
      <a href="src/components/c1-menu/nav/Nav">Skills</a>
      <a href="src/components/c1-menu/nav/Nav">Projects</a>
      <a href="src/components/c1-menu/nav/Nav">Contacts</a>
    </nav>
  )
}

