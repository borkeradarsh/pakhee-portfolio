
import Main from "./components/main";
import Hero from "./components/hero";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}
