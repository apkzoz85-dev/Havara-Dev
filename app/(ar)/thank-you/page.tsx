import ThankYou from "@/components/ThankYou";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("ar", "thank-you", { title: "شكرًا لك", noindex: true });

export default function Page() {
  return <ThankYou lang="ar" />;
}
