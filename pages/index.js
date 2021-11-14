import Head from "next/head";
import SearchBar from "../components/search/searchbar.js";
import AnswerIcon from "../components/answersheet/answericon.js";
import HelpIcon from "../components/helpicon.js";
// import { getdata } from "../lib/getdata.js";
// import { connectToDatabase } from "../lib/api/mongodb.js";

export default function Home({ }) {

  return (
    <div>
      <Head></Head>
      <SearchBar></SearchBar>

      <HelpIcon></HelpIcon>
      <AnswerIcon></AnswerIcon>
    </div>
  );
}
