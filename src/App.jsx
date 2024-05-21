import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import NewPage from "./components/NewPage";
import { Router } from "react-router-dom";
// import { Route, Router, browserHistory, Link } from "react-router-dom";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        {/* <NewPage /> */}
        <CardDeal />
        {/* <Testimonials /> */}
        {/* <Clients /> */}
        <CTA />
        <Footer />
        <NewPage />

        {/* <Router>
          < Router path='/NewPage' element={<Home/>} />
        </Router> */}
      </div>
    </div>
  </div>
);

export default App;

