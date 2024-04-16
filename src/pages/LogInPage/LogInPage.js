import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ScrollUp from "../../components/ScrollUp/ScrollUp";
import LogIn from "../../components/LogIn/LogIn";

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
