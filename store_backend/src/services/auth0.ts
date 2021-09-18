import jwt from 'express-jwt';
import jwks from 'jwks-rsa';

const jwtCheck = jwt({
secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-35p-vy7k.us.auth0.com/.well-known/jwks.json'
  }),
  audience: process.env.AUTH_AUDIENCE,
  algorithms: ['RS256']
});

export default jwtCheck;