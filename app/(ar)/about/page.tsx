import LegalPage from "@/components/LegalPage";
import { aboutText } from "@/lib/legal";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("ar", "about", { title: "من نحن" });

export default function Page() {
  return <LegalPage lang="ar" slug="about" title="من نحن" paras={aboutText("ar")} />;
}
