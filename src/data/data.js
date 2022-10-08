import { gql } from "@apollo/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const GET_CURRENCIES = gql`
{
  currencies{
    label
    symbol
  }
}`

const GET_CATEGORIES = gql`
 {
    categories {
    name
    products{
      name
      id
      category
      inStock
      description
      brand
      gallery
      attributes{
       name
        id
        type
        items{
          id
          value
          displayValue
        }
      }
      prices{
        currency{
          label
          symbol
        }
        amount
        
      } 
    }
  }
  }
`;

const GET_PRODUCT_BY_ID = (id) => {
  return gql`{
    product(id : "${id}"){
      name
      id
      category
      inStock
      description
      brand
      gallery
      attributes{
       name
        id
        type
        items{
          id
          value
          displayValue
        }
      }
      prices{
        currency{
          label
          symbol
        }
        amount
        
      }  
    }
}`;
};

const URL = 'http://localhost:4000/';



export  {GET_CATEGORIES, GET_CURRENCIES, GET_PRODUCT_BY_ID };