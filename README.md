#INFO

TheWatcher is a web app that will help you to manage your movies "wish list". From now on, you will never forget what film or TV show you'd like to see in future! It has variety of features, including:

  - searchin movies in TheMovieDatabase (via API),
  - adding movies to you dahsboard and external DB,
  - remove movie from DB or restore it to dashboard,
  - displaying basic information about movie,
  - your own rating,
  - list of movies that you watched,
  - alert messages,
  - landing page
  
The app was designed and coded by myself as an excersice in using front-end framework Vue.js
TheWatcher's backend is built on FireBase database which stores information about added movies. It also uses libraries like 
Vue Router to ensure the best possible user experience. I also added some transitions and effects to make the app look modern
and user friendly.

The main goal was to keep the app as simple as possible, nonetheless in future I plan to add some more features like:

  - user authentication system,
  - advanced searching in TMDb,
  - better mobile experience


#USAGE 

To use TheWatcher's main feature, click on the button 'Add Movie'. You will now see input form where you can simply input the
movie title and year* then click on 'Search' button. After this setp you should see the full movie title, year and description filled 
in the input fields. You can now adjust the description as you like and ff everything fits what was on your mind - just click 'Submit' and then you can go to the main dashboard by clicking 'Home' button or the link in alert message that appeared over the input form.

*Please note that due to the TMDb limitations it is highly recommended to fill in title AND year of the movie before clicking 'Search' 
in order to find the correct movie (some movies may have the same title, but using the year input field will prevent you from
having incorrect input).


If you have any questions or suggestions, please let me know! ;)












## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
