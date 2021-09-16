import React, { useState } from "react";
import unlock from "../../images/unlock.png";
import vector1 from "../../images/vector1.png";
import vector2 from "../../images/vector2.png";
import yada from "../../images/yada.png";
import tick from "../../images/tick.png";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import BeatLoader from "react-spinners/BeatLoader";

function ForgotPassword() {
  const [page, setPage] = useState(0);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [tick, setTick] = useState(false);
  const auth = getAuth();

  function sendEmailforResetPassword() {
    setLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("taksim");
        setTick(true);
        setLoading(false);
        setPage(1);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setLoading(false);
        // ..
      });
  }

  function pageManager() {
    if (page == 0) {
      return (
        <p>
          E-posta adresini gir ve şifreni yenilemek için sana bir bağlantı
          gönderelim.
        </p>
      );
    } else {
      return (
        <p>
          Bağlantı e-posta adresine gönderildi! E-postana gelen linke tıklayarak
          şifreni değiştirebilirsin.
        </p>
      );
    }
  }

  return (
    <div class="h-screen w-screen  flex z-10 relative justify-center  px-100 bg-janus-site-blue">
      <div class="w-screen h-100% ">
        <div class="  flex-column   h-3/4  shadow-2xl  rounded-3xl overflow-hidden bg-white mt-20  ">
          <img class="mt-16 ml-52 " src={unlock} />
          <p class="font-roboto mt-14 text-janus-dark-blue font-medium text-base">
            Giriş yaparken sorun mu yaşıyorsun ?
          </p>
          <div class="  px-20 mt-5 text-rstpsw-gray">{pageManager()}</div>

          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            class="  outline-none border-input focus:border-janus-focus-blue font-roboto text-input-gray h-10 rounded border-0.5 shadow-input p-3  mt-10"
            placeholder="E-posta"
          />
          <div>
            {" "}
            <button
              disabled={tick == true}
              onClick={sendEmailforResetPassword}
              class={`${
                tick ? `bg-success px-20` : `bg-janus-site-blue`
              } h-10 rounded-lg   mt-7 text-base text-white font-roboto px-6 `}
            >
              {loading ? (
                <BeatLoader
                  color={"#ffffff"}
                  loading={true}
                  size={10}
                  speedMultiplier={1}
                />
              ) : tick ? (
                <p class="text-red-700"> Başarılı </p>
              ) : (
                "Giriş Bağlantısı Gönder"
              )}
            </button>
          </div>
          <div class="flex flex-row  justify-center">
            <div class="border-line-gray mt-10 border-2 h-0 w-24 mr-5 "></div>
            <p class="mt-8 font-bold text-sm text-line-gray">YA DA</p>
            <div class="border-line-gray mt-10 border-2 h-0 w-24 ml-5"></div>
          </div>
          <div class="mt-5">
            <Link
              to="/SignUp"
              class="mt-5 ml-1 text-base text-janus-dark-blue font-roboto font-bold"
            >
              Yeni hesap oluştur
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
