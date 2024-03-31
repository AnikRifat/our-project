import Blog from "./components/Blog";
import CaseStudy from "./components/CaseStudy";
import Difference from "./components/Difference";
import Expertise from "./components/Expertise";
import FAQ from "./components/FAQ";
import FullOverview from "./components/FullOverview";
import Graph from "./components/Graph";
import HeroSection from "./components/HeroSection";
import OverviewItems from "./components/OverviewItems";
import Resources from "./components/Resources";
import StrategicStep from "./components/StrategicStep";
import Testimonial from "./components/Testimonial";
import TrustedPartners from "./components/TrustedPartners";
export default function Home() { return (
<div>
  <HeroSection />
  <TrustedPartners />
  <FullOverview />
  <Testimonial />
  <Expertise />
  <StrategicStep />
  <OverviewItems />
  <Graph />
  <Difference />
  <CaseStudy />
  <Blog />
  <Resources />
  <FAQ />
</div>

); }