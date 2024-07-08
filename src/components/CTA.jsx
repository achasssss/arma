import styles from "../style";
import Button from "./Button";
import GetStarted from "./GetStarted";

const CTA = () => (
  <section id = "CTA" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Secure ID Verification Platform</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Discover the effectiveness and innovation of our advanced identity verification technology. 
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      {/* <Button /> */}
      <GetStarted />
    </div>

    {/* <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <button
        type="button"
        style={{ color: 'white' }}
        onClick={() => window.open('/src/pages/Home/Home', '_blank')}
      >
        Sign In
      </button>
    </div> */}


  </section>
);

export default CTA; 
