import Head from "next/head";
import SearchBar from "../components/search/searchbar.js";
import AnswerIcon from "../components/answersheet/answericon.js";
import HelpIcon from "../components/helpicon.js";
import Header from "../components/header.js"
// import { getdata } from "../lib/getdata.js";
// import { connectToDatabase } from "../lib/api/mongodb.js";

export default function Home({ }) {

  return (
    <div>
      <Head>
        <title> 偵探游戲</title>
      
      </Head>
      <Header></Header>
      <SearchBar></SearchBar>
      <HelpIcon></HelpIcon>
      <AnswerIcon></AnswerIcon>
    </div>
  );
}
