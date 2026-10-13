import LegalPage from "@/components/LegalPage";
import { disclaimerText } from "@/lib/legal";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("ar", "disclaimer", { title: "إخلاء المسؤولية" });

export default function Page() {
  return <LegalPage lang="ar" slug="disclaimer" title="إخلاء المسؤولية" paras={disclaimerText("ar")} />;
}
