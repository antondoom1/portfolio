import s from './RemoteWork.module.css'
import sContainer from '../common/styles/Container.module.css'

export const RemoteWork = () => {
  return (
    <div className={s.remote}>
      <div className={`${sContainer.container} ${s.container}`}>
        <h2>Considering remote work</h2>
        <div>Hire me</div>
      </div>
    </div>
  )
}
