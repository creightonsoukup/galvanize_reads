# Galvanize Reads

Galvanize reads is a book catalog service that stores a list of recommended technology books. It allows you to:

* List books and authors
* Add books and authors
* Modify books and authors
* Remove books and authors

## Development

* Clone this repo and run npm start.
* Set up a local postgresql database
* Configure a `.env` file - use the `.env.example` file as a guideline
* `npm install` dependencies
* Run `knex migrate:latest` to setup database
* Run `knex seed:run` to add sample data
* Run `npm start` to see it running locally


##Production
* Set `DATABASE_URL` to your remote connection
* Run `knex migrate:latest --env production` to setup database
* Run `knex seed:run --env production` to add sample data
