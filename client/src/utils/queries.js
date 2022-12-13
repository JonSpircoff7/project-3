import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  query getProducts($exercise: ID) {
    products(exercise: $exercise) {
      _id
      name
      description
      price
      quantity
      image
      exercise {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      exercise {
        name
      }
    }
  }
`;

export const QUERY_EXERCISES = gql`
  {
    exercises {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
