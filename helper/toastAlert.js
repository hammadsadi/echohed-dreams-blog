import toast from "react-hot-toast";

const toastAlert = ( type, msg,) => {
   toast[type](msg);
};

export default toastAlert;