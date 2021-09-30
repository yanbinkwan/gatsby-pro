import React from 'react'
import Layout from '../components/Layout'

function contact() {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>I'm baby irony truffaut wayfarers cardigan venmo. Kale chips air plant kickstarter pop-up raw denim 3 wolf moon post-ironic pitchfork +1 taiyaki gluten-free taxidermy biodiesel XOXO. Iceland fixie YOLO</p>
            <p>. Master cleanse venmo aesthetic quinoa, lomo succulents put a bird on it craft beer mixtape. Air plant activated charcoal succulents paleo.</p>
            <p>Live-edge affogato 3 wolf moon seitan. Church-key thundercats slow-carb glossier.</p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Your message</label>
                <textarea name="message" id="message" />
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default contact
