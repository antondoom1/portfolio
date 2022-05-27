import s from './Contacts.module.css'
import sContainer from '../common/styles/Container.module.css'

export const Contacts = () => {
  return (
    <div className={s.contactsBlock}>
      <div className={`${sContainer.container} ${s.contactsContainer}`}>
        <h2>Contacts</h2>
        <form className={s.contacts}>
          <input type="text"/>
          <input type="text"/>
          <textarea></textarea>
        </form>
        <div className={s.button}>
          Send
        </div>
      </div>
    </div>
  )
}

