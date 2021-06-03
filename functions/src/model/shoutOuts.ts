import { ObjectId } from 'mongodb';

export default interface ShoutOuts {
    _id?: ObjectId;
    to: string;
    from: string;
    message: string;
  }



//   db.shoutouts.insertMany([
//     {to: "Beyonce", from: "The beyhive", message: "We love you!"},
//     {to: "Michael", from: "Dwight", message: "You're the best boss!"},
//     {to: "staples", from: "Jimmy Fallon", message: "Thank you paper clips for being like staples for people who can't commit"},
// ]);