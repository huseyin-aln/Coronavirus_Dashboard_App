<h1 align="center">Coronavirus Dashboard App</h1>

<div align="center">
  <h3>
    <a href="https://coronavirus-dashboard-app.netlify.app/">
      Coronavirus Dashboard App
    </a>
 
  </h3>
</div>


<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
- [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

<!-- OVERVIEW -->

## Overview

![Coronavirus-Dashboard-App](https://user-images.githubusercontent.com/101873227/196030704-48ed0a75-cbea-467c-8401-b5a79925ca34.gif)


### Built With

- HTML
- CSS
- JS
- REACT

## Features

The data taken from the api was used by transferring it to the global state with the redux toolkit.

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) 
```bash
# Clone this repository
$ git clone https://https://github.com/huseyin-aln/Coronavirus_Dashboard_App

# Install dependencies
   "@reduxjs/toolkit": "^1.8.6",
    "@svg-maps/world": "^1.0.1",
    "axios": "^1.1.2",
    "bootstrap": "^5.2.2",
    "cypress": "^10.10.0",
    "fusioncharts": "^3.19.0",
    "moment": "^2.29.4",
    "react": "^18.2.0",
    "react-bootstrap": "^2.5.0",
    "react-dom": "^18.2.0",
    "react-fusioncharts": "^4.0.0",
    "react-icons": "^4.4.0",
    "react-redux": "^8.0.4",
    "react-router-dom": "^6.4.2",
    "react-svg-map": "^2.2.0",
    "react-toastify": "^9.0.8",
    "redux": "^4.2.0",
```

## Acknowledgements
- This project is built using React and "rapidapi.com/KishCom/api/covid-19-coronavirus-statistics/" API.
- When the relevant country is clicked on a world map, the number of confirmed cases of covid 19, the number of deaths and recoveries, and the updated date 
information for the relevant country are displayed on another page.
- The name of the relevant country is entered into the input on the main page, and the data of that country comes on a different page.
- Loader is used in waiting for data from API.
- In cases where the relevant country data cannot be obtained from the API, the user is informed.
- Some unit tests have been written for Navbar and Footer components using the cypress library.
- Responsive design is provided on the compatibility side.

## Contact

- GitHub [@huseyin-aln](https://{github.com/huseyin-aln})

- Linkedin [@hüseyin-arslan444](https://{linkedin.com/hüseyin-arslan444})
