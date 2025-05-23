import { MongoClient } from "mongodb";
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);
let db;

async function connect() {
  if (!db) {
    await client.connect();
    db = client.db("musicdb");
  }
  return db;
}

// =========================
// Artists (1:n zu Songs)
// =========================

export async function getArtists() {
  const db = await connect();
  return db.collection("artists").find().toArray();
}

export async function getArtist(id) {
  const db = await connect();
  return db.collection("artists").findOne({ _id: Number(id) });
}

export async function createArtist(data) {
  const db = await connect();
  return db.collection("artists").insertOne(data);
}

export async function deleteArtist(id) {
  const db = await connect();
  return db.collection("artists").deleteOne({ _id: Number(id) });
}

export async function getRandomArtists(limit = 12) {
  const db = await connect();
  return db.collection("artists").aggregate([{ $sample: { size: limit } }]).toArray();
}

// =========================
// Songs (inkl. photo-Feld)
// =========================

export async function getSongs() {
  const db = await connect();
  return db.collection("songs").find().toArray();
}

export async function getSong(id) {
  const db = await connect();
  return db.collection("songs").findOne({ _id: Number(id) });
}

export async function createSong(data) {
  const db = await connect();
  return db.collection("songs").insertOne({
    _id: data._id,
    song_name: data.song_name,
    artist_id: data.artist_id,
    photo: data.photo || "noimage.jpg"
  });
}

export async function deleteSong(id) {
  const db = await connect();
  return db.collection("songs").deleteOne({ _id: Number(id) });
}

export async function getRandomSongsWithArtist(limit = 6) {
  const db = await connect();
  return db.collection("songs").aggregate([
    { $sample: { size: limit } },
    {
      $lookup: {
        from: "artists",
        localField: "artist_id",
        foreignField: "_id",
        as: "artist"
      }
    },
    { $unwind: "$artist" },
    {
      $addFields: {
        artist_name: "$artist.artist_name"
      }
    },
    {
      $project: {
        artist: 0
      }
    }
  ]).toArray();
}

export async function getSongsWithArtist() {
  const db = await connect();

  return db
    .collection('songs')
    .aggregate([
      {
        $lookup: {
          from: 'artists',            
          localField: 'artist_id',    
          foreignField: '_id',        
          as: 'artist'                
        }
      },
      { $unwind: { path: '$artist', preserveNullAndEmptyArrays: true } },
      {
        $addFields: {
          artist_name: '$artist.artist_name',
          artist_photo: '$artist.photo'   
        }
      },
      { $project: { artist: 0 } }    
    ])
    .toArray();
}