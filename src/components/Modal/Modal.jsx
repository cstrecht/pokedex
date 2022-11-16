import React from "react";
import pokeball from "../Modal/pokeball.png";

function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div>
      <button
        className="bg-pink-500  active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        open test
      </button>
      {showModal ? (
        <div class="m-auto bg-primary-blue bg-opacity-50 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div class=" p-4 flex flex-row-reverse">
                  <svg
                    onClick={() => setShowModal(false)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 hover:cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div class="bg-white px-4 pb-4 ">
                  <img
                    class="h-48 mx-auto"
                    src={pokeball}
                    alt="Default pokeball"
                  />
                  <div class="flex flex-col justify-center items-center">
                    <h3 class="font-press-start text-lg font-medium leading-6 text-gray-900 mt-8">
                      Pokemon name
                    </h3>
                    <div class="mt-2">
                      <p class="font-v-t text-gray-500">Stats here</p>
                    </div>
                    <div class="mt-2">
                      <p class="font-v-t text-gray-500">Weight here</p>
                    </div>
                    <div class="mt-2">
                      <p class="font-v-t text-gray-500">Abilities here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default Modal;
