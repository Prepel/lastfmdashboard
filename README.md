# lastfmdashboard
A simple dashboard to monitor up to 4 users of last.fm and the songs they listen to.

# setup
Create an account at https://www.last.fm/api and put your api key and api secret into config.js (copy dist file)
Fill in the users you want to monitor (maximum of 4) in the config.js file as well.

Run `npm install` to install all the needed dependencies for this project.
After you've installed the dependecies you can run `gulp` from the command line to start build the javascript and css files. This also automaticly opens the project in your browser with browser-sync and auto refreshes the page when changes are detected. Watchers are included to auto generate js and css files when changes are detected.
