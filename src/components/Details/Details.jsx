import React, { Component } from "react";
import { connect } from "react-redux";



class Details extends Component {

    toEdit = () => {
        this.props.history.push('/edit') // brings the user to edit
    }


    render() {
        return (
            <div>
            <p>HEY I AM A DETAILS PAGE</p>
            <button onClick={this.toEdit}>NEXT</button>
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