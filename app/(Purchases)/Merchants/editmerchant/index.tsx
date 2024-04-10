"use client";
import Header from "@/components/Header";
import MerchantBody from "@/components/MerchantBody";
import React, { useState } from "react";
import { Eczar, Alegreya_Sans } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Contact from "./editComponent/contact"
import Billing from "./editComponent/billing"
import Shipping from "./editComponent/shipping"
import Remark from "./editComponent/remark"

const eczar = Eczar({ subsets: ["latin"] });
const alegreya_sans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});



const EditMerchant = () => {
  const [activeTab, setActiveTab] = useState("contact");

  //@ts-ignore
  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <MerchantBody>
      <Header pageTitle="Edit Merchant" />   
      <div className={`${alegreya_sans.className} bg-[#FAFAFA] rounded-[0.5rem] py-8 flex flex-col gap-6`}>
        
        <div className="rounded-[0.375rem] bg-[#FAFAFA] py-6 px-8 flex flex-col gap-6">
          <div className={`flex justify-center`}>
            <div className={` ${alegreya_sans.className} bg-[#9FA5A8] rounded-[14px] p-2 flex gap-2`}>
              <Button
                variant="link"
                className={`${
                  activeTab === "contact"
                    ? "bg-[#38869B] rounded-xl px-3 py-1"
                    : ""
                } text-[#FFFFFF] hover:no-underline text-lg`}
                onClick={() => handleTabClick("contact")}
              >
                Contact
              </Button>
              <Button
                variant="link"
                className={`${
                  activeTab === "billing"
                    ? "bg-[#38869B] rounded-xl px-3 py-1"
                    : ""
                } text-[#FFFFFF] hover:no-underline text-lg`}
                onClick={() => handleTabClick("billing")}
              >
                Billing
              </Button>
              <Button
                variant="link"
                className={`${
                  activeTab === "shipping"
                    ? "bg-[#38869B] rounded-xl px-3 py-1"
                    : ""
                } text-[#FFFFFF] hover:no-underline text-lg`}
                onClick={() => handleTabClick("shipping")}
              >
                Shipping
              </Button>
              <Button
                variant="link"
                className={`${
                  activeTab === "remark"
                    ? "bg-[#38869B] rounded-xl px-3 py-1"
                    : ""
                } text-[#FFFFFF] hover:no-underline text-lg`}
                onClick={() => handleTabClick("remark")}
              >
                Remark
              </Button>
            </div>
          </div>
          <div className="mt-4">
            {activeTab === "contact" && <Contact />}
            {activeTab === "billing" && <Billing />}
            {activeTab === "shipping" && <Shipping />}
            {activeTab === "remark" && <Remark />}
          </div>
        </div>
      </div>
    </MerchantBody>
  );
};

export default EditMerchant;