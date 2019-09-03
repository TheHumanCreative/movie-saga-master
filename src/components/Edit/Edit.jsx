import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


class Edit extends Component {

    state = {
        id: this.props.reduxStore.detailsReducer.id,
        title: this.props.reduxStore.detailsReducer.title,
        description: this.props.reduxStore.detailsReducer.description
    };

     toHome = () => {
        this.props.history.push('/') // brings the user to home
    }

    toDetails = (id) => {
        this.props.history.push(`/details/${id}`) // brings the user to 
    }

    componentDidMount() {
        console.log(this.state);
        this.fetchDetails();
        // this.fetchGenres();
        this.setState({
          id: this.props.reduxStore.detailsReducer.id,
          title: this.props.reduxStore.detailsReducer.title,
          description: this.props.reduxStore.detailsReducer.description
        });
        
    }

    fetchDetails() {
        this.props.dispatch({
            type: 'FETCH_DETAILS',
            payload: this.props.match.params.id
        });
    }

    // handleChange = (property, event) => {
    //     this.setState({
    //         ...this.state,
    //         [property] : event.target.value
    //     });
    //     console.log(this.state.title, this.state.description);
    // }

    // handleDescriptionUpdate = (event) => {
    //     event.preventDefault();
    //     let editDescription = {id: this.state.id, description: this.state.description}
    //     this.props.dispatch({
    //         type: 'UPDATE_DESCRIPTION',
    //         payload: editDescription
    //     });
    //     console.log('Updating description:', this.state.description);
    //     this.props.history.push(`/details/${this.props.match.params.id}`);
    // }

    updateTitleAndDescription = (event) => {
        event.preventDefault();
        let editTitleAndDescription = {id: this.state.id, title: this.state.title, description: this.state.description}
        this.props.dispatch({
            type: 'UPDATE',
            payload: editTitleAndDescription
        });
        console.log('Updating title:', this.state.title, this.state.description);
        this.props.history.push(`/details/${this.props.match.params.id}`);
        
    }


    render() {
        return (
          <div>
            {/* <p>HEY I AM THE EDIT PAGE</p> */}
            <form onSubmit={this.updateTitleAndDescription}>
              <TextField
                label="Edit movie title"
                defaultValue={this.props.reduxStore.detailsReducer.title}
                onChange={event => this.setState({ title: event.target.value })}
                fullWidth
              />
              {/* <Button type="submit" className="nextButton" variant="contained">
                Submit
              </Button> */}
            {/* </form> */}
            <br />
            {/* <form onSubmit={this.handleDescriptionUpdate}> */}
              <TextField
                label="Edit movie description"
                defaultValue={this.state.description}
                onChange={event =>
                  this.setState({ description: event.target.value })
                }
                multiline={true}
                rows={10}
                fullWidth
              />
              <Button type="submit" className="nextButton" variant="contained">
                Submit
              </Button>
            </form>
            {/* <Button type="submit" className="nextButton" variant="contained">
              Submit
            </Button> */}

          
            <button onClick={this.toHome}>HOME</button>
            <button onClick={this.toDetails}>DETAILS</button>
          </div>
        );
    }
}

const mapStateToProps = reduxStore => {
	return {
		reduxStore
	};
};

export default connect(mapStateToProps)(Edit);