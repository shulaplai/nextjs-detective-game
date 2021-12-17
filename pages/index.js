import Head from "next/head";
import Layout from "../components/layout.js";
// import AnswerIcon from "../components/answersheet/answericon.js";
// import HelpIcon from "../components/helpicon.js";
// import Header from "../components/header.js"
// import { getdata } from "../lib/getdata.js";
// import { connectToDatabase } from "../lib/api/mongodb.js";

export default function Home({ }) {

  return (
    <div className="">
      <Head>
        <script src="https://cdn.tailwindcss.com"></script>

        <title> 偵探游戲</title>
      </Head>
      <Layout></Layout>
    </div>
  );
}
