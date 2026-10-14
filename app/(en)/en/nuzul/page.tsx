import Header from "@/components/Header";
import NuzulLanding from "@/components/NuzulLanding";
import Footer from "@/components/Footer";
import { nuzulMeta } from "@/lib/meta";
import { path } from "@/lib/site";

export const metadata = nuzulMeta("en");

export default function Page() {
  return (
    <>
      <Header lang="en" project="nuzul" altHref={path("ar", "nuzul")} />
      <NuzulLanding lang="en" />
      <Footer lang="en" project="nuzul" />
    </>
  );
}
