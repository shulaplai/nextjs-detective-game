import { getMongodbQuestion } from "./mongodb";


export async function getMongodbAnswer(question) {
  // Use connect method to connect to the server
 getMongodbQuestion
  // the following code examples can be pasted here...
  
  const filteredDocs = await collection.find({ a: 3 }).toArray();
  console.log("Found documents filtered by { a: 3 } =>", filteredDocs);
  return "done.";
}