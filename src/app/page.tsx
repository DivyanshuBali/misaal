import BottomNav from "@/components/BottomNav/BottomNav";
import IntroAnimation from "./components/IntroAnimation/IntroAnimation";

export default function Home() {
  return (
    <>
      <IntroAnimation>
        <main></main>
        <BottomNav />
      </IntroAnimation>
    </>
  );
}
