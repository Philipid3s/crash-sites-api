My goal is to create a web api to access my records in db (crash sites).

I've built this api with [Express](https://expressjs.com/) - a minimalist web framework for Node.js. I will only implement two routes: 
- the first one will list all crash sites ([api/v1/crashes](https://crash-sites-api.herokuapp.com/api/v1/crashes)).
- the second will show all sites close to a specific location ([/api/v1/crashes/:longitude/:latitude/:km](https://crash-sites-api.herokuapp.com/api/v1/crashes/51/10/100)). 3 parameters: longitude, latitude, and radius.

The access to my mongodb environment is managed again by [mongoose](https://mongoosejs.com/) - the best mongodb api framework.

As usual, my api is deployed on [heroku](https://www.heroku.com).