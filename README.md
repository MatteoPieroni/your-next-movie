# Your next movie!

This application uses the TMDb API to output the upcoming 20 movies in the UK.

See demo here: https://matteopieroni.com/your-next-movie

As a little exercise I tried to use some of the most recent technologies in front-end:
- React Hooks
- Styled Components
- Webpack
- Jest & Enzyme

## Build
To build this app you just need to:

1. Clone the repository
2. Run `yarn install`
3. Change your api key in the .env file
```
TMDB_API_KEY=insert-your-api-key 
```
4. Run `yarn build`
5. Your file will be in dist/index.html

## Test
To run the tests of this app you just need to:

1. Clone the repository
2. Run `yarn install`
3. Run `yarn test`

## Debug
To debug this app you just need to:

1. Clone the repository
2. Run `yarn install`
3. Run `yarn start`

## Observations

Some of the gotchas and observations that came out of this are:

- Enzyme is not fully ready for React Hooks yet, see the [testing of MovieList component](https://github.com/MatteoPieroni/your-next-movie/blob/master/src/components/__tests__/MovieList.test.js)
- You can do pretty cool stuff with Styled Components, see the [StarIcon implementation](https://github.com/MatteoPieroni/your-next-movie/blob/master/src/components/StarIcon.jsx) for the stars background colors
- Scrollbars have still to use JavaScript if you want proper support (that is no news, though)