import BlurIn from "@/components/magicui/blur-in";
import ShimmerButton from "@/components/magicui/shimmer-button";
import Safari from "@/components/magicui/safari";
import BentoDemo from "@/components/bento-grid";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <ShimmerButton>Hello World</ShimmerButton>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Safari url="notifynow.io" className="size-full" />
        <BlurIn word={"Hello World"}></BlurIn>
        <BentoDemo />
      </main>
    </div>
  );
}
