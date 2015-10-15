# PetStoreInventory
An Inventory System for a Pet Store chain!

## setting up for development
```
git clone https://github.com/Lmasniuk/PetStoreInventory.git
cd PetStoreInventory
npm install
npm start
open http://0.0.0.0:8000/
```

the mongodb connection string gets read from an environment variable. If you have the [heroku toolbelt](https://toolbelt.heroku.com/) set up, you can run:
```
heroku config:get MONGOLAB_URI -s >> .env
```

another way of starting the server instead of `npm start` is to use `heroku local`. more info [here](https://devcenter.heroku.com/articles/heroku-local)

## deploying
add the heroku remote repository:
```
git remote add heroku https://git.heroku.com/petstore-inventory.git
```

when you want to deploy, commit your changes and run:
```
git push -f heroku <YOUR_BRANCH>:master
```

## testing
```
npm test
```

## todo
* implement add/remove
