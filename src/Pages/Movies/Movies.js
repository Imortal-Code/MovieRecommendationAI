import React, { Suspense, lazy } from "react";
import "./Movies.scss";
import { connect } from "react-redux";
import {
  selectMovieItems,
  selectIsMovieFetching
} from "../../Redux/Movie/movie-selectors";
import { getMovies } from "../../Redux/Movie/movie-actions";
import SearchBar from "../../Components/SearchBar/SearchBar";

const CollectionGridMovie = React.lazy(() => import("../../Components/CollectionGrid/CollectionGridMovie"));

const CollectionOverviewMovie = React.lazy(() =>
  // import("../../Components/CollectionOverview/CollectionOverviewMovie")
  import("../../Components/SearchPage/SearchPage")
);

const Footer = React.lazy(() => import("../../Components/Footer/Footer"));

class Movies extends React.Component {
  componentDidMount() {
    this.props.dispatch(getMovies());
  }

  render() {
    return (
      <div style={{marginTop:'5%'}}>
        <div  style={{
            height:'400px',
            marginLeft:'20%',
            display: 'flex',
            flexWrap: 'wrap',
            alignContent: 'center'
        }} ><SearchBar movies/></div>
        <Suspense fallback={<div></div>}>
          {/* <CollectionGridMovie movies /> */}
          
          <CollectionOverviewMovie movies />
          <Footer />
        </Suspense>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movieItems: selectMovieItems(state),
  isFetching: selectIsMovieFetching(state)
});

export default connect(mapStateToProps)(Movies);
