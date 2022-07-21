import s from './Contacts.module.scss'

export const Contacts = () => {
  return (
    <section className={s.contacts}>

      <div className={s.container}>

        <div>
          <h2>
            Contact Me!
          </h2>

        </div>


        <div className={s.formBlock}>
          <form>

            <div>
              <input type="text" name="name" required="required" placeholder="Name"/>

              <input type="email" name="email" placeholder="Email" required="required"/>

              <input type="text" name="subject" placeholder="Subject"/>

              <textarea name="message" placeholder="Your Message" required="required"></textarea>
            </div>

            <div>
              <input type="submit" value="Submit Now" className={s.submitBtn}/>
            </div>

          </form>

        </div>

      </div>
    </section>
  )
}

