import ThankYou from "@/components/ThankYou";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("en", "thank-you", { title: "Thank You", noindex: true });

export default function Page() {
  return <ThankYou lang="en" />;
}
