import "./App.css";
import sedan from "./icon-sedans.svg";
import suv from "./icon-suvs.svg";
import luxury from "./icon-luxury.svg";

function App() {
  return (
    <>
      <div className="my-20 md:my-0 md:grid md:h-screen items-center justify-items-center">
        <div className="flex md:flex-row flex-col w-5/6 h-[47%]">
          <div className="bg-brightOrange flex flex-col rounded-t-lg md:rounded-none md:rounded-l-lg items-start p-10">
            <div>
              <img src={sedan} alt="Sedan" className="w-12" />
              <h2 className="text-veryLightGray font-bigShoulders font-bold my-6 text-3xl">
                SEDANS
              </h2>
              <p className="text-transparentWhite text-left">
                Choose a sedan for its affordability and excellent fuel economy.
                Ideal for cruising in the city or on your next road trip.
              </p>
            </div>
            <div className="bg-white py-2 px-5 group rounded-full mt-10 md:mt-20 cursor-pointer hover:border-2 horver:border-veryLightGray hover:bg-brightOrange">
              <p className="text-brightOrange group-hover:text-white font-semibold text-sm">
                Learn More
              </p>
            </div>
          </div>
          <div className="bg-darkCyan flex flex-col items-start p-10">
            <div>
              <img src={suv} alt="Sedan" className="w-12" />
              <h2 className="text-veryLightGray font-bigShoulders font-bold my-6 text-3xl">
                SUVS
              </h2>
              <p className="text-transparentWhite text-left">
                Choose a sedan for its affordability and excellent fuel economy.
                Ideal for cruising in the city or on your next road trip.
              </p>
            </div>
            <div className="bg-white py-2 group px-5 rounded-full mt-10 md:mt-20 cursor-pointer hover:border-2 horver:border-veryLightGray hover:bg-darkCyan">
              <p className="text-darkCyan group-hover:text-white font-semibold text-sm">
                Learn More
              </p>
            </div>
          </div>
          <div className="bg-veryDarkCyan flex flex-col rounded-b-lg md:rounded-none md:rounded-r-lg items-start p-10">
            <div>
              <img src={luxury} alt="Sedan" className="w-12" />
              <h2 className="text-veryLightGray font-bigShoulders font-bold my-6 text-3xl">
                LUXURY
              </h2>
              <p className="text-transparentWhite text-left">
                Choose a sedan for its affordability and excellent fuel economy.
                Ideal for cruising in the city or on your next road trip.
              </p>
            </div>
            <div className="bg-white py-2 px-5 group rounded-full mt-10 md:mt-20 cursor-pointer hover:border-2 horver:border-veryLightGray hover:bg-veryDarkCyan">
              <p className="text-veryDarkCyan group-hover:text-white font-semibold text-sm">
                Learn More
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
