import Footer from "../../components/Footer/Footer.js";
import ScrollUp from "../../components/ScrollUp/ScrollUp.js";
import LogIn from "../../components/LogIn/LogIn.js";
import Navbar from "../../components/Navbar/Navbar.js";

function LogInPage() {
  return (
    <>
    <Navbar />
      <main className="main">
        <LogIn />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}
export default LogInPage;
