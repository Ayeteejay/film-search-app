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
          <section
            className="results"
            style={{ display: showResults ? "inherit" : "none" }}
          >
            <div className="film-title">
              <h2>Star Wars</h2>
            </div>
            <div className="film-content">
              {/* Left Side */}
              <div className="description">
                <div className="facts">
                  <div className="release">
                    <h5>Release Date</h5>
                    <p>October 20, 2020</p>
                  </div>
                  <div className="rating">
                    <h5>Rating</h5>
                    <p>PG</p>
                  </div>
                  <div className="runtime">
                    <h5>Runtime</h5>
                    <p>152mins</p>
                  </div>
                  <div className="genre">
                    <h5>Genre</h5>
                    <p>Sci-fi Adventure</p>
                  </div>
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
              {/* Right Side */}
              <div className="poster">
                <img src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/608x608/products/88997/93196/Avengers-Endgame-Final-Style-Poster-buy-original-movie-posters-at-starstills__42370.1563973510.jpg"></img>
              </div>
            </div>
            <div className="search-again">
              <input></input>
              <button onClick={(event) => setShowResults(!showResults)}>
                Search Again
              </button>
            </div>
          </section>
        </Fade>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
};
export default App;
