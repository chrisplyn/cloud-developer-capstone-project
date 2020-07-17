// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'yf7pv6gehi'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/prod`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-bz4mmv52.us.auth0.com', // Auth0 domain
  clientId: 'nZAGT2PV3ANgezk2G3lUSCEcXbGRVpp8',          // Auth0 client id
  callbackUrl: `${window.location.origin}/callback`
}
