import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { deleteField, getDoc, updateDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { doc } from "firebase/firestore";
import { toast } from "react-toastify";
const Edit = () => {
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
  const [formData, setFormData] = useState();
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const save = async () => {
    try{
    const updatedData = {
      name: formData.name || data.user?.name,
      phone: formData.phone || data.user?.phone,
      email: formData.email || data.user?.email,
      paket: formData.paket || data.user?.name,
    };
    
      await updateDoc(doc(db, "users", user.uid[0]), {
        user: { ...updatedData },
      });
      toast.success("Data berhasil diubah");
      navigate("/profile");
    } catch (e) {
      toast.error("Tidak ada perubahan data, silahkan klik batal");
    }
    
  };
  const unsubscribe = async () => {
    await updateDoc(doc(db, "users", user.uid[0]), {
      [`user.paket`]: deleteField()
    });
    toast.success("Berlangganan telah dihentikan");
    navigate("/profile");
  };
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
            <div>
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={save}
              >
                Simpan
              </button>
              <Link
                type="button"
                class="focus:outline-none text-white bg-red-700 hover:bg-red-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                to={"/profile"}
              >
                Batal
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900  sm:mt-0">
                  <input
                    id="username"
                    type="text"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                    name="name"
                    onChange={onChange}
                    defaultValue={data.user?.name}
                  />
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">No HP</dt>
                <dd className="mt-1 text-sm text-gray-900  sm:mt-0">
                  <input
                    id="username"
                    type="text"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                    name="phone"
                    onChange={onChange}
                    defaultValue={data.user?.phone}
                  />
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900  sm:mt-0">
                  <input
                    id="username"
                    type="text"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                    name="email"
                    onChange={onChange}
                    defaultValue={data.user?.email}
                  />
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3  sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Paket Aktif
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0">
                  {data.user?.paket || <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  name="paket"
                  value={formData?.paket}
                  onChange={onChange}
                >
                   <option selected disabled hidden>Tambahkan paket langganan</option>
                  <option value={"Noob"}>Noob</option>
                  <option value={"Pro"}>Pro</option>
                  <option value={"Business"}>Business</option>
                  <option value={"Special"}>Special</option>
                </select>}
                 
                </dd>
                {data.user?.paket && (
                  <button
                    type="button"
                    class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 w-[200px] justify-self-end"
                    onClick={unsubscribe}
                  >
                    Unsubscribe
                  </button>
                )}
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
