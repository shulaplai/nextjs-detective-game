import Head from "next/head";
import SearchBar from "../components/search/searchbar.js";
import AnswerIcon from "../components/answersheet/answericon.js";
import Explain from "../components/explain.js"
import HelpIcon from "../components/helpicon.js";
import { connectToDatabase } from "./api/mongodb.js";

export default function Home({}) {
  return (
    <div>
      <Head></Head>

      <SearchBar></SearchBar>
      <Explain></Explain>
      {question.map((movie) => (
        <li>
          <h2>{question.question}</h2>
          <h3>{movie.answer}</h3>
        </li>
      ))}
      <HelpIcon></HelpIcon>
      <AnswerIcon></AnswerIcon>
    </div>
  );
}


export async function getStaticProps() {
  const { db } = await connectToDatabase();
  const question = await db
    .collection("question")
    .find({})
    .toArray();
  return {
    props: {
      movies: JSON.parse(JSON.stringify(question)),
    },
  };
}