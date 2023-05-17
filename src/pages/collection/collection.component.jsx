// useEffect as componentWillUnmount
// import React, { useEffect } from 'react';

import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

// useEffect as componentWillUnmount
// import { firestore } from '../../firebase/firebase.utils';

import {
    CollectionPageContainer,
    CollectionTitle,
    CollectionItemsContainer
} from './collection.styles';

const CollectionPage = ({ collection }) => {

    // when we're using class component then we can use this useEffect way
    // // useEffect as componentWillUnmount(Because we're setting some class method that we were storing the value of inside of our componentDidMount lifecycle method)
    // unsubscribeFromCollections = null;
    // componentDidMount() {
    //     this.unsubscribeFromCollections = firestore.collection('collections').onSnapshot(snapshot => )
    // };

    // // this is way of cleaning up from our listener
    // componentWillUnmount() {
    //     this.unsubscribeFromCollections()
    // }

    // useEffect as componentWillUnmount
    // useEffect(() => {
    //     console.log('I am subscribing');
    //     const unsubscribeFromCollections = firestore.collection('collections').onSnapshot(snapshot => console.log(snapshot))

    //     return () => {
    //         console.log('I am unsubscribe');
    //         unsubscribeFromCollections()
    //     }
    // }, [])

    const { title, items } = collection;
    return (
        <CollectionPageContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItemsContainer>
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </CollectionItemsContainer>
        </CollectionPageContainer>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);