import Vue from "vue";
import Toastify from "toastify-js";

Vue.prototype.$toast = (msg) => {
  Toastify({
    className:
      "bg-red-400 w-[200px] h-[75px] text-white font-bold rounded-lg transition-[1s] flex items-center justify-between py-2 px-4 mx-auto absolute bottom-10 z-10 right-0",
    text: msg,
    duration: 3000,
    close: true,
    gravity: "bottom",
    position: "center",
    style: {
      top: "calc(100vh - 80px)",
      right: "10px",
    },
    stopOnFocus: true,
  }).showToast();
};
