import React, { useState } from "react";
import "./App.scss";
import Footer from "./components/footer";

const App = () => {
  const [search, setSearch] = useState("");
  return (
    <React.Fragment>
      <div className="site-container">
        <section className="header">
          <h1>OMDb App</h1>
          <p>Looking for the perfect film? Powered by IMDB.</p>
          <section className="search">
            <p>Enter your film search below.</p>
          </section>
        </section>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
};
export default App;
