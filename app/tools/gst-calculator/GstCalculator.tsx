"use client";

import { useState } from "react";

export default function GstCalculator() {

const [amount,setAmount] = useState(1000);
const [rate,setRate] = useState(18);
const [type,setType] = useState("add");

const [gst,setGst] = useState<number | null>(null);
const [total,setTotal] = useState<number | null>(null);

const calculate = ()=>{

if(type === "add"){

const gstAmount = amount * rate / 100;
const totalAmount = amount + gstAmount;

setGst(gstAmount);
setTotal(totalAmount);

}else{

const base = amount / (1 + rate / 100);
const gstAmount = amount - base;

setGst(gstAmount);
setTotal(base);

}

};

return (

<div className="bg-transparent shadow rounded-lg p-6 space-y-6">

<div className="grid md:grid-cols-3 gap-4">

<div>
<label className="block mb-1">
Amount (₹)
</label>

<input
type="number"
value={amount}
onChange={(e)=>setAmount(Number(e.target.value))}
className="border p-3 rounded w-full"
/>
</div>

<div>
<label className="block mb-1">
GST Rate
</label>

<select
value={rate}
onChange={(e)=>setRate(Number(e.target.value))}
className="border p-3 rounded w-full"
>
<option value="5">5%</option>
<option value="12">12%</option>
<option value="18">18%</option>
<option value="28">28%</option>
</select>
</div>

<div>
<label className="block mb-1">
Calculation Type
</label>

<select
value={type}
onChange={(e)=>setType(e.target.value)}
className="border p-3 rounded w-full"
>
<option value="add">Add GST</option>
<option value="remove">Remove GST</option>
</select>
</div>

</div>

<button
onClick={calculate}
className="bg-blue-600 text-white px-6 py-3 rounded w-full"
>
Calculate GST
</button>

{gst !== null && (

<div className="bg-gray-50 p-4 rounded space-y-2">

<p>
<strong>GST Amount:</strong> ₹{gst.toLocaleString(undefined,{maximumFractionDigits:2})}
</p>

<p className="text-lg font-semibold">
{type === "add" ? "Total Amount:" : "Original Amount:"}
{" "}
₹{total?.toLocaleString(undefined,{maximumFractionDigits:2})}
</p>

</div>

)}

</div>

);
}