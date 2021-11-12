import Head from "next/head";
import SearchBar from "../components/search/searchbar.js";
import AnswerIcon from "../components/answersheet/answericon.js";
import Explain from "../components/explain.js";
import HelpIcon from "../components/helpicon.js";
// import { getdata } from "../lib/getdata.js";
import { connectToDatabase } from "../lib/api/mongodb.js";

export default function Home({ question }) {
  return (
    <div>
      <Head></Head>
      <SearchBar></SearchBar>
      <Explain></Explain>
      {question.map((question) => (
        <li>
          <h2>{question.question}dsdfdsfdsf</h2>
          <h3>{question.answer}fsfesfesfes</h3>
        </li>
      ))}
      <HelpIcon></HelpIcon>
      <AnswerIcon></AnswerIcon>
    </div>
  );
}

export async function getStaticProps(req,res) {
  const { db } = await connectToDatabase();
  const question = await db
    .collection("question")
    .find({})
    .toArray();
  return {
    props: {
      question: JSON.parse(JSON.stringify(question)),
    },
  };
}
