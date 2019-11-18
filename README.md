[![Netlify Status](https://api.netlify.com/api/v1/badges/fe97a167-7b62-448d-b8c7-ba17dbeec8ab/deploy-status)](https://app.netlify.com/sites/nervous-sammet-d06195/deploys) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/7bcdac07cd244b4485f615b529370f98)](https://www.codacy.com?utm_source=github.com&utm_medium=referral&utm_content=alexanderwassbjer/neva-react-app&utm_campaign=Badge_Grade)

# neva-react-app

Neva Fastighets AB. React-App<br />
Developed by: [alexanderwassbjer](https://github.com/alexanderwassbjer)<br />
Copyright - Neva Fastighets AB.

## Install app development dependencies

`yarn build`<br />
Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

## Run server

`yarn start`<br />
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Contentful

To collect all the data you need to create a `.env.development` file in the project folder.<br />
The environment variables are found on Netlify.

## Base-Structure

| File                   |                                                                                                               Function |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------: |
| Contentful.js          |                                      Where the contentful client is located. Also where the env variables are imported |
| PropertyContext.js     | Used for collecting data from contentful, then mapping it out and last but not least to send the data to the Container |
| SingleProperty.js      |                                                                              The page for displaying a single property |
| Property.js            |                                                                      Used for displaying the single property in a grid |
| PropertiesContainer.js |                               Used for collecting all the properties from PropertyContext.js and then display the list |
| PropertiesList.js      |                                                                          Used for displaying the property in a listing |
| StyledHero.js          |                                                 StyledHero is used for dynamically show a header with background-image |
| Hero.js                |                                                           Hero is used for displaying a header with a background-image |
| Banner.js              |                                                                  Banner is used for displaying a title for the Hero.js |
