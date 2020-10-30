import movie from '../images/movie1.png';
import metronome from '../images/metronome.png';
import frasier from '../images/frasier.png';
import chess from '../images/chess.png';
import rheuben from '../images/ra.png';
import kenny from '../images/kenny.png';
import ticTac from '../images/ticTac.png';
import js from '../images/js-padding.png';
import css from '../images/css-square.png';
import html from '../images/html.png';
import wp from '../images/wp.png';
import php from '../images/php.png';
import sql from '../images/sql.png';
import react from '../images/react.png';
import native from '../images/react-native.png';
import node from '../images/node.png';
import mongo from '../images/mongo.png';
import pomo1 from '../images/waterfall1.png';
import pomo2 from '../images/waterfall2.png';
import mov1 from '../images/mov1.png';
import mov2 from '../images/mov2.png';
import ken1 from '../images/ken1.png';
import rails from '../images/rails.png';
import coffee from '../images/coffee.png'
import python from '../images/python.png'
import numpy from '../images/numpy.png'
import pandas from '../images/pandas.png'
import stock from '../images/stock.jpg'

export const projects = [
  {
    'title': 'Td Trader',
    'imageUrl': `url(${stock}) center/cover`,
    'text': 'Python with Pandas and Numpy',
    'buttonText': 'Details',
    'buttonTarget': '#',
    'description': 'Td Trader is a project in progress.  It finds patterns in the movement of stock prices and executes trades via the TdAmeritrade API',
    'github': 'https://github.com/KevinMillerSax/trade',
    'icons': [python, pandas, numpy],
  },
  {
    'title': 'Nervosa Coffee Forum',
    'imageUrl': `url(${coffee}) center/cover`,
    'text': `Ruby on Rails app with SQL database.`,
    'buttonText': 'Link',
    'buttonTarget': 'https://nervosa-coffee.herokuapp.com/',
    'github': 'https://github.com/KevinMillerSax/coffee',
    'icons' : [rails, html, css, sql],
  },
  {
    'title': 'kennygsaxophones.com',
    'imageUrl': `url(${kenny}) center/cover`,
    'text': "The official eCommerce store for Kenny G's saxophone line. Developed for A&K Global Enterprises, Inc.",
    'buttonText': 'Details',
    'buttonTarget': '#',
    'description': `A custom Wordpress theme that utilizes WooCommerce to sell saxophones. It's built in PHP, JavaScript, HTML, and CSS`,
    'github': 'https://github.com/KevinMillerSax/sax-store',
    'icons' : [wp, php, js, html, css, sql],
    'photo1': [ken1]
  },
  {
    'title': 'rheubenallen.com',
    'imageUrl': `url(${rheuben}) center/cover`,
    'text': 'eCommerce site for Rheuben Allen and Associates',
    'buttonText': 'Details',
    'buttonTarget' : '#',
    'description': 'An eCommerce site built in Wordpress.',
    'github': 'https://github.com/KevinMillerSax/rheuben',
    'icons' : [wp, php, js, html, css, sql]
  },
  {
    'title': 'Frasier-Fan',
    'imageUrl': `url(${frasier}) center/cover`,
    'text': 'Full stack CRUD app built with NodeJS, MongoDB, Passport, Express, and GoogleOauth',
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
    'icons' : [native, js, html, css],
    'description' : `Movie Finder is an app built with React Native.  It utilizes the IMDB API to allow users to search for info
      on their favorite movies, tv shows, and videogames.`,
    'photo1': [mov1, mov2]
  },
  {
    'title': 'Metronome',
    'imageUrl': `url(${metronome}) center/cover`,
    'text': 'React app that helps musicians keep the beat',
    'buttonText': 'Demo',
    'buttonTarget': 'https://km-metronome.herokuapp.com/',
    'github': 'https://github.com/KevinMillerSax/metronome',
    'icons' : [react, js, html, css]
  },
  {
    'title': 'Chess',
    'imageUrl': `url(${chess}) center/cover`,
    'text': 'JavaScript/HTML/CSS two player chess app',
    'buttonText': 'Demo',
    'buttonTarget': 'https://kevinmillersax.github.io/Chess/',
    'github': 'https://github.com/KevinMillerSax/Chess',
    'icons' : [js, html, css]
  },
  {
    'title': 'Pomodoro',
    'imageUrl': `url(${pomo1}) center/cover`,
    'text': 'Pomodoro timer build in React Native',
    'buttonText': 'Details',
    'buttonTarget': '#',
    'github': 'https://github.com/KevinMillerSax/pomodoro',
    'icons' : [native, js, html, css],
    'description' : 'Pomodoro is a React Native app. Pomodoro is a time management technique where people break down their work and break time into intervals.',
    'photo1': [pomo1, pomo2]
  },
  {
    'title': 'Tic-Tac-Toe',
    'imageUrl': `url(${ticTac}) center/cover`,
    'text': 'Tic-Tac-Toe game built with JavaScript/HTML/CSS',
    'buttonText': 'Demo',
    'buttonTarget': 'https://kevinmillersax.github.io/ticTacToe/',
    'github': 'https://github.com/KevinMillerSax/ticTacToe',
    'icons' : [js, html, css]
  },
]

