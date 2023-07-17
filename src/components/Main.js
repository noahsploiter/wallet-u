import React from "react";
import card from "../img/card.jpg";
import visa from "../img/visa.png";
import mastercard from "../img/mastercard.png";

function Main() {
  const click = () => {
    alert("Your Balance is 0 usd");
  };
  const btc = "17r2fJySLrHq6uFgcbSnrHN77ui4898bor";
  return (
    <section>
      <div className="p-5 flex justify-center text-white">
        <div>
          <h1 className="text-center">Your Balance: 0 usd</h1>
          <div className="w-[350px] mt-5 border flex flex-col  h-[140px] rounded-xl">
            <div className="p-3">
              <h1 className="text-center">BITCOIN</h1>
              <p className="bg-black w-[300px] mt-2 flex justify-center">
                {btc}
              </p>
            </div>
            <div className="flex justify-center">
              <button
                className="w-[60px] active:bg-violet-700  rounded-md"
                onClick={() => {
                  navigator.clipboard.writeText(btc);
                }}
              >
                Copy
              </button>
            </div>
          </div>
          <h1 className="text-white text-2xl font-extrabold text-center mt-3">
            AVAILABLE CARDS
          </h1>
        </div>
      </div>
      <div className="space-y-5 md:space-y-5 justify-center flex flex-row  text-white md:flex flex-wrap md:space-x-5 w-screen">
        <div className="p-5 border w-[350px] rounded-xl space-y-2">
          <h1 className="text-white font-bold">Card Type</h1>
          <img className="w-[50px]" src={visa} alt="" />
          <h2>Account Holder: Billy****</h2>
          <h2>Cvv: 325</h2>
          <div>
            <button onClick={click} className="rounded-xl active:bg-violet-700">
              Purchase $50
            </button>
          </div>
        </div>
        <div className="p-5 border w-[350px] rounded-xl space-y-2">
          <h1 className="text-white font-bold">Card Type</h1>
          <img className="w-[50px]" src={mastercard} alt="" />
          <h2>Account Holder: Steve****</h2>
          <h2>Cvv: 271</h2>
          <div>
            <button onClick={click} className="rounded-xl active:bg-violet-700">
              Purchase $30
            </button>
          </div>
        </div>
        <div className="p-5 border w-[350px] rounded-xl space-y-2">
          <h1 className="text-white font-bold">Card Type</h1>
          <img className="w-[50px]" src={visa} alt="" />
          <h2>Account Holder: Teresa******</h2>
          <h2>Cvv: 995</h2>
          <div>
            <button onClick={click} className="rounded-xl active:bg-violet-700">
              Purchase $60
            </button>
          </div>
        </div>
        <div className="p-5 border w-[350px] rounded-xl space-y-2">
          <h1 className="text-white font-bold">Card Type</h1>
          <img className="w-[50px]" src={visa} alt="" />
          <h2>Account Holder: Dennis******</h2>
          <h2>Cvv: 995</h2>
          <div>
            <button onClick={click} className="rounded-xl active:bg-violet-700">
              Purchase $40
            </button>
          </div>
        </div>
        <div className="p-5 border w-[350px] rounded-xl space-y-2">
          <h1 className="text-white font-bold">Card Type</h1>
          <img className="w-[50px]" src={mastercard} alt="" />
          <h2>Account Holder: James******</h2>
          <h2>Cvv: 995</h2>
          <div>
            <button onClick={click} className="rounded-xl active:bg-violet-700">
              Purchase $100
            </button>
          </div>
        </div>
        <div className="p-5 border w-[350px] rounded-xl space-y-2">
          <h1 className="text-white font-bold">Card Type</h1>
          <img className="w-[50px]" src={visa} alt="" />
          <h2>Account Holder: Leo******</h2>
          <h2>Cvv: 995</h2>
          <div>
            <button onClick={click} className="rounded-xl active:bg-violet-700">
              Purchase $20
            </button>
          </div>
        </div>
        <div className="p-5 border w-[350px] rounded-xl space-y-2">
          <h1 className="text-white font-bold">Card Type</h1>
          <img className="w-[50px]" src={visa} alt="" />
          <h2>Account Holder: Oliver******</h2>
          <h2>Cvv: 995</h2>
          <div>
            <button onClick={click} className="rounded-xl active:bg-violet-700">
              Purchase $70
            </button>
          </div>
        </div>
        <div className="p-5 border w-[350px] rounded-xl space-y-2">
          <h1 className="text-white font-bold">Card Type</h1>
          <img className="w-[50px]" src={mastercard} alt="" />
          <h2>Account Holder: Ethan******</h2>
          <h2>Cvv: 995</h2>
          <div>
            <button onClick={click} className="rounded-xl active:bg-violet-700">
              Purchase $90
            </button>
          </div>
        </div>
        <div className="p-5 border w-[350px] rounded-xl space-y-2">
          <h1 className="text-white font-bold">Card Type</h1>
          <img className="w-[50px]" src={visa} alt="" />
          <h2>Account Holder: Henry******</h2>
          <h2>Cvv: 995</h2>
          <div>
            <button onClick={click} className="rounded-xl active:bg-violet-700">
              Purchase $130
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
