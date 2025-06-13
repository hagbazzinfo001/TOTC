import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Body from "../components/Body";
import { useAuthGuard } from "../hooks/useAuthGuard";

function Home() {
  useAuthGuard();
  return (
    <div>
      <Nav />
      <Body />
      <Footer />
    </div>
  );
}

export default Home;
