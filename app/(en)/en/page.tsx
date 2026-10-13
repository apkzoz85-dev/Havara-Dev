import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Footer from "@/components/Footer";
import { pageMeta } from "@/lib/meta";
import { path } from "@/lib/site";

export const metadata = pageMeta("en");

export default function Page() {
  return (
    <>
      <Header lang="en" altHref={path("ar")} />
      <Landing lang="en" />
      <Footer lang="en" />
    </>
  );
}
