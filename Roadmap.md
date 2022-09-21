Back End:

[x] Set up MySQL database for cows
[x] Install express server and nodemon
[x] Hello World in express
[x] Sets up gitignore for node modules
[x] Set up express routes to get response from db
[x] Get route returns data from db
[x] POST route updates db
[x] Test routes using curl

Front End:
[ ] Install React, axios, webpack, babel
[ ] Set up webpack and babel using good config
[ ] Hello world in bundled React
[ ] Get static page to load from express

Features:
[ ] When the user loads the page, the user should see a list of all names of previously created cows (but not their descriptions)
[ ] When the user types the name and description of a new cow they want to input into the database and presses the submit button, the newly created cow's information should be displayed in the list from the previous step only after the data has been successfully written to the database
[ ] When the user clicks on the name of a cow, the name and description of that cow should be displayed prominently at the top of the page (so as to mimic the functionality of a modal/popup that shows the details of a particular cow)
  [ ] Only the details of the most recently clicked cow should be prominently displayed at the top of the page at a time. For example, if Betsy is the first cow clicked, Betsy's information should be displayed. If Milkshake is clicked afterwards, only Milkshake's information should be displayed. Betsy's description should no longer be visible.
  [ ] The details of any clicked cow should be prominently displayed in the same location in the DOM at the top of the page (aka not within the clicked component)