import ApolloClient, { gql } from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
});
var data = {}
client.query({
  query: gql`
    {
      rates(currency: "USD") {
        currency
        name
        rate
      }
    }
  `
}).then(res => {
  console.log(res)
  data = res
})
export default data