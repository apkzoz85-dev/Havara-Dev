import Header from "@/components/Header";
import NuzulLanding from "@/components/NuzulLanding";
import Footer from "@/components/Footer";
import { nuzulMeta } from "@/lib/meta";
import { path } from "@/lib/site";

export const metadata = nuzulMeta("ar");

export default function Page() {
  return (
    <>
      <Header lang="ar" project="nuzul" altHref={path("en", "nuzul")} />
      <NuzulLanding lang="ar" />
      <Footer lang="ar" project="nuzul" />
    </>
  );
}
