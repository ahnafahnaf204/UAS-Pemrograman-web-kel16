import React from "react";
import sateliteImage from "../../images/Marketing_LandingPlugin.jpg"
const Feature = () => {
  return (
    <div>
      <section className="text-gray-600 body-font " id="feature">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={sateliteImage}
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  STREAMING, VIDEO CALLS, ONLINE GAMING
                </h2>
                <p className="leading-relaxed text-base">
                  Dengan Nafnet, pengguna dapat terlibat dalam aktivitas yang
                  sebelumnya tidak dapat dilakukan dengan internet satelit.
                  <br className="my-2"/>
                  Layanan kecepatan tinggi dan latensi rendah Nafnet
                  dimungkinkan melalui konstelasi satelit canggih terbesar di
                  dunia yang beroperasi di orbit rendah mengelilingi Bumi.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  EASY SELF-INSTALL
                </h2>
                <p className="leading-relaxed text-base">
                  Kit Nafnet Anda hadir dengan semua yang Anda perlukan untuk
                  online dalam hitungan menit termasuk Starlink, router WiFi,
                  kabel, dan basis Anda.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  TRAVEL WITH NAFNET
                </h2>
                <p className="leading-relaxed text-base">
                  Pengguna Nafnet dapat menggunakan layanan latensi rendah
                  berkecepatan tinggi yang sama seperti yang mereka miliki di
                  rumah ke lokasi mana pun Starlink menawarkan layanan dengan
                  add-on Portabilitas. 
                  <br className="my-2"/>
                  Bagi mereka yang ingin tinggal di jalan,
                  Starlink untuk RV memungkinkan pengguna menjeda dan
                  membatalkan jeda layanan berdasarkan kebutuhan perjalanan
                  masing-masing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
