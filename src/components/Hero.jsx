import { useApp } from '../context/AppContext'
import styles from './Hero.module.css'

export default function Hero() {
  const { offerBanner, setActiveDrawer } = useApp()

  return (
    <>
      {offerBanner && (
        <div className={styles.offerBanner}>
          <span className={styles.offerText}>🎉 {offerBanner.message}</span>
          {offerBanner.couponCode && (
            <span
              className={styles.offerCode}
              onClick={() => {
                navigator.clipboard?.writeText(offerBanner.couponCode)
                setActiveDrawer('cart')
              }}
              title="Click to copy & open cart"
            >
              {offerBanner.couponCode}
            </span>
          )}
        </div>
      )}

      <section className={styles.hero}>
        <div className={styles.float}>🍗🔥🍚</div>
        <h1 className={styles.title}>SAN <em>FAST</em>FOOD</h1>
        <p className={styles.sub}>Premium Taste • Fast Delivery</p>
        <p className={styles.hindi}>Swaad Aisa ki Ghar jaisa 🏠</p>
        <div className={styles.btns}>
          <a href="#menu" className="btn-primary">🍽️ Order Now</a>
          <a href="https://wa.me/917001728030" target="_blank" rel="noreferrer" className="btn-secondary">
            💬 WhatsApp Us
          </a>
        </div>
        <div className={styles.badges}>
          <span className={styles.badge}>⏰ Open 10 AM – 10 PM</span>
          <span className={styles.badge}>🚀 Fast Delivery</span>
          <span className={styles.badge}>💰 50% Advance</span>
        </div>
      </section>
    </>
  )
}
