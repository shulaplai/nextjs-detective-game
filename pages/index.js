import Head from "next/head";
import SearchBar from "../components/searchbar.js";
import AnswerIcon from "../components/answericon.js";
import Explain from "../components/explain.js"
import HelpIcon from "../components/helpicon.js";
export default function Home({}) {
  return (
    <div className="w-screen h-full">
      <Head></Head>
      <SearchBar></SearchBar>
      <Explain></Explain>
      <div className="justify-center content-center	 w-screen		">
        <AnswerIcon></AnswerIcon>
        <HelpIcon></HelpIcon>
      </div>
    </div>
  );
}
