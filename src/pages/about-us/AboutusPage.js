import SectionLayout from "../../components/layout/section/SectionLayout";
import FirstAboutSection from "./FirstAboutSection";
import Sponsors from "./Sponsors";

function AboutusPage() {
  return (
    <>
      <FirstAboutSection />
      <SectionLayout title="about atlas" dataaos="fade-up"></SectionLayout>
      <SectionLayout title="categories" dataaos="zoom-in"></SectionLayout>
      <SectionLayout title="sponsors" dataaos="slide-right">
        <Sponsors />
      </SectionLayout>
    </>
  );
}

export default AboutusPage;
