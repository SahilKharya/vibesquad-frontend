export default function Partners() {
  return (
    <>
      <div className="flex relative py-16 bg-white w-full">
        <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-56">
          <div className="m-auto text-center lg:w-10/12">
            <h2 className="text-2xl text-gray-700 font-bold md:text-4xl">
              Turn your influence into collaborations with 70+ Global Brands
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center justify-center">
            <div className="p-4">
              <img
                src="/brands/nike.png"
                className=""
                alt="Nike"
              />
            </div>
            <div className="p-4">
              <img
                src="/brands/cocacola.png"
                className="w-32 "
                alt="CocaCola"
              />
            </div>
            <div className="p-4">
              <img
                src="/brands/loreal.svg"
                className="w-32 "
                alt="L Oreal"
              />
            </div>
            <div className="p-4">
              <img
                src="/brands/starbucks.png"
                className="w-32 "
                alt="Starbucks"
              />
            </div>
            <div className="p-4">
              <img
                src="/brands/ford.svg"
                className="w-32"
                alt="Ford"
              />
            </div>
            <div className="p-4">
              <img
                src="/brands/chanel.png"
                className="w-32"
                alt="Chanel"
              />
            </div>
            <div className="p-4">
              <img
                src="/brands/lays.png"
                className="w-32"
                alt="Lays"
              />
            </div>
            <div className="p-4">
              <img
                src="/brands/hm.png"
                className="w-32"
                alt="HM"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
