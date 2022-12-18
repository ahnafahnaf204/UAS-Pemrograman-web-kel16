import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { getDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { doc } from "firebase/firestore";
import Modal from "../components/Modal";
const Profile = () => {
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    const data = async () => {
      const data = await getDoc(doc(db, "users", user.uid[0]));
      setData(data.data());
    };
    data();

    if (!user) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="bg-[#242424] pt-[90px]">
      <div className=" bg-gray-100 px-9 pb-[80px] pt-[90px]">
        <div className="overflow-hidden bg-white shadow sm:rounded-lg  ">
          <div className="px-4 py-5 sm:px-6 flex flex-row justify-between">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Applicant Information
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Personal details and application.
              </p>
            </div>
            <Link
              type="button"
              class="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 "
              to={"/edit"}
            >
              Ubah
            </Link>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {data.user?.name}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">No HP</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {data.user?.phone}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {data.user?.email}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Paket Aktif
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {data.user?.paket || "Anda belum berlangganan"}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
