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
          <section
            className="header"
            style={{ display: !showResults ? "inherit" : "none" }}
          >
            <section className="search-intro">
              <h1>OMDb App</h1>
              <p>Search for movies by name. Powered by IMBD.</p>
            </section>
            <div className="search-row">
              <div className="search-row-input">
                <input
                  placeholder=""
                  type="text"
                  value={searchValue}
                  onChange={(event) => setSearchValue(event.target.value)}
                ></input>
              </div>
              <div className="search-row-button">
                <button onClick={(event) => setShowResults(!showResults)}>
                  Search
                </button>
              </div>
            </div>
          </section>
        </Fade>
        <Fade bottom when={showResults} collapse>
          <section
            className="results"
            style={{ display: showResults ? "inherit" : "none" }}
          >
            <div className="film-title">
              <h2>Star Wars</h2>
            </div>
            <div className="film-content">
              {/* Content Side */}
              <div className="description">
                <div className="facts">
                  <div>
                    <h5>Release Date</h5>
                    <p>October 20, 2020</p>
                  </div>
                  <div>
                    <h5>Rating</h5>
                    <p>PG</p>
                  </div>
                  <div>
                    <h5>Runtime</h5>
                    <p>152mins</p>
                  </div>
                  <div>
                    <h5>Genre</h5>
                    <p>Sci-fi Adventure</p>
                  </div>
                </div>
                <div className="starring">
                  <h5>Staring</h5>
                  <p>Someone Jones, Someone Harris</p>
                </div>
                <div className="details">
                  <h5>Movie Description</h5>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>
                </div>
              </div>
              {/* Poster Side */}
              <div className="poster">
                <img src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/608x608/products/88997/93196/Avengers-Endgame-Final-Style-Poster-buy-original-movie-posters-at-starstills__42370.1563973510.jpg"></img>
              </div>
            </div>
            <div className="search-row">
              <div className="search-row-input">
                <input></input>
              </div>
              <div className="search-row-button">
                <button onClick={(event) => setShowResults(!showResults)}>
                  Search Again
                </button>
              </div>
            </div>
          </section>
        </Fade>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
};
export default App;
