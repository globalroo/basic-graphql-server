# jest-vanillajs-webpack [![Build Status](https://travis-ci.org/globalroo/jest-vanillajs-webpack.svg?branch=master)](https://travis-ci.org/globalroo/jest-vanillajs-webpack)[![codecov](https://codecov.io/gh/globalroo/jest-vanillajs-webpack/branch/master/graph/badge.svg)](https://codecov.io/gh/globalroo/jest-vanillajs-webpack)

> A bare bones GraphQL server

```sh
npm install yarn -g
yarn
yarn start or yarn test
```
## Brief description

- A Node GraphQL Express server
- Start the server with yarn start and open localhost:4000 in your browser.
- Experiment with GraphQL queries, an example is below and the types and available fields are visible in the Document Explorer
- Code coverage report located in _build/report

## Basic usage

```graphql
{
	aspect(aspect: "16x9") {
		title
		posterPath
	}
	video(id: 2) {
		title
		id
		title
		ratio
		relatedVideos {
			title
			posterPath
		}
	}
	videos(aspect: "2x3") {
		title
		ratio
	}
}
```
## Turtles all the way down usage

```graphql
{
  video(id: 1){
    title,
    synopsis,
    posterPath,
    releaseDate,
    relatedVideos {
      title,
      relatedVideos {
        title,
        relatedVideos {
          title
        }
      }
    }
  }
}
```

## Project developed using

- Node
- Express
- GraphQL
- Jest
- Babel Node
- ESLint
- VSCode

Images and meta data courtesy of https://www.themoviedb.org/
This product uses the TMDb API but is not endorsed or certified by TMDb.
![The Movie DB](https://github.com/globalroo/basic-graphql-server/312x276-primary-green.png)
