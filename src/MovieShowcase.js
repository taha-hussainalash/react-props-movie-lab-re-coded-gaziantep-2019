import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
  
  return movieData.map( (data) => (
      <MovieCard
      title = {data.title}
      genres = {data.genres}
      poster = {data.poster}
      IMDBRating = {data.IMDBRating}
    />)) 
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
