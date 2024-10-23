export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen white w-full">
      <h1
        className="opacity-0 animate-fade-in bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-center font-display text-5xl font-bold tracking-tight text-transparent drop-shadow-lg md:text-6xl md:leading-tight"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        Elevate Your Influence.
      </h1>
      <p className="mt-4 text-center text-lg text-gray-200 md:text-xl">
        Join us to enhance your social presence and connect with like-minded
        individuals.
      </p>
      <div className="mt-8 flex space-x-4"></div>
      <div className="mt-12">
        <button className="bg-white text-black px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
          Get Started
        </button>
      </div>
      <video
        autoPlay
        loop
        muted
        className="absolute -z-10 w-screen h-full overflow-hidden object-cover"
      >
        <source src="https://vibesquad.s3.amazonaws.com/assets/videos/vibe.mp4" type="video/mp4" />
        Please use latest browser to get the best experience
      </video>
    </div>
  );
}
