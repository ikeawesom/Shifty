import Hero from "@/src/components/Hero";
import PageWrapper from "@/src/components/PageWrapper";

export default function Home() {
  return (
    <div className="min-h-svh w-full">
      <PageWrapper className="mt-20">
        <Hero />
      </PageWrapper>
    </div>
  );
}
