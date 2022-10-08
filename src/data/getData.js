import { GET_CATEGORIES, GET_CURRENCIES } from "./data";
import { ApolloClient, InMemoryCache } from '@apollo/client';

const URL = 'http://localhost:4000/';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  }
});

const getCategories = async () => {
  let res = await client.query({
    query: GET_CATEGORIES
  })
  let data = await res;
  let categories = data.data.categories

  return categories;
}

const getCurrencies = async () => {
  let res = await client.query({
    query: GET_CURRENCIES
  })
  let data = await res;
  let currencies = data.data.currencies

  return currencies;
}
  
export {getCategories, getCurrencies}