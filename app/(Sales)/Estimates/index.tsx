"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

const Estimates3 = () => {
  return (
    <div className=" p-4 bg-white">

    <div className="flex">
      <Button variant="outline" className=' bg-slate-900 text-white rounded justify-center'>Select from customers list</Button>
      </div>

      <div className="flex justify-center bg-gray-500 w-80 p-3 text-white text-sm mt-20 rounded-xl">
        <button>
          <Badge className=" bg-emerald-700">Contact</Badge>
          <Badge>Billing</Badge>
          <Badge>Shipping</Badge>
          <Badge>Remark</Badge>
        </button>
      </div>

   <div className="flex gap-3 mt-8 font-thin">
    <span className="font-medium">Customer Type:</span>
      <RadioGroup defaultValue="option-one" className="flex">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one" className="font-light">Company</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two" className="font-light">Individual</Label>
  </div>
</RadioGroup>
</div>

<div className="flex justify-between mt-3">
<div>
  <label className="font-medium">Company Name</label>
  <Input type=""  className="w-96 rounded border-gray-400"/>
</div>

<div>
  <label className="font-medium">First Name</label>
  <Input type="" className=" w-96 rounded border-gray-400" />
</div>
</div>
      
<div className="flex justify-between mt-3">
<div>
  <label className="font-medium">Last Name</label>
  <Input type=""  className="w-96 rounded border-gray-400"/>
</div>

<div>
  <label className="font-medium">Email</label>
  <Input type="" className=" w-96 rounded border-gray-400" />
</div>
</div>

<div className="flex justify-between mt-3">
<div>
  <label className="font-medium">Phone Number</label>
  <Input type=""  className="w-96 rounded border-gray-400"/>
</div>

<div>
  <label className="font-medium">Website</label>
  <Input type="" className=" w-96 rounded border-gray-400" />
</div>
</div>

<div>
  <label className="font-medium">Currency</label>
  <select className="inline-flex justify-center rounded px-4 py-2  border border-grey-600  w-full"
                        id="options-menu" aria-haspopup="true" aria-expanded="true">
                        </select>
</div>

<div>
  <label>Description</label>
  <Textarea />
</div>
    </div>
  )
}

export default Estimates3
=======
'use client'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alegreya_Sans, Eczar } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
=======
import Header from "@/components/Header";
import InvoiceBody from "@/components/InvoiceBody";
import { Eczar, Alegreya_Sans } from "next/font/google";
import Link from "next/link";
>>>>>>> 7cbac6b (Added Estimates)

