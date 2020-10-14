import React, { useState,useEffect } from "react";
import "./App.scss";
import Footer from "./components/footer";
import Fade from "react-reveal/Fade";

const App = () => {
const [searchValue, setSearchValue] = useState("");
const [showResults, setShowResults] = useState(false);
const [resultData, setResultData] = useState({});
const [showError, setShowError] = useState(false);
const [dataSuccess, setDataSuccess] = useState(false);
const key = process.env.REACT_APP_API_KEY;

useEffect(()=>{
  if(showError){
    setTimeout(() => {
  setShowError(!showError)
    }, 3000);
  }

})
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
                    !searchValue.length ? setShowError(!showError): 
                    fetch(
                      `http://www.omdbapi.com/?t=${searchValue}&apikey=${key}`
                    )
                      .then((response) => response.json())
                      .then((data)=>setResultData(data))              
                      .then(()=>setSearchValue("")) 
                      .then((event) => setShowResults(!showResults))
                  }}
                >
                  Search
                </button>
              </div>
            </div>
            <Fade bottom when={showError} collapse>
            <div className="error-row">
                <p>Please input at least one character.</p>
            </div>
            </Fade>
          </section>
        </Fade>
        <Fade bottom when={showResults} collapse>
          <section
            className="results" style={{ display: showResults ? "inherit" : "none" }}
          >
            <div className="film-title">
                <h2>{resultData["Title"]}</h2>
                <Fade bottom >
                <div className="error-row" style={{display: resultData.Title ? "none" :"block"}}>
                <p>Bogus! Doesn't look like we have info on that movie.</p>
            </div>
                </Fade>          
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
                <img src={resultData["Poster"]} alt={resultData["Title"]}></img>
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
                    !searchValue.length ? setShowError(!showError): 
                    fetch(
                      `http://www.omdbapi.com/?t=${searchValue}&apikey=${key}`
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
            <Fade bottom when={showError} collapse>
            <div className="error-row">
                <p>Please input at least one character.</p>
            </div>
            </Fade>
          </section>
        </Fade>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
};
export default App;
