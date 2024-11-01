import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import RightButton from './rightButton'
import Movies from './Movies'
import ToggleTheme from './ToggleTheme'
import Signup from './pages/signup';
import Login from './pages/Login';
import Heading from './Heading'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToggleTheme />
    <Router>
      <div class="contentdiv">
        <h1 id="heading">TicketVerse</h1>
      </div>
      <div class="contentdiv1">
        <h2 id="desc">Your Front Row Seat to Every Adventure!</h2>
      </div>
      <Routes>
        <Route path="/" element={   //the main page stuff put here directly 
          <>
            <div id="movies">
              <Movies />
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {

            }

            <div id="about">
            <h2>About us:</h2>
            <p>Welcome to TicketVerse: your ultimate destination for seamless movie bookings and unforgettable cinematic experiences! At TicketVerse, we’re passionate about bringing the magic of movies to you with ease and convenience. Explore showtimes, book tickets, and secure your front-row seat to the latest blockbusters, all in just a few clicks. Join us and dive into a universe of entertainment, where every film journey begins with TicketVerse.</p>
            <br></br>
            <h3>Developers:</h3>
            <h3 id="names">
              <a id="names" href="#">Ayush Chakraborty</a>
              <br></br>
              <a id="names" href="#">Anupam G</a>
              <br></br>
              <a id="names" href="#">Archit Rode</a>
              <br></br>
            </h3>
            </div> 
            {/* <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br> */}
          </>
        } />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <RightButton />
    </Router>
  </StrictMode>
)
