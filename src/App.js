import React, { useState } from "react";
import "./App.scss";
import Footer from "./components/footer";
import Fade from "react-reveal/Fade";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showResults, setShowResults] = useState(false);
  return (
    <React.Fragment>
      <div className="site-container">
        <Fade when={!showResults} collapse>
          <section className="header">
            <h1>OMDb App</h1>
            <p>Looking for the perfect film? Search below. Powered by IMDB.</p>
            <section className="search">
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
          </section>
        </Fade>
        <Fade bottom when={showResults} collapse>
          <section className="results">
            <div className="film-title">
              <h2>Star Wars</h2>
            </div>
            <div className="film-content">
              <div className="film-description">
                <div className="film-release">
                  <h5>Release Date</h5>
                  <p>October 20, 2020</p>
                </div>
                <div className="film-rating">
                  <h5>Rating</h5>
                  <p>PG</p>
                </div>
                <div className="film-runtime">
                  <h5>Runtime</h5>
                  <p>152mins</p>
                </div>
                <div className="film-genre">
                  <h5>Genre</h5>
                  <p>Sci-fi Adventure</p>
                </div>
              </div>
              <div className="film-poster">
                <img src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/608x608/products/88997/93196/Avengers-Endgame-Final-Style-Poster-buy-original-movie-posters-at-starstills__42370.1563973510.jpg"></img>
              </div>
            </div>
            <button onClick={(event) => setShowResults(!showResults)}>
              Search Again
            </button>
          </section>
        </Fade>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
};
export default App;
