import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";


class Details extends Component {

    // button / user navigation between pages

    toEdit = (id) => {
        this.props.history.push(`/edit/${id}`) // brings the user to edit, and holds onto the id clicked.
    }

    toHome = () => {
        this.props.history.push('/') // brings the user to home
    }

    // runs the functions inside on page load. 

    componentDidMount() {
        this.fetchDetails();
        this.fetchGenres();
    }

    fetchDetails(id) {
        this.props.dispatch({
            type: 'FETCH_DETAILS',
            payload: this.props.match.params.id
        });
    }

    fetchGenres(id) {
        this.props.dispatch({
            type: 'FETCH_GENRES',
            payload: this.props.match.params.id
        });
    }
    render() {

        const genreList = this.props.reduxStore.genresReducer.map(genres => {
        return (<li key={genres}>{genres}</li>);
        })
        return (
          <div>
            {/* {JSON.stringify(this.props.reduxStore.genresReducer.name)} */}
            <p>
              <h2>
                <b>{this.props.reduxStore.detailsReducer.title}</b>
              </h2>
            </p>
            <p>
              <ul>
                <b>Genres:{genreList}</b>
              </ul>
            </p>

            <img
              src={this.props.reduxStore.detailsReducer.poster}
              alt={this.props.reduxStore.detailsReducer.name}
            ></img>
            <p className="description">{this.props.reduxStore.detailsReducer.description}</p>
            <Button
              type="primary"
              className="nextButton"
              variant="contained"
              onClick={this.toHome}
            >
              HOME
            </Button>
            <Button
              type="primary"
              className="nextButton"
              variant="contained"
              onClick={this.toEdit}
            >
              EDIT
            </Button>
          </div>
        );
    }
}

const mapStateToProps = reduxStore => {
	return {
		reduxStore
	};
};

export default connect(mapStateToProps)(Details);