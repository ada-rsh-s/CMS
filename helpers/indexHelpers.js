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
      console.log(id);
      db.get()
        .collection(collections.USER_DETAILS)
        .deleteOne({ _id: ObjectId(id) })
        .then((response) => {
          resolve(response);
        });
    });
  },
  getPerson: (id) => {
    return new Promise(async (resolve, reject) => {
      let person = await db
        .get()
        .collection(collections.USER_DETAILS)
        .findOne({_id:ObjectId(id)})
      resolve(person);
    });
  },
  editPerson: (id, personDetails) => {
    return new Promise((resolve, reject) => {
      console.log(id,personDetails);
      db.get()
        .collection(collections.USER_DETAILS)
        .updateOne(
          { _id: ObjectId(id) },
          {
            $set: {
              name: personDetails.name,
              email: personDetails.email,
              phone: personDetails.phone,
            },
          }
        )
        .then((response) => {
          console.log(response);
          resolve();
        });
    });
  },
};
 