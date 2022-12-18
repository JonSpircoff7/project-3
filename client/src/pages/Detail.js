import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

import Cart from '../components/Cart';
// import { useStoreContext } from '../utils/GlobalState';
// import {
//   REMOVE_FROM_CART,
//   UPDATE_CART_WEIGHT,
//   ADD_TO_CART,
//   UPDATE_EXERCISES,
// } from '../utils/actions';
// import { QUERY_EXERCISES } from '../utils/queries';
// import { idbPromise } from '../utils/helpers';
// import spinner from '../assets/spinner.gif';

function Detail() {
  // const [state, dispatch] = useStoreContext();
  // const { id } = useParams();

  // const [currentExercise, setCurrentExercise] = useState({});

  // const { loading } = useQuery(QUERY_EXERCISES);

  // const { exercises, cart } = state;

  useEffect(() => {
    

    // already in global store
    // if (exercises.length) {
    //   setCurrentExercise(exercises.find((exercise) => exercise._id === id));
    // }
    // // retrieved from server
    // else if (data) {
    //   dispatch({
    //     type: UPDATE_EXERCISES,
    //     exercises: data.exercises,
    //   });

    //   data.exercises.forEach((exercise) => {
    //     idbPromise('exercises', 'put', exercise);
    //   });
    // }
    // // get cache from idb
    // else if (!loading) {
    //   idbPromise('exercises', 'get').then((indexedExercises) => {
    //     dispatch({
    //       type: UPDATE_EXERCISES,
    //       exercises: indexedExercises,
    //     });
    //   });
    // }
  // const addToCart = () => {
  //   const itemInCart = cart.find((cartItem) => cartItem._id === id);
  //   if (itemInCart) {
  //     dispatch({
  //       type: UPDATE_CART_WEIGHT,
  //       _id: id,
  //       purchaseWeight: parseInt(itemInCart.purchaseWeight) + 1,
  //     });
  //     idbPromise('cart', 'put', {
  //       ...itemInCart,
  //       purchaseWeight: parseInt(itemInCart.purchaseWeight) + 1,
  //     });
  //   } else {
  //     dispatch({
  //       type: ADD_TO_CART,
  //       exercise: { ...currentExercise, purchaseWeight: 1 },
  //     });
  //     idbPromise('cart', 'put', { ...currentExercise, purchaseWeight: 1 });
  //   }
  // };

  // const removeFromCart = () => {
  //   dispatch({
  //     type: REMOVE_FROM_CART,
  //     _id: currentExercise._id,
  //   });

  //   idbPromise('cart', 'delete', { ...currentExercise });
  // };

  // if (getExerciseData()) {
  //   console.log(results);
  // }

    idbPromise('cart', 'delete', { ...currentExercise });
  };

  return (
    <>
      {currentExercise && cart ? (
        <div className="container my-1">
          <Link to="/">← Back to Exercises</Link>

          <h2>{currentExercise.name}</h2>

          <p>{currentExercise.description}</p>

          <p>
            <strong>Instruction:</strong>${currentExercise.instruction}{' '}
            <button onClick={addToCart}>Add to Cart</button>
            <button
              disabled={!cart.find((p) => p._id === currentExercise._id)}
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
          </p>

          <img
            src={`/images/${currentExercise.image}`}
            alt={currentExercise.name}
          />
        </div>
      ) : null}
      {/* {loading ? <img src={spinner} alt="loading" /> : null} */}
      <Cart />
    </>
  );
}

export default Detail;
