import React, { Component } from "react";
import { connect } from "react-redux";
import MovieListItem from "../MovieListItem/MovieListItem";

class Home extends Component {
  toDetails = (id) => {
    console.log('clicked poster', id);
    this.props.history.push(`/details/${id}`); // brings the user to details
  };

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
      this.props.dispatch({
        type: "FETCH_MOVIES"
      });
  }

  render() {

    let movies = this.props.reduxStore.moviesReducer.map((movies) => {
        return (
          <>
            <MovieListItem key={movies.id} movies={movies} toDetails={this.toDetails} />
          </>

          //   <div key={movies.id}>
          //     <img src={movies.poster} alt={movies.name}></img>
          //     <p>{movies.title}</p>
          //     <p>{movies.description}</p>
          //   </div>
        );
    })

    return (
      <div>
        <p>HEY I AM THE HOME PAGE</p>
        <div>
          
            
            {movies}
          
          <button onClick={this.toDetails}>NEXT</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxStore => {
	return {
		reduxStore
	};
};

export default connect(mapStateToProps)(Home);