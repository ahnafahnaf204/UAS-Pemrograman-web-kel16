import HeaderImage from "../../images/Marketing_LandingFeatured_Redesign.webp";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  return (
    <>
      <section
        className="text-gray-600 body-font min-h-[100vh] pt-[100px] object-cover"
        style={{
          backgroundImage: `url(${HeaderImage})`,
          backgroundPosition: "bottom",
        }}
      >
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-white font-sans">
              Lebih cepat dari Starlink
            </h1>
            <p className="mb-8 leading-relaxed text-white">
              Rasakan kecepatan tanpa batas dengan teknologi diatas elon musk.
            </p>
            {user ? (
              <div className="flex justify-center">
                <button
                  className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  onClick={() => navigate("/profile")}
                >
                  Profile Anda
                </button>
              </div>
            ) : (
              <div className="flex justify-center">
                <button
                  className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  onClick={() => navigate("/register")}
                >
                  Get started
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default Header;
