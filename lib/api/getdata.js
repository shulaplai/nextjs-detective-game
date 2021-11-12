import { connectToDatabase } from "./mongodb.js";


export async function getdata() {
  const { db } = await connectToDatabase();
  const question = await db.collection("question").toArray();
  return {
    props: {
      movies: JSON.parse(JSON.stringify(question)),
    },
  };
}
