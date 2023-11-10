import Footer from "../../components/Footer";
import Functions from "../../components/Functions";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Jobs from "../../components/Jobs";
import Socials from "../../components/Socials";
import styles from "./home.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  AOS.init();

  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <Functions />
      <Jobs />
      <Socials />
      <Footer />
    </div>
  );
};

export default Home;
