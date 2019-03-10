import Unsplash from 'unsplash-js';

// const Unsplash = require('unsplash-js').default;

const UnsplashClient = new Unsplash({
  applicationId: "799a71b9d2a0d422c3d0bd87340cbc749e515642bc99adfccb2d99b381bf47f1",
  secret: "6661c72f865fda902d6b5d0ebb0bb2d1ddf354ede34086e134fc027e9dcb25e1"
});

export default UnsplashClient;