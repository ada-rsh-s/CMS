var db = require("../config/connection");
var collections = require("../config/collections");
var ObjectId = require("mongodb").ObjectId;

module.exports = {
  addPerson: (personDetails) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.USER_DETAILS)
        .insertOne(personDetails)
        .then((details) => {
          console.log(details);
          resolve(details);
        });
    });
  },
  getDetails: () => {
    return new Promise(async (resolve, reject) => {
      let person = await db
        .get()
        .collection(collections.USER_DETAILS)
        .find()
        .toArray();
      resolve(person);
    });
  },
  deletePerson: (id) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collections.USER_DETAILS)
        .deleteOne({ _id: ObjectId(id) })
        .then((response) => {
          resolve(response);
        });
    });
  },
};
 