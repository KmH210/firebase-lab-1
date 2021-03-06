import * as functions from "firebase-functions";
import express from 'express';
import cors from 'cors';
import {getClient} from '../db';
import ShoutOuts from "../model/shoutOuts";



// creates an Express application - allows us to create and and use APIs
const app = express();

// Enable CORS so that this can be used from web-apps on other domains.
app.use(cors());

// Allow JSON request bodies for PUT and POST
app.use(express.json());

app.get("/", async (req, res) => {
    try {
      const client = await getClient();
      const results = await client.db().collection<ShoutOuts>('shoutouts').find().toArray();
      res.json(results); // send JSON results
    } catch (err) {
      console.error("FAIL", err);
      res.status(500).json({message: "Internal Server Error"});
    }
  });

  app.post( "/", async ( req, res ) => {
    const shout = req.body as ShoutOuts;
    try {
        const client = await getClient();
        const result = await client.db().collection<ShoutOuts>( 'shoutouts' ).insertOne( shout );
        shout._id = result.insertedId;
        res.status( 201 ).json( shout );
    } catch ( err ) {
        console.error( "FAIL", err );
        res.status( 500 ).json( { message: "Internal Server Error" } );
    }
} );

export default functions.https.onRequest(app);