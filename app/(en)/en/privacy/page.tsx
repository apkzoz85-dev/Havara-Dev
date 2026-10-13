import LegalPage from "@/components/LegalPage";
import { privacyText } from "@/lib/legal";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("en", "privacy", { title: "Privacy Policy" });

export default function Page() {
  return <LegalPage lang="en" slug="privacy" title="Privacy Policy" paras={privacyText("en")} />;
}
