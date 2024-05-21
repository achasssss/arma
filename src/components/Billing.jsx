import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[0] w-[10%] h-[5%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[50%] h-[50%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[20%] h-[20%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
    
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Secure KYC. <br className="sm:block hidden" /> Level Up Security.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our secure KYC solutions offer improved accuracy and fraud prevention, ensuring the highest level of identity verification.
      </p>

      {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div> */}
    </div>
  </section>
);

export default Billing;