import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Footer from "@/components/Footer";
import { pageMeta } from "@/lib/meta";
import { path } from "@/lib/site";

export const metadata = pageMeta("ar");

export default function Page() {
  return (
    <>
      <Header lang="ar" altHref={path("en")} />
      <Landing lang="ar" />
      <Footer lang="ar" />
    </>
  );
}
