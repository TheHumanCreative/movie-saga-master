import React, { Component } from "react";
import { connect } from "react-redux";



class Home extends Component {
  toDetails = () => {
    this.props.history.push("/details"); // brings the user to details
  };

  componentDidMount() {
    this.props.dispatch({
         type: "FETCH_MOVIES"
         });
  }

  render() {

    let movies = this.props.reduxStore.moviesReducer.map((movies) => {
        return (
          <div key={movies.id}>
            <img src={movies.poster} alt=""></img>
            <p>{movies.title}</p>
            <p>{movies.description}</p>
          </div>
        );
    })

    return (
      <div>
        <p>HEY I AM THE HOME PAGE</p>
        <button onClick={this.toDetails}>NEXT</button>
        {movies}
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