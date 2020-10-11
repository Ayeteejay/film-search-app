import React, { useState } from "react";
import "./App.scss";
import Footer from "./components/footer";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showResults, setShowResults] = useState(false);
  return (
    <React.Fragment>
      <div className="site-container">
        <section className="header">
          <h1>OMDb App</h1>
          <p>Looking for the perfect film? Search below. Powered by IMDB.</p>
          <section
            className="search"
            style={{ display: !showResults ? "flex" : "none" }}
          >
            <p>Enter your film search below.</p>
            <input
              placeholder=""
              type="text"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
            ></input>
            <button onClick={(event) => setShowResults(!showResults)}>
              Search
            </button>
          </section>
          <section
            className="results"
            style={{ display: showResults ? "flex" : "none" }}
          >
            <h2>Star Wars</h2>
          </section>
        </section>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
};
export default App;
