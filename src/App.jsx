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



// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import styles from "./style";
// import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
// import NewPage from "./components/NewPage";

// const App = () => (
//   <Router>
//     <div className="bg-primary w-full overflow-hidden">
//       <div className={`${styles.paddingX} ${styles.flexCenter}`}>
//         <div className={`${styles.boxWidth}`}>
//           <Navbar />
//         </div>
//       </div>

//       <div className={`bg-primary ${styles.flexStart}`}>
//         <div className={`${styles.boxWidth}`}>
//           <Hero />
//         </div>
//       </div>
      
//       <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
//         <div className={`${styles.boxWidth}`}>
//           <Switch>
//             <Route exact path="/" component={Stats} />
//             <Route path="/business" component={Business} />
//             <Route path="/billing" component={Billing} />
//             <Route path="/newpage" component={NewPage} />
//             {/* Add more routes as needed */}
//           </Switch>
//           <CTA />
//           <Footer />
//         </div>
//       </div>
//     </div>
//   </Router>
// );

// export default App;
