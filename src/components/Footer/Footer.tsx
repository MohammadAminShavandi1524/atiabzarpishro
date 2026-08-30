import FooterBottom from "./FooterBottom";
import FooterMain from "./FooterMain";

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-footer-foreground">
      <div className="w90">
        <FooterMain />
        <FooterBottom />
      </div>
    </footer>
  );
}
