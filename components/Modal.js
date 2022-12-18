import React from "react";

const Modal = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 "
        onClick={handleClick}
      >
        open modal
      </button>
      {open && (
        <div className="h-screen w-screen bg-black/40 flex justify-center items-center fixed left-0 top-0">
          <div className="w-[60vw] h-[40vw] bg-white">
            <button
              type="button"
              class="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700"
              onClick={handleClose}
            >
              close Modal
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
