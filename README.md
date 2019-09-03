##Movie-Sagas

A movie inventory browser which allows users to click on a movie shown, and be taken to a page with more details and the ability to edit the movie's title / description.

##Built With

NodeJS, 
React, 
React-Redux, 
Redux-Sagas, 
Material-UI, 
PostgresSQL,

##Getting Started

These instructions will help you to a copy of the project, set it up and have it running on your local machine for development and testing purposes.

##Prerequisites

Before you get started, make sure you have the following software installed on your computer:

Node.js
PostrgeSQL
Nodemon
express

##Installing

##Download the zip of this project
Create your SQL database and tables using the provided database.sql code
npm install
npm run server
npm run client

##Completed Features

 Home page with photos per movie along with a list of movies
 Details page that shows the further details on movie selected
 Edit page that allows the user to edit the description or title as it will also show its updated in the database

##Next Steps

 Allow users to edit genres add their own to help with classification
 Allow filtering on home page to show certain genres or movies from that genre
 Allow users to add or remove movies from database to build their collection digitally inventoried

##Authors

Miles Lacek



# React-Redux with Sagas

> **PLEASE COMMENT YOUR CODE.** Do not clone this repository. Instead, download the zip, extract the contents, `git init`, `git add .`, `git commit -m "initial commit - base project"` and add your remote. Please do this before you leave for the day.

For this weekend challenge you'll be building a movie application!
We'll be able to see movies that exist in our DB. We'll also be able to see detailed view for each individual movie, including genres associated with that movie. We'll also be able to edit our movie's information.

## Video Wireframe

[video ![Home Wireframe](/wireframes/home-wireframe.png)](https://vimeo.com/343530927)

## Database Setup

1. Create a database named `saga_movies_weekend` CHECK
2. Run the queries from `database.sql` on the `saga_movies_weekend` database. CHECK
3. You will need to create the junction table between the `movies` and `genres` tables! CHECK 

## Install Dependencies

1. `npm install` CHECK 
2. `npm run server` CHECK 
3. `npm run client` CHECK 

## Notes

### Genres
We've given you some starter genres in the database. Feel free to change or add some with Postico.
 
### Movies
We've added some movie posters in the `public/images` folder, and the database is set up to use them.

### Relationships
Genres can be applied to many different movies. Movies can have multiple genres. This is Many-to-Many! Junction Table time! CHECK 

## Feature List

> NOTE: Start by taking inventory of the existing code. Part of the work for setting up sagas has been done for you.

### Home / List Page

This should display all of the movies in the movie database. When a movie poster is clicked, a user should be brought to the `/details` view. 

CHECK BUT WANT TO COME BACK TO THIS AND GET THE IMAGES ONLY TO APPEAR ON THE HOME PAGE NOT THE ENTIRE MOVIE ITEM.

### Details Page

This should show all details **including genres**, for the selected movie. CHECK

The details page should have the buttons:

- `Back to List` button, which should bring the user to the Home Page CHECK HOME BUTTON
- `Edit` button, which should bring the user to the Edit Page CHECK DETAILS - EDIT BUTTON-to-EDIT PAGE

> Base functionality does not require the movie details to load correctly after refresh of the browser.

### Edit Page

This should show:

- an input field (for changing the movie title), for the selected movie. CHECK Material UI 
- a textarea (for changing the movie description) CHECK Material UI

The details page should have the buttons:

- `Cancel` button, which should bring the user to the Details Page CHECK 
- `Save` button, which should update the title and description in the database and bring the user to the Details Page CHECK / SUBMIT

> Base functionality does not require the current values (the existing movie title and description) to populate in the input and textarea.

> Base functionality does not require the movie information to load correctly after refresh of the browser.

### General Tasks

As one of your last projects, it's possible you will be sharing this with employers, so be sure to follow best practices and make it look good!

- [ ] Invest some time in styling it up!
    - [ ] Research grids for you movie posters on the Move List page
    - [ ] Add route change animations
- [ ] Commit your code frequently! You should have at 15+ commits on a project of this size. Use branches to help break down your features.
- [ ] Comment your code.
- [ ] Update this README to include a description of the project in your own words.

## Stretch Goals

- [ ] Display the current values in the input (title) and textarea (description) on the Edit Page
- [ ] Display all genres on movie list page. Research [array_agg](https://stackoverflow.com/questions/43458174/how-to-save-and-return-javascript-object-with-subarray-in-normalized-sql) to make this possible.
- [ ] Move sagas and reducers out of your `index.js` and into separate files (ideally in `src/redux/reducers` and `src/redux/sagas` folders).
- [ ] Allow the user to refresh the details or edit page. The url for the details page would be something like `/details/1` for movie with id of `1`. Research [react router params](https://reacttraining.com/react-router/web/example/url-params).
- [ ] Allow the user to add a genre to a movie.
- [ ] Allow the user to remove a genre from a movie.
- [ ] Only display the top 10 movies, and allow the user to search for movie titles with a search bar on the home page (you can do this on the client side or the server side, server side is a bigger stretch, but good practice).
- [ ] Create an `Admin` page. Add a link from the `Home` page to the `Admin` page. The page should initially display a login form (an input for username and an input for password). When the user enters the correct username (`camera`) and password (`action`), the page should display a form to add genres to the database, and a list of all of the genres with an `x` to remove them from the database. Note: This isn't actually secure, but it's pretty fun, and really good practice.
