import React, { Component } from "react";
import { connect } from "react-redux";



class Details extends Component {

    // button / user navigation between pages

    toEdit = (id) => {
        this.props.history.push(`/edit/${id}`) // brings the user to edit
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
            })
        }
    render() {

        // let genreList = this.props.reduxStore.genreReducer.map(genres => {
        //     return <li>{genres.name}</li>;
        // })
        return (
            <div>
            <p>{this.props.reduxStore.detailsReducer.title}</p>
            {/* // <ul>{genreList}</ul> */}
            <img src={this.props.reduxStore.detailsReducer.poster}
                alt={this.props.reduxStore.detailsReducer.name}></img>
            <p>{this.props.reduxStore.detailsReducer.description}</p>
            <button onClick={this.toHome}>HOME</button>
            <button onClick={this.toEdit}>EDIT</button>
            </div>
        )
    }
}

const mapStateToProps = reduxStore => {
	return {
		reduxStore
	};
};

export default connect(mapStateToProps)(Details);