const eczar = Eczar({ subsets: ["latin"] });
const alegreya_sans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Estimates = () => {
  return (
    <InvoiceBody>
      {" "}
      <Header pageTitle="Estimates" />
      <div className="bg-[#FAFAFA] rounded-lg py-10 px-8 flex flex-col gap-14 relative">
        <div className="heading flex flex-col gap-4">
          <h1 className="text-[2rem] font-extrabold text-[#101618] text-center">
            Elevate Your Business With Effortless Estimating
          </h1>
          <p className="text-lg text-center font-normal text-[#101618] text-sm">
           Experience the ease of simplicity!Generating and sending estimates has never been has straight forward.
           Turning estimates into realized projects is not just a process, but a seamless journey towards success.
          </p>
        </div>
        <div className="infographic  flex justify-between">
          <div className=" flex flex-col justify-center items-center gap-6 mt-6">
            <div
              className={`${eczar.className} bg-[#D7E7EB] w-[4.5rem] h-[4.5rem] rounded-full relative`}
            >
              <h1 className="text-[#1F233E] font-semibold text-4xl leading-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                1
              </h1>
            </div>
            <h1
              className={`${alegreya_sans.className} font-bold text-xl text-center  text-[#1F233E]`}
            >
              Select or Add New Customer
            </h1>
            <p
              className={`${alegreya_sans.className} font-normal text-base text-center  text-[#1E262A]`}
            >
              In the estimate process, start by selecting an existing <br />
              customer or adding a new one for their first <br />
              transaction. Accurate customer details are crucial for
              <br /> proper billing.
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center gap-6">
            <div
              className={`${eczar.className} bg-[#D7E7EB] w-[4.5rem] h-[4.5rem] rounded-full relative`}
            >
              <h1 className="text-[#1F233E] font-semibold text-4xl leading-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                2
              </h1>
            </div>
            <h1
              className={`${alegreya_sans.className} font-bold text-xl text-center  text-[#1F233E]`}
            >
              Select or Add Inventory
            </h1>
            <p
              className={`${alegreya_sans.className} font-normal text-base text-center  text-[#1E262A]`}
            >
              Specify the products or services for billing. Select items
              <br />
              from your inventory or add new ones if not listed. This is
              <br />
              crucial for a clear transaction breakdown.
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center gap-6">
            <div
              className={`${eczar.className} bg-[#D7E7EB] w-[4.5rem] h-[4.5rem] rounded-full relative`}
            >
              <h1 className="text-[#1F233E] font-semibold text-4xl leading-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                3
              </h1>
            </div>
            <h1
              className={`${alegreya_sans.className} font-bold text-xl text-center  text-[#1F233E]`}
            >
              Preview and Send
            </h1>
            <p
              className={`${alegreya_sans.className} font-normal text-base text-center  text-[#1E262A]`}
            >
              In the last step, check the entire estimate to ensure
              <br /> accuracy and completeness. Once satisfied with the
              <br /> details, then proceed to send it to the customer
            </p>
          </div>
        </div>
        <div className="absolute top-[266px] left-[295.95px]">
          <svg
            width="215"
            height="18"
            viewBox="0 0 215 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M214.756 5.18964L203.374 3.24627L207.382 14.0753L214.756 5.18964ZM105.248 1.0056L105.263 2.00549L105.248 1.0056ZM160.523 16.981L160.549 15.9814L160.523 16.981ZM31.6634 12.1336L31.4428 13.109L31.6634 12.1336ZM73.2455 8.2296L72.8991 7.29151L73.2455 8.2296ZM0.733551 6.16501L2.65288 6.59901L3.09398 4.64826L1.17465 4.21426L0.733551 6.16501ZM6.49154 7.467L10.3302 8.335L10.7713 6.38425L6.93264 5.51625L6.49154 7.467ZM14.1689 9.20299L18.0075 10.071L18.4486 8.12023L14.61 7.25224L14.1689 9.20299ZM21.8462 10.939L25.6848 11.807L26.1259 9.85622L22.2873 8.98823L21.8462 10.939ZM29.5235 12.675L31.4428 13.109L31.8839 11.1582L29.9646 10.7242L29.5235 12.675ZM31.4428 13.109C32.1447 13.2677 32.8479 13.4131 33.5523 13.5455L33.9219 11.58C33.2412 11.452 32.5618 11.3115 31.8839 11.1582L31.4428 13.109ZM37.8089 14.1892C39.236 14.3537 40.666 14.4681 42.0971 14.535L42.1905 12.5371C40.8036 12.4723 39.4188 12.3615 38.0379 12.2024L37.8089 14.1892ZM46.3955 14.5956C47.8268 14.5699 49.2574 14.4994 50.6856 14.3866L50.528 12.3928C49.1392 12.5025 47.7492 12.571 46.3597 12.5959L46.3955 14.5956ZM54.9523 13.9248C56.3674 13.731 57.7784 13.4977 59.1835 13.2276L58.806 11.2636C57.435 11.5271 56.0594 11.7545 54.6808 11.9433L54.9523 13.9248ZM63.3695 12.3119C64.7552 11.9723 66.1335 11.5987 67.5027 11.1935L66.9352 9.27569C65.5954 9.67216 64.2476 10.0375 62.8934 10.3693L63.3695 12.3119ZM71.5777 9.88714C72.2518 9.65448 72.9233 9.41456 73.5919 9.16769L72.8991 7.29151C72.2437 7.53351 71.5857 7.76863 70.9252 7.99657L71.5777 9.88714ZM73.5919 9.16769C74.2254 8.93375 74.8674 8.70073 75.5169 8.46944L74.8459 6.58536C74.1889 6.81933 73.5396 7.05498 72.8991 7.29151L73.5919 9.16769ZM79.3902 7.14331C80.6744 6.7218 81.9782 6.31244 83.2946 5.92085L82.7243 4.00387C81.3888 4.40116 80.0672 4.81614 78.7665 5.24305L79.3902 7.14331ZM87.2297 4.81685C88.5487 4.46999 89.8728 4.14605 91.1955 3.85038L90.7592 1.89855C89.4105 2.20005 88.0621 2.52994 86.721 2.88261L87.2297 4.81685ZM95.1904 3.04684C96.5424 2.80683 97.8846 2.60272 99.2101 2.44023L98.9668 0.455094C97.6026 0.622324 96.2247 0.831942 94.8408 1.07763L95.1904 3.04684ZM103.245 2.07687C103.925 2.03943 104.598 2.01537 105.263 2.00549L105.233 0.00570899C104.54 0.0160086 103.84 0.0410655 103.135 0.0798933L103.245 2.07687ZM105.263 2.00549C105.954 1.99521 106.632 1.99948 107.298 2.01741L107.352 0.0181405C106.658 -0.000552773 105.952 -0.00498462 105.233 0.00570899L105.263 2.00549ZM111.351 2.30494C112.737 2.46609 114.071 2.68711 115.36 2.95834L115.772 1.00116C114.425 0.717756 113.031 0.486731 111.581 0.31831L111.351 2.30494ZM119.297 3.97038C120.615 4.37041 121.895 4.81872 123.147 5.30328L123.869 3.43803C122.576 2.93784 121.25 2.47274 119.877 2.05651L119.297 3.97038ZM126.924 6.89325C128.178 7.45923 129.415 8.05025 130.651 8.65357L131.528 6.85627C130.283 6.24844 129.026 5.64782 127.746 5.07035L126.924 6.89325ZM134.372 10.488C135.611 11.0978 136.862 11.7057 138.136 12.2957L138.977 10.481C137.724 9.90071 136.489 9.30077 135.255 8.69352L134.372 10.488ZM141.985 13.9766C143.266 14.4974 144.581 14.9887 145.941 15.4371L146.567 13.5377C145.256 13.1053 143.984 12.6301 142.738 12.1238L141.985 13.9766ZM150.01 16.6028C151.348 16.9271 152.732 17.2043 154.171 17.424L154.473 15.447C153.093 15.2362 151.766 14.9704 150.482 14.6591L150.01 16.6028ZM158.382 17.8835C159.074 17.9295 159.779 17.9622 160.498 17.9807L160.549 15.9814C159.858 15.9636 159.18 15.9321 158.515 15.8879L158.382 17.8835ZM160.498 17.9807C161.165 17.9978 161.84 18.0034 162.522 17.9981L162.506 15.9981C161.845 16.0033 161.192 15.9979 160.549 15.9814L160.498 17.9807ZM166.556 17.85C167.878 17.7662 169.218 17.649 170.569 17.503L170.355 15.5145C169.03 15.6577 167.719 15.7723 166.43 15.854L166.556 17.85ZM174.56 16.9957C175.879 16.8043 177.203 16.5898 178.525 16.3565L178.177 14.387C176.874 14.617 175.57 14.8281 174.273 15.0165L174.56 16.9957ZM182.465 15.6059C183.782 15.3374 185.091 15.0537 186.384 14.7588L185.94 12.8088C184.66 13.1005 183.367 13.381 182.066 13.6462L182.465 15.6059ZM190.279 13.8276C191.596 13.4987 192.889 13.1619 194.151 12.8217L193.63 10.8907C192.38 11.2278 191.099 11.5615 189.795 11.8872L190.279 13.8276ZM198.007 11.7457C199.338 11.3621 200.62 10.9802 201.842 10.6066L201.257 8.69407C200.045 9.06474 198.774 9.44351 197.453 9.82396L198.007 11.7457ZM205.662 9.40497C207.057 8.95415 208.331 8.52907 209.461 8.14376L208.815 6.25083C207.695 6.63294 206.431 7.05462 205.047 7.50189L205.662 9.40497Z"
              fill="#9FA5A8"
            />
          </svg>
        </div>
        <div className="absolute top-[266px] left-[672.42px]">
          <svg
            width="215"
            height="18"
            viewBox="0 0 215 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M214.756 5.18964L203.374 3.24627L207.382 14.0753L214.756 5.18964ZM105.248 1.0056L105.263 2.00549L105.248 1.0056ZM160.523 16.981L160.549 15.9814L160.523 16.981ZM31.6634 12.1336L31.4428 13.109L31.6634 12.1336ZM73.2455 8.2296L72.8991 7.29151L73.2455 8.2296ZM0.733551 6.16501L2.65288 6.59901L3.09398 4.64826L1.17465 4.21426L0.733551 6.16501ZM6.49154 7.467L10.3302 8.335L10.7713 6.38425L6.93264 5.51625L6.49154 7.467ZM14.1689 9.20299L18.0075 10.071L18.4486 8.12023L14.61 7.25224L14.1689 9.20299ZM21.8462 10.939L25.6848 11.807L26.1259 9.85622L22.2873 8.98823L21.8462 10.939ZM29.5235 12.675L31.4428 13.109L31.8839 11.1582L29.9646 10.7242L29.5235 12.675ZM31.4428 13.109C32.1447 13.2677 32.8479 13.4131 33.5523 13.5455L33.9219 11.58C33.2412 11.452 32.5618 11.3115 31.8839 11.1582L31.4428 13.109ZM37.8089 14.1892C39.236 14.3537 40.666 14.4681 42.0971 14.535L42.1905 12.5371C40.8036 12.4723 39.4188 12.3615 38.0379 12.2024L37.8089 14.1892ZM46.3955 14.5956C47.8268 14.5699 49.2574 14.4994 50.6856 14.3866L50.528 12.3928C49.1392 12.5025 47.7492 12.571 46.3597 12.5959L46.3955 14.5956ZM54.9523 13.9248C56.3674 13.731 57.7784 13.4977 59.1835 13.2276L58.806 11.2636C57.435 11.5271 56.0594 11.7545 54.6808 11.9433L54.9523 13.9248ZM63.3695 12.3119C64.7552 11.9723 66.1335 11.5987 67.5027 11.1935L66.9352 9.27569C65.5954 9.67216 64.2476 10.0375 62.8934 10.3693L63.3695 12.3119ZM71.5777 9.88714C72.2518 9.65448 72.9233 9.41456 73.5919 9.16769L72.8991 7.29151C72.2437 7.53351 71.5857 7.76863 70.9252 7.99657L71.5777 9.88714ZM73.5919 9.16769C74.2254 8.93375 74.8674 8.70073 75.5169 8.46944L74.8459 6.58536C74.1889 6.81933 73.5396 7.05498 72.8991 7.29151L73.5919 9.16769ZM79.3902 7.14331C80.6744 6.7218 81.9782 6.31244 83.2946 5.92085L82.7243 4.00387C81.3888 4.40116 80.0672 4.81614 78.7665 5.24305L79.3902 7.14331ZM87.2297 4.81685C88.5487 4.46999 89.8728 4.14605 91.1955 3.85038L90.7592 1.89855C89.4105 2.20005 88.0621 2.52994 86.721 2.88261L87.2297 4.81685ZM95.1904 3.04684C96.5424 2.80683 97.8846 2.60272 99.2101 2.44023L98.9668 0.455094C97.6026 0.622324 96.2247 0.831942 94.8408 1.07763L95.1904 3.04684ZM103.245 2.07687C103.925 2.03943 104.598 2.01537 105.263 2.00549L105.233 0.00570899C104.54 0.0160086 103.84 0.0410655 103.135 0.0798933L103.245 2.07687ZM105.263 2.00549C105.954 1.99521 106.632 1.99948 107.298 2.01741L107.352 0.0181405C106.658 -0.000552773 105.952 -0.00498462 105.233 0.00570899L105.263 2.00549ZM111.351 2.30494C112.737 2.46609 114.071 2.68711 115.36 2.95834L115.772 1.00116C114.425 0.717756 113.031 0.486731 111.581 0.31831L111.351 2.30494ZM119.297 3.97038C120.615 4.37041 121.895 4.81872 123.147 5.30328L123.869 3.43803C122.576 2.93784 121.25 2.47274 119.877 2.05651L119.297 3.97038ZM126.924 6.89325C128.178 7.45923 129.415 8.05025 130.651 8.65357L131.528 6.85627C130.283 6.24844 129.026 5.64782 127.746 5.07035L126.924 6.89325ZM134.372 10.488C135.611 11.0978 136.862 11.7057 138.136 12.2957L138.977 10.481C137.724 9.90071 136.489 9.30077 135.255 8.69352L134.372 10.488ZM141.985 13.9766C143.266 14.4974 144.581 14.9887 145.941 15.4371L146.567 13.5377C145.256 13.1053 143.984 12.6301 142.738 12.1238L141.985 13.9766ZM150.01 16.6028C151.348 16.9271 152.732 17.2043 154.171 17.424L154.473 15.447C153.093 15.2362 151.766 14.9704 150.482 14.6591L150.01 16.6028ZM158.382 17.8835C159.074 17.9295 159.779 17.9622 160.498 17.9807L160.549 15.9814C159.858 15.9636 159.18 15.9321 158.515 15.8879L158.382 17.8835ZM160.498 17.9807C161.165 17.9978 161.84 18.0034 162.522 17.9981L162.506 15.9981C161.845 16.0033 161.192 15.9979 160.549 15.9814L160.498 17.9807ZM166.556 17.85C167.878 17.7662 169.218 17.649 170.569 17.503L170.355 15.5145C169.03 15.6577 167.719 15.7723 166.43 15.854L166.556 17.85ZM174.56 16.9957C175.879 16.8043 177.203 16.5898 178.525 16.3565L178.177 14.387C176.874 14.617 175.57 14.8281 174.273 15.0165L174.56 16.9957ZM182.465 15.6059C183.782 15.3374 185.091 15.0537 186.384 14.7588L185.94 12.8088C184.66 13.1005 183.367 13.381 182.066 13.6462L182.465 15.6059ZM190.279 13.8276C191.596 13.4987 192.889 13.1619 194.151 12.8217L193.63 10.8907C192.38 11.2278 191.099 11.5615 189.795 11.8872L190.279 13.8276ZM198.007 11.7457C199.338 11.3621 200.62 10.9802 201.842 10.6066L201.257 8.69407C200.045 9.06474 198.774 9.44351 197.453 9.82396L198.007 11.7457ZM205.662 9.40497C207.057 8.95415 208.331 8.52907 209.461 8.14376L208.815 6.25083C207.695 6.63294 206.431 7.05462 205.047 7.50189L205.662 9.40497Z"
              fill="#9FA5A8"
            />
          </svg>
        </div>
        <div className={`${alegreya_sans.className} flex justify-center`}>
          <button className="bg-[#1F233E] text-[#FFFFFF] py-[10px] px-6 text-xl font-medium rounded-[0.375rem]">
            <Link href="/Estimates/Estimates2">Add new invoice</Link>
          </button>
        </div>
      </div>
    </InvoiceBody>
  );
};

<<<<<<< HEAD
      <div className="flex justify-center p-14">
      <Button variant="outline" className=' bg-slate-900 text-white rounded-lg'>Add New Estimate</Button>
      <Link href="/Estimates/Estimates2"></Link>
      </div>
      </div>
  )
}

export default Estimates
>>>>>>> 15dbb6f (added estimates)
=======
export default Estimates;
>>>>>>> 7cbac6b (Added Estimates)
