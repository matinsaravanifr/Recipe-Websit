import heroimage from "./../../assets/gettyimages-1215565658.jpg";
import nodelPic from "./../../assets/circular_spaghetti.png";

export default function HeroSection() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center relative opacity-90 flex flex-col items-center px-4"
      style={{ backgroundImage: `url(${heroimage})` }}
    >
      <h1 className="font-bold text-white text-3xl md:text-4xl text-center mt-5">
        Welcome to the World of Flavors!🍔
      </h1>
      <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row justify-between items-center mt-10 gap-6">
        <h1 className="font-medium text-white text-center md:text-left md:w-1/2 text-sm sm:text-base md:text-lg leading-relaxed">
          Discover thousands of delicious and authentic recipes from every
          corner of the globe, bringing the world’s flavors right to your
          kitchen. Whether you're a beginner or a seasoned chef, explore
          easy-to-follow instructions, mouth-watering dishes, and culinary
          inspiration that will transform your cooking experience. Start your
          flavorful journey today and make every meal unforgettable!
        </h1>
        <img
          className="w-40 sm:w-56 md:w-72 animate-wiggle"
          src={nodelPic}
          alt="nodel"
        />
      </div>
    </div>
  );
}
