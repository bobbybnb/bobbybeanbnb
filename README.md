# The Github Pages fork of this project
## Why?
Being serverless is cool

## APIs for locators
- This grabs it from the source itself (Highly accurate). https://otgqnsn74l.execute-api.us-east-1.amazonaws.com/prod/Locator
- This grabs from a stored database (foursquare pushes don't always go through though). https://itinerantfoodie.com/api/whereat?userid=534f39f0c13a940200b57701

## Moment.js stuff
```javascript
  var friendlyTime = moment.unix(1456505139).fromNow();
```


## Updating this branch

### Cloning
```bash
git clone -b gh-pages git@github.com:nolim1t/btdotjs.git
```

## Testing
```bash
jekyll serve
```
