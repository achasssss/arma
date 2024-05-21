import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button1";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Unmasking Deepfakes <br className="sm:block hidden" /> How Our System Works
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our deepfake detection system carefully analyzes and reports fake content, providing you with accurate results.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;