# README

- Ruby version
  3.0.2

- Rails version
  7.0.4.3

* mysql database is being used

Add `database.yml` file in config folder of the project with database configuration, as per your system.
`cp config/database.yml.sample config/database.yml`
Add username and password value in datbase.yml

To setup the project run `bin/setup`
It install all the dependencies required for the project(bundle, db setup, yarn).

To run server `bin/dev`
You can hit `localhost:3000` to run the application on browser.

Letter opener is being used in development mode to view emails.
Emails can be viewed on browser on `http://localhost:3000/letter_opener`
