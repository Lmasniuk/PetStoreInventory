# PetStoreInventory
An Inventory System for a Pet Store chain!

## setting up for development
first, install [mongodb](http://docs.mongodb.org/manual/installation/)

then clone the repository and install dependencies

```
git clone https://github.com/Lmasniuk/PetStoreInventory.git
cd PetStoreInventory
npm install
```

next, seed the database:

`mongoimport --db petstore --collection items --file app/data/items.json`

then start the server

`npm start`

and open http://0.0.0.0:8000/ in your browser

## todo
* use _id instead of id
* implement add/remove
* create tests
