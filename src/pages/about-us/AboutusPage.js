import SectionLayout from "../../components/layout/section/SectionLayout";
import FirstAboutSection from "./FirstAboutSection";

function AboutusPage() {
  return (
    <>
      <FirstAboutSection />
      <SectionLayout title="about atlas" dataaos="fade-up"></SectionLayout>
      <SectionLayout title="categories" dataaos="zoom-in"></SectionLayout>
      <SectionLayout title="sponsors" dataaos="flip-up"></SectionLayout>
    </>
  );
}

export default AboutusPage;
