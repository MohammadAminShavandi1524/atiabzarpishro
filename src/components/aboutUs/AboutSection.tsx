import AboutCEO from "./AboutCEO";
import AboutEngagement from "./AboutEngagement";
import AboutFeatures from "./AboutFeatures";
import AboutHero from "./AboutHero";
import AboutPurpose from "./AboutPurpose";
import AboutTeam from "./AboutTeam";

export default function AboutSection() {
  return (
    <div className="bg-background">
      <AboutHero />

      <div className="pt-16">
        <AboutFeatures />
      </div>

      <AboutPurpose />

      <AboutEngagement />

      <AboutCEO />

      <AboutTeam />
    </div>
  );
}
