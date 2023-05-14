import React from "react";

// nested routing in shop page
import { Route } from "react-router-dom";

// reason for Redux thunk
// import { createStructuredSelector } from "reselect"; (reason for container pattern)

// Adding shop data to redux
import { connect } from "react-redux";

// reason for container pattern
import CollectionsOverviewContainer from "../../components/collection-overview/collection-overview.container";

// reason for container pattern
import CollectionPageContainer from "../collection/collection.container";

// reason for Redux thunk
// import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'

//reason for redux-saga
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'

// import './shop-page.styles.scss'

class ShopPage extends React.Component {

    // reason for redux thunk
    // componentDidMount() {
    //     const { fetchCollectionsStartAsync } = this.props
    //     fetchCollectionsStartAsync()
    // }

    //reason for redux-saga
    componentDidMount() {
        const { fetchCollectionsStart } = this.props
        fetchCollectionsStart()
    }

    render() {
        // const { match } = this.props;

        // reason for Redux thunk
        // const { match, isCollectionFetching, isCollectionsLoaded } = this.props;

        // reason for container pattern
        const { match } = this.props;

        {/* // withSpinner HOC 2 */ }
        // const { loading } = this.state;

        return (
            <div className="shop-page">
                {/* reason for container pattern */}
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />

                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </div>
        );
    }
};

// reason for Redux thunk
// const mapStateToProps = createStructuredSelector({
// isCollectionFetching: selectIsCollectionFetching, (reason for container pattern)

// Debuggining our code (Reason for after redux thunk 'title' of 'collection' as it is null)
// isCollectionsLoaded: selectIsCollectionsLoaded (reason for container pattern)
// });

// Adding shop data to redux
const mapDispatchToProps = dispatch => ({
    // reason for Redux thunk
    // fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())

    //reason for redux-saga
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

// reason for container pattern
export default connect(null, mapDispatchToProps)(ShopPage);
