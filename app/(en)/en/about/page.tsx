import LegalPage from "@/components/LegalPage";
import { aboutText } from "@/lib/legal";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("en", "about", { title: "About Us" });

export default function Page() {
  return <LegalPage lang="en" slug="about" title="About Us" paras={aboutText("en")} />;
}
