import movie from '../images/movie1.png';
import metronome from '../images/metronome.png';
import frasier from '../images/frasier.png';
import chess from '../images/chess.png';
import rheuben from '../images/ra.png';
import kenny from '../images/kenny.png';
import ticTac from '../images/ticTac.png';
import js from '../images/js.png';
import css from '../images/css.png';
import html from '../images/html.png';
import wp from '../images/wp.png';
import php from '../images/php.png';
import sql from '../images/sql.png';
import react from '../images/react.png';
import node from '../images/node.png';
import mongo from '../images/mongo.png';

export const projects = [
  {
    'title': 'rheubenallenwoodwinds.com',
    'imageUrl': `url(${rheuben}) center/cover`,
    'text': 'eCommerce site for Rheuben Allen and Associates', 
    'buttonText': 'Link',
    'buttonTarget' : 'https://rheubenallenwoodwinds.com',
    'github': 'https://github.com/KevinMillerSax',
    'icons' : [wp, php, js, html, css, sql]
    
  },  
  {
    'title': 'Frasier-Fan',
    'imageUrl': `url(${frasier}) center/cover`,
    'text': 'Full stack CRUD app built with NodeJS, MongoDB, PassPort, Express, and GoogleOauth', 
    'buttonText': 'Link',
    'buttonTarget': 'https://frasier-app.herokuapp.com/',
    'github': 'https://github.com/KevinMillerSax/frasier',
    'icons' : [node, mongo, js, html, css] 
  },  
  {
    'title': 'Movie Finder',
    'imageUrl': `url(${movie}) center/cover`,
    'text': 'React Native app that searches IMDB for info on movies and tv shows', 
    'buttonText': 'Details',
    'buttonTarget': '#',
    'github': 'https://github.com/KevinMillerSax/movie-finder',
    'icons' : [react, js, html, css] 
  },  
  {
    'title': 'Metronome',
    'imageUrl': `url(${metronome}) center/cover`,
    'text': 'React app that helps musicians keep the beat', 
    'buttonText': 'Live',
    'buttonTarget': 'https://kmil-metronome.herokuapp.com/',
    'github': 'https://github.com/KevinMillerSax/metronome',
    'icons' : [react, js, html, css] 
  },  
  {
    'title': 'Chess',
    'imageUrl': `url(${chess}) center/cover`,
    'text': 'JavaScript/HTML/CSS two player chess app', 
    'buttonText': 'Live',
    'buttonTarget': 'https://kevinmillersax.github.io/Chess/',
    'github': 'https://github.com/KevinMillerSax/Chess', 
    'icons' : [js, html, css]
  },  
  {
    'title': 'Kenny G Saxophones',
    'imageUrl': `url(${kenny}) center/cover`,
    'text': 'In Development: a new eCommerce store for A&K Global Enterprises Inc.', 
    'buttonText': 'Details',
    'buttonTarget': '#',
    'github': 'https://github.com/KevinMillerSax/sax-store',
    'icons' : [wp, php, js, html, css, sql]
  },  
  {
    'title': 'Pomodoro',
    'imageUrl': 'url(https://miro.medium.com/max/1200/1*BFV8Gwt5BILa-xv04IK2ng.png) center/cover',
    'text': 'Pomodoro timer build in React Native', 
    'buttonText': 'Details',
    'buttonTarget': '#',
    'github': 'https://github.com/KevinMillerSax/pomodoro',
    'icons' : [react, js, html, css] 
  },  
  {
    'title': 'Tic-Tac-Toe',
    'imageUrl': `url(${ticTac}) center/cover`,
    'text': 'Tic-Tac-Toe game built with JavaScript/HTML/CSS', 
    'buttonText': 'Live',
    'buttonTarget': 'https://kevinmillersax.github.io/ticTacToe/',
    'github': 'https://github.com/KevinMillerSax/ticTacToe',
    'icons' : [js, html, css] 
  },  
]

