import Footer from "../../components/Footer/Footer.js";
import Header from "../../components/Header/Header.js";
import ScrollUp from "../../components/ScrollUp/ScrollUp.js";
import LogIn from "../../components/LogIn/LogIn.js";

function LogInPage() {
  return (
    <>
      <Header />
      <main className="main">
        <LogIn />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}
export default LogInPage;
