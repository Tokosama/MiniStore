import { useState } from "react";
import Spinner from "./Spinner";

export default function OrderForm({ isOpen, onClose, setBacket }) {
  const [form, setForm] = useState({ name: "", address: "", tel: "" });

  const [showLoader, setShowLoader] = useState(false);

  if (!isOpen) return null;
  const isFormValid = form.name && form.address && form.tel;
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function onOrderSubmit() {
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
      alert("Votre commandea bien été effectué et est en cours de traitement");
      localStorage.setItem("backet", JSON.stringify([]));
      window.location.reload();
    }, 2000);
  }
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-6 w-full max-w-md mx-4 "
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {" "}
          <div className="text-xl font-bold">Finalisez votre commande</div>
          <form className="flex flex-col gap-4">
            <div>
              {" "}
              <label
                htmlFor=""
                className="text-sm text-gray-500"
              >
                Nom
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1 outline-none focus:ring-2 focus:ring-red-300"
                placeholder="Veuillez saisir votre nom"
              />
            </div>
            <div>
              {" "}
              <label
                htmlFor=""
                className="text-sm text-gray-500"
              >
                Adresse
              </label>
              <input
                type="text"
                name="address"
                required
                value={form.address}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1 outline-none focus:ring-2 focus:ring-red-300"
                placeholder="Veuillez saisir votre Adresse"
              />
            </div>
            <div>
              {" "}
              <label
                htmlFor=""
                className="text-sm text-gray-500"
              >
                Telephone
              </label>
              <input
                type="tel"
                required
                name="tel"
                value={form.tel}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1 outline-none focus:ring-2 focus:ring-red-300"
                placeholder="Veuillez saisir votre numero (+229 01 99 99 99 99)"
              />
            </div>
            <div className="flex gap-3 mt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 border  rounded-lg py-2 hover:bg-gray-100"
              >
                Annuler
              </button>

              <button
                type="button"
                onClick={()=> onOrderSubmit()}
                disabled={!isFormValid}
                className="flex flex-1 border justify-center items-center bg-green-300 text-white rounded-lg py-2 hover:bg-green-500"
              >
                {showLoader && <Spinner />}
                {!showLoader && <div>Commander</div>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
