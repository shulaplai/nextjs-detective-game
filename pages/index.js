import Head from "next/head";
import SearchBar from "../components/search/searchbar.js";
import AnswerIcon from "../components/answersheet/answericon.js";
import Explain from "../components/explain.js"
import HelpIcon from "../components/helpicon.js";
import { connectToDatabase } from "../util/mongodb";

export default function Home({}) {
  return (
    <div>
      <Head></Head>        

      <SearchBar></SearchBar>
      <Explain></Explain>
     
        <HelpIcon></HelpIcon><AnswerIcon></AnswerIcon>
    </div>
  );
}


export async function getStaticProps() {
  const { db } = await connectToDatabase();
  const movies = await db
    .collection("movies")
    .find({})
    .sort({ metacritic: -1 })
    .limit(1000)
    .toArray();
  return {
    props: {
      movies: JSON.parse(JSON.stringify(movies)),
    },
  };
}