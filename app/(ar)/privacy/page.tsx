import LegalPage from "@/components/LegalPage";
import { privacyText } from "@/lib/legal";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("ar", "privacy", { title: "سياسة الخصوصية" });

export default function Page() {
  return <LegalPage lang="ar" slug="privacy" title="سياسة الخصوصية" paras={privacyText("ar")} />;
}
