import FooterBottom from "./FooterBottom";
import FooterFeatures from "./FooterFeatures";
import FooterMain from "./FooterMain";

export default function Footer() {
  return (
    <footer className="text-footer-foreground bg-footer-bg">
      <div className="w90">
        {/* Features */}
        {/* <FooterFeatures /> */}

        {/* Main Footer */}
        <FooterMain />

        {/* Bottom */}
        <FooterBottom />
      </div>
    </footer>
  );
}
