
import Hero from "./comnents/hero";
import RiwayatPendidikan from "./comnents/riwayatpendidikan";
import RiwayatPekerjaan from "./comnents/riwayatpekerjaan";
import "./insho-style.css";
import FavColor from "./comnents/favColor";
import SkillsSection from "./comnents/skill";
import ContactPage from "./comnents/contact";
import MyGallery from "./comnents/hobi";
import WarnaFavorit from "./comnents/tema";
import PersonalInfoSection from "./comnents/data";
 export default function MyApp() {
  return(
    <section>
      <Hero />
      <PersonalInfoSection />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <SkillsSection />
      <ContactPage />
      <MyGallery />
      <FavColor/>
      <WarnaFavorit />
      {/* <Color setWarna={setWarna} /> */}

    </section>
  );
}