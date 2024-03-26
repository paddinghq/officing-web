"use client"
import React, { useState } from 'react';
import AssestBody from "@/components/AssestBody";
import Header from "@/components/Header";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Products from "./product";
import Services from "./service";
import { Button } from '@/components/ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { AssetsAction } from '@/app/Redux/slice/assestSlice';
import { RootState } from "@/app/Redux/slice/interface"
import { CreateAsset } from './createAssetLogic';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const Addnew = () => {

  const sl_Assest = useSelector((state:RootState) => state.asset.sl_Assest)
  const item_name = useSelector((state:RootState) => state.asset.item_name)
  const price = useSelector((state:RootState) => state.asset.price)
  const taxrate = useSelector((state:RootState) => state.asset.taxrate)
  const sku = useSelector((state:RootState) => state.asset.sku)
  const m_unit = useSelector((state:RootState) => state.asset.m_unit)
  const currency = useSelector((state:RootState) => state.asset.currency)
  const description = useSelector((state:RootState) => state.asset.description)
  const dispatch = useDispatch()
  const router = useRouter()

  //ts-ignore
  const handleItemTypeChange = (value: string) => {

    dispatch(AssetsAction.setSl_Assest(value));
  };

  const handleSave = async() => {
    dispatch(AssetsAction.setSubmit(true))
    dispatch(AssetsAction.setLoading(true))
    try {
      const res = await CreateAsset({
        name: item_name,
        price: Number(price),
        taxRate: taxrate,
        sku: sku,
        measuringUnit: m_unit,
        currency: currency,
        description: description,
        assetType: sl_Assest
      })
      if(res.data.success === "true") {
        dispatch(AssetsAction.setSubmit(false))
        dispatch(AssetsAction.setLoading(false))
        toast.success(res.message)

        setTimeout(() => {
          router.push('/Table')
        }, 2000)
      } else {
        dispatch(AssetsAction.setSubmit(false))
        dispatch(AssetsAction.setLoading(false))

        toast.error(res.message)

        setTimeout(() => {
          window.location.reload()
        })
      }
      

    }catch(err) {
      console.log(err)
    }
  }

  return (
    <AssestBody>
      <Header pageTitle="New Items" />
      <div className="bg-[#FAFAFA] rounded-lg py-12 px-8 flex flex-col gap-5 relative mt-5">
        <div className="flex gap-3">
          <h6>Item Type:</h6>
          <RadioGroup
            defaultValue={sl_Assest}
            onValueChange={handleItemTypeChange}
            className="flex"
          >
            <div className={`flex items-center space-x-2 ${sl_Assest === 'product' ? 'text-[#38869B]' : 'text-gray-500'}`}>
              <RadioGroupItem value="product" id="product" />
              <Label htmlFor="product">Product</Label>
            </div>
            <div className={`flex items-center space-x-2 ${sl_Assest === 'service' ? 'text-[#38869B]' : 'text-gray-500'}`}>
              <RadioGroupItem value="service" id="service" />
              <Label htmlFor="service">Services</Label>
            </div>
          </RadioGroup>
        </div>

        {sl_Assest === 'product' && <Products/>}
        {sl_Assest === 'service' && <Services/>}
      </div>

      <div className="flex justify-end gap-5">
        <Button variant={"outline"}>Cancel</Button>
        <Button variant={"ghost"} onClick={handleSave}>Save</Button>
      </div>
    </AssestBody>
  );
};

export default Addnew;
