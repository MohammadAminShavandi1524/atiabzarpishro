import FooterBottom from "./FooterBottom";

import FooterMain from "./FooterMain";

export default function Footer() {
  return (
    <footer className="text-footer-foreground bg-footer-bg">
      <div className="w90">
        {/* Main Footer */}
        <FooterMain />

        {/* Bottom */}
        <FooterBottom />
      </div>
    </footer>
  );
}
