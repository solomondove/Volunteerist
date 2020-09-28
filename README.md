# Volunteerist
**by Solomon Dove, Elijah Dove, Camille Fogg, and Kevin Ross**

Have you ever wanted to give back to your community? Ever felt isolated or in need of assistance? Meet Volunteerist, an app for connecting people to local volunteer opportunities. Volunteerist provides a platform for both individuals and small organizations in need of help to staff events, find assistance, and connect with their neighbors.  Volunteerists are able to respond to these 'asks' by accepting and completing them as tasks. Volunteerists can also 'offer' their services to those in their local area, describing their skills or work they are willing to do. Upon completion, individuals build their number of community service hours and level up their profile while connecting to and building community.

Link to live site: 
https://volunteerist.herokuapp.com/#/

![demo-gif](https://github.com/solomondove/Volunteerist/blob/master/frontend/public/images/dirthands.jpg)

## Development

This is an app built with the MERN stack (MongoDB, Express, React, and Node.js). We incorporated Socket.IO and Google Maps to provide an interactive experience to our users. The main functionality of our webapp is displayed through the creation and completion of asks and offers. 

**Integrating Google Maps**

We used Google Maps both in the creation and displaying of asks and offers. We chose to use the Google Maps React package with the Maps Javascript and Geocoding APIs. The Geocoding API allowed us to find and select real addresses upon the creation of an ask or offer while the Maps Javascript allowed us to display the location of each on a custom map interface. By including the custom map interface as a central display in the app, we provided a more modern and interactive way to utilize the service. 

We ran into major issues when trying to protect our API key effectively. With Google Maps React, the API call originates in the presentational component within the frontend of the app, but the encoded environmental variables are set and live in the backend hosted on Heroku. In order to get the API key through to the component, we had to make a separate call to the database to retrieve the key and pass it to the frontend before the component had loaded. We ended up doing this by instantiating a cookie with the promise returned from the asynchronous axios call and then forcing a refresh of the page. This cookie was then used to load the API into the browser and display the map to our users. Although this isn’t the safest way to manage our API key in a true production website, it did keep our API key off of Github. In a more robust deployment of this app, more research must be done to ensure the safety of our credentials. In the code below, you can see where we check for the API key in the cookie, make the async call to the DB and pass the key to the Maps API call. 

```javascript
const mapKey = retrieveMapKey("mapKeyCookie");
if (mapKey === '') {
    getMapKey().then(key => {
        setMapCookie("mapKeyCookie", key.data, 1);
        window.location.reload();
    });
}
export default GoogleApiWrapper({apiKey: mapKey})(AskMap);
```

**Integrating Socket.IO**

For users to coordinate with each other in regards to the logistics of completing a certain ask or offer, it was determined that instant messaging should be implemented on each ask or offer’s show page. Socket.IO, a JavaScript library that allows for realtime communication between web clients and servers, was used to create this feature. By communicating between the frontend and backend through the use of emits, the webpage automatically re-renders for all users upon the event of a comment being posted. 

It was a challenge to allow a new comment to be saved to the database efficiently. While we did want to create a new comment object with every message received by the backend, we only wanted to patch the Object IDs into an array held under their respective ‘ask’ or ‘offer’ parents. Therefore, the Ask, Offer, and Comment schema all had to be used to write these routes. The route used to create a comment on an ask’s show page is held within app.js, and is shown below:

```javascript
app.post('/api/asks/:id/comments', (req, res) => {
    let comment = new Comment(req.body);
    comment.save().then(result => (
      Ask.findByIdAndUpdate(req.params.id, { "$push": { "comments": result._id } })
    )).catch(err => console.log(err))

    io.emit('message', req.body);
    res.sendStatus(200);
})
```

## Future Work

Further features we have considered are: 

1. Profile pictures
2. Friending other users
3. Following other users, asks, and offers
4. Feed for posts
5. User rankings
6. Completed ask/offer history
