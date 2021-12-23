import SearchBar from "../components/search/searchbar.js";
// import AnswerIcon from "../components/answersheet/answericon.js";
// import HelpIcon from "../components/helpicon.js";
import Header from "../components/header.js";
import Footer from "../components/footer.js"
// import { getdata } from "../lib/getdata.js";
// import { connectToDatabase } from "../lib/api/mongodb.js";

export default function Layout({}) {
  return (
    <div className="	bg-slate-400		">
      <Header></Header>
      <SearchBar></SearchBar>
      {/* <HelpIcon></HelpIcon>
      <AnswerIcon></AnswerIcon> */}
      <Footer></Footer>
    </div>
  );
}
