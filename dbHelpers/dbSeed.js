const db = require("./db.js")
const seeds = require("./seeder.js")

db.create(seeds, (err, seeds) => {
  if (err){
    console.log('err')
  } else {
  console.log("Seeded the database - - - - - - - - !!");
  }
})