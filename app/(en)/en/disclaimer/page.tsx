import LegalPage from "@/components/LegalPage";
import { disclaimerText } from "@/lib/legal";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("en", "disclaimer", { title: "Disclaimer" });

export default function Page() {
  return <LegalPage lang="en" slug="disclaimer" title="Disclaimer" paras={disclaimerText("en")} />;
}
