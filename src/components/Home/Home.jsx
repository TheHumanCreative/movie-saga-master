import React, { Component } from "react";
import { connect } from "react-redux";
import MovieListItem from "../MovieListItem/MovieListItem";
// @material-ui
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Button from "@material-ui/core/Button";

// attempted to get more creative with the styling for the page
// wanted to get the overlapping style to work. 

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: "auto",
    height: "auto"
  }
});

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-around",
//     overflow: "hidden",
//     backgroundColor: theme.palette.background.paper
//   },
//   gridList: {
//     width: 500,
//     height: 450
//   },
//   icon: {
//     color: "rgba(255, 255, 255, 0.54)"
//   }
// }));

class Home extends Component {
  toDetails = id => {
    console.log("clicked poster", id); // showing the id of the photo / movie clicked. 
    this.props.history.push(`/details/${id}`); // brings the user to details, and holds the id of the movie clicked on.
  };

  componentDidMount() {
    this.fetchMovies(); // runs on page load and gets the movies from the DataBase
  }

  fetchMovies() {
    this.props.dispatch({
      type: "FETCH_MOVIES"
    });
  }

  render() { // maps through the array of objects and gives the array style upon appending to the DOM.
    let movies = this.props.reduxStore.moviesReducer.map(movies => {
      return (
        <div>
          <GridListTile key={movies} cols={1} rows={1}>
            <MovieListItem
              key={movies.id}
              movies={movies}
              toDetails={this.toDetails}
            />
          </GridListTile>
        </div>
      );
    });
    // export default function TitlebarGridList() {
    // const  classes  = useStyles();
    const { classes } = this.props;
    


    return (
      <div>
        {/* <p>HEY I AM THE HOME PAGE</p> */}
        <div className={classes.root}>
          <GridList
            cols={4}
            rows={3}
            cellHeight={900}
            spacing={50}
            className={classes.gridList}
          >
            {movies}
          </GridList>
          {/* <ListSubheader component="div">December</ListSubheader>
          <GridListTileBar
            title={movies.title}
            subtitle={<span>by: {movies.title}</span>}
            actionIcon={
              <IconButton
                aria-label={`info about ${movies.description}`}
                className={classes.icon}
              >
                <InfoIcon />
              </IconButton>
            }
          /> */}
          <Button
            type="primary"
            className="nextButton"
            variant="contained"
            onClick={this.toDetails}
          >
            DETAILS
          </Button>
        </div>
      </div>
    );
  }
}

// store on redux the array of objects shown. 
const mapStateToProps = reduxStore => {
  return {
    reduxStore
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Home));
// (useStyles(makeStyles)