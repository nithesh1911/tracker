import Slider from "./slider";
import Header from "./header";

export default function Home() {
  return (
    <div>
      <title>DAILY ROUTINE</title>
      <Header />
      <div className="bg-blue-600 lg:w-full lg:h-full sm:w-screen sm:h-screen md:w-screen md:h-screen h-screen w-screen">
        <Slider />
      </div>
    </div>
  );
}
