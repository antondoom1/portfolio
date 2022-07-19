import s from './Header.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import headerBg from './img/Jhon.jpg'

export const Header = () => {
  const background = {
    backgroundImage: `url(${headerBg})`
  }

  return (
    <header className={s.header} style={background}>
      <div className={s.container}>
        <div>
          <h1>
            {'Anton '}
            <div>Yakavenka</div>
          </h1>
          <h3>
            Front-end developer
          </h3>
          <a href="#contact" className={s.button}>Contact Me</a>
          <div>
            <a href="#about">
              <FontAwesomeIcon
                icon="fa-solid fa-circle-chevron-down"
                transform={'down-70'}
                beatFade
                style={{animationDuration: '2s', fontSize: '24px'}}
                color={'#333333'}
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

