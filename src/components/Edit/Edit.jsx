import React, { Component } from "react";
import { connect } from "react-redux";


class Edit extends Component {

     toHome = () => {
        this.props.history.push('/') // brings the user to home
    }


    render() {
        return (
            <div>
            <p>HEY I AM THE EDIT PAGE</p>
            <button onClick={this.toHome}>NEXT</button>
            </div>
        )
    }
}

const mapStateToProps = reduxStore => {
	return {
		reduxStore
	};
};

export default connect(mapStateToProps)(Edit);