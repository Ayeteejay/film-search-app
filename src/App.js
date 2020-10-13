import React, { useState } from "react";
import "./App.scss";
import Footer from "./components/footer";
import Fade from "react-reveal/Fade";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [resultData, setResultData] = useState({});

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
                <button
                  onClick={() => {
                    fetch(
                      `http://www.omdbapi.com/?t=${searchValue}&apikey=2af34d77`
                    )
                      .then((response) => response.json())
                      .then((data)=>setResultData(data))              
                      .then(()=>setSearchValue("")) 
                      .then((event) => setShowResults(!showResults))
                      .catch((error)=>console.log(error))
                  }}
                >
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
                <h2>{resultData["Title"]}</h2>                
            </div>
            <div className="film-content">
              {/* Content Side */}
              <div className="description">
                <div className="facts">
                  <div>
                    <h5>Release Date</h5>
                <p>{resultData["Released"]}</p>
                  </div>
                  <div>
                    <h5>Rating</h5>
                <p>{resultData["Rated"]}</p>
                  </div>
                  <div>
                    <h5>Runtime</h5>
                <p>{resultData["Runtime"]}</p>
                  </div>
                  <div>
                    <h5>Genre</h5>
                <p>{resultData["Genre"]}</p>
                  </div>
                </div>
                <div className="starring">
                  <h5>Starring</h5>
                <p>{resultData["Actors"]}</p>
                </div>
                <div className="details">
                  <h5>Movie Description</h5>
                  <p>
                   {resultData["Plot"]}
                  </p>
                </div>
              </div>
              {/* Poster Side */}
              <div className="poster" style={{display:resultData["Poster"] === "N/A" ? "none" : "flex"}}>
                <img src={resultData["Poster"]} alt="Movie poster"></img>
              </div>
            </div>
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
              <button
                  onClick={() => {
                    fetch(
                      `http://www.omdbapi.com/?t=${searchValue}&apikey=2af34d77`
                    )
                      .then((response) => response.json())
                      .then((data)=>setResultData(data))    
                      .then(()=>setSearchValue(""))             
                  }}
                >
                  Search
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
