import { AssetsAction } from "@/app/Redux/slice/assestSlice"
import { RootState } from "@/app/Redux/slice/interface"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Textarea} from "@/components/ui/textarea"
import { useDispatch, useSelector } from "react-redux"

const Product = () => {
    const dispatch = useDispatch()

    const item_name = useSelector((state:RootState) => state.asset.item_name)
    const price = useSelector((state:RootState) => state.asset.price)
    const taxrate = useSelector((state:RootState) => state.asset.taxrate)
    const sku = useSelector((state:RootState) => state.asset.sku)
    const m_unit = useSelector((state:RootState) => state.asset.m_unit)
    const currency = useSelector((state:RootState) => state.asset.currency)
    const description = useSelector((state:RootState) => state.asset.description)
    
    
   
  return (
    <div className="flex flex-col gap-8 ">
        <div className="flex gap-5 w-full justify-between">
            <div className="w-[49.49%]">
                <Label>Item Name</Label>
                <Input 
                    value={item_name}
                    className="focus-visible:ring-0 focus-visible:ring-offset-0 rounded-lg"
                    onChange={(e) => dispatch(AssetsAction.setItemName(e.target.value))}
                />
            </div>
            <div className="w-[49.49%]">
                <Label>price</Label>
            <Input 
                value={price}
                className="focus-visible:ring-0 focus-visible:ring-offset-0 rounded-lg"
                onChange={(e) => dispatch(AssetsAction.setPrice(e.target.value))}
            />
            </div>
        </div>

        <div className="flex gap-5 w-full justify-between">
            <div className="w-[49.49%]">
                <Label>Tax Rate (%)</Label>
                <Input 
                    value={taxrate}
                    className="focus-visible:ring-0 focus-visible:ring-offset-0 rounded-lg"
                    onChange={(e) => dispatch(AssetsAction.setTaxrate(e.target.value))}
                />
            </div>
            <div className="w-[49.49%]">
                <Label>SKU</Label>
            <Input 
                value={sku}
                className="focus-visible:ring-0 focus-visible:ring-offset-0 rounded-lg"
                onChange={(e) => dispatch(AssetsAction.setSku(e.target.value))}
            />
            </div>
        </div>

        <div className="flex gap-5 w-full justify-between">
            <div className="w-[49.49%]">
                <Label>Measuring Unit</Label>
                <Input 
                    value={m_unit}
                    className="focus-visible:ring-0 focus-visible:ring-offset-0 rounded-lg"
                    onChange={(e) => dispatch(AssetsAction.setM_unit(e.target.value))}
                />
            </div>
            <div className="w-[49.49%]">
                <Label>currency</Label>
            <Input 
                value={currency}
                className="focus-visible:ring-0 focus-visible:ring-offset-0 rounded-lg"
                onChange={(e) => dispatch(AssetsAction.setCurrency(e.target.value))}
            />
            </div>
        </div>

        <div className="">
            <div className="">
                <Label>Description</Label>
                <Textarea
                    value={description}
                    className="focus-visible:ring-0 focus-visible:ring-offset-0 rounded-lg h-32"
                    onChange={(e) => dispatch(AssetsAction.setDescription(e.target.value))}
                />
            </div>
        </div>
    </div>
  )
}
export default Product