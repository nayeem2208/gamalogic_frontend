import { Link } from "react-router-dom";
import SubHeader from "../components/SubHeader";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


export default function BuyCredits() {
  return (
    <div className=" px-20 py-8">
      <SubHeader SubHeader={"Buy Credits"} />
      <div className="mt-14 text-bgblue subHeading">
        <h3>Pricing</h3>
        <p className="my-7 description">
          Choose the best pack that suits your needs from below. For custom
          quoting,<Link to='/support' className="underline font-medium"> contact us.</Link>
        </p>
        <div className="bg-gray-100 rounded h-96 shadow flex flex-col justify-center items-center">
          <div className="flex w-full text-center">
            <div className="w-3/6 border-r-4 border-gray-400">
              <p className="text-3xl font-semibold">2,500</p>
              <p>Credits</p>
            </div>
            <div className="w-3/6">
              <p className="text-3xl font-semibold">$10</p>
              <p>Cost</p>
            </div>
          </div>
          <div className=" w-3/5 mt-12">
          <input type="range" className="w-full"    />
          </div>
        </div>
        <div className=" flex justify-center mt-6">
            <div className="w-2/6  ">
        <PayPalScriptProvider options={{ clientId: "test" }}>
            <PayPalButtons style={{ layout: "horizontal" }} />
        </PayPalScriptProvider></div></div>
      </div>
    </div>
  );
}
