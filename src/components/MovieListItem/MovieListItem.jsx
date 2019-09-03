import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class MovieListItem extends Component {

    fetchDetails() {
        this.props.dispatch({
            type: 'FETCH_DETAILS',
            payload: this.props.movies.id
        });
    }

    fetchGenres() {
        this.props.dispatch({
            type: 'FETCH_GENRES',
            payload: this.props.movies.id
        });
    }

    showMovieDetails = () => {
        this.fetchDetails();
        this.fetchGenres();
        this.props.history.push(`/details/${this.props.movies.id}`);
        console.log(`/details/${this.props.movies.id}`);
        
    }
    render() { // commented out the title and description to get the images just to be on the home page.
        return (
          <div>
            {/* <h1>{this.props.movies.title}</h1> */}
            <img className="img" src={this.props.movies.poster}
                alt={this.props.movies.name}
                onClick={() => this.props.toDetails(this.props.movies.id)}></img>
             {/* <p>{this.props.movies.description}</p> */}
    
          </div>
        ); 
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
});

export default withRouter(connect(mapStateToProps)(MovieListItem));