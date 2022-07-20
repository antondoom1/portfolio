import s from './Header.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import headerBg from './img/Jhon.jpg'
import {MainButton} from '../c0-common/main-button/mainButton'

export const Header = () => {
  const background = {
    backgroundImage: `url(${headerBg})`
  }

  return (
    <header className={s.header} style={background}>
      <div className={s.container}>
        <div>
          <h1>
            Anton
            <span> Yakavenka</span>
          </h1>
          <h3>
            Front-end developer
          </h3>

          <MainButton
            title={'contact me'}
            link={'src/components/c2-header/Header#contact'}
          />

          <div>
            <a href="src/components/c2-header/Header#about">
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

