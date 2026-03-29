"use client";

import { useState } from "react";

export default function SipCalculator() {

const [monthly,setMonthly] = useState(5000);
const [rate,setRate] = useState(12);
const [years,setYears] = useState(10);

const [futureValue,setFutureValue] = useState<number | null>(null);
const [invested,setInvested] = useState<number | null>(null);
const [returns,setReturns] = useState<number | null>(null);

const calculate = ()=>{

const months = years * 12;
const monthlyRate = rate / 12 / 100;

const fv =
monthly *
(
(Math.pow(1 + monthlyRate, months) - 1)
/
monthlyRate
)
*
(1 + monthlyRate);

const investedAmount = monthly * months;
const gain = fv - investedAmount;

setFutureValue(fv);
setInvested(investedAmount);
setReturns(gain);

};

return (

<div className="bg-transparent shadow rounded-lg p-6 space-y-6">

<div className="grid md:grid-cols-3 gap-4">

<div>
<label className="block mb-1">
Monthly Investment (₹)
</label>

<input
type="number"
value={monthly}
onChange={(e)=>setMonthly(Number(e.target.value))}
className="border p-3 rounded w-full"
/>
</div>

<div>
<label className="block mb-1">
Expected Return (%)
</label>

<input
type="number"
value={rate}
onChange={(e)=>setRate(Number(e.target.value))}
className="border p-3 rounded w-full"
/>
</div>

<div>
<label className="block mb-1">
Time Period (Years)
</label>

<input
type="number"
value={years}
onChange={(e)=>setYears(Number(e.target.value))}
className="border p-3 rounded w-full"
/>
</div>

</div>

<button
onClick={calculate}
className="bg-blue-600 text-white px-6 py-3 rounded w-full"
>
Calculate SIP
</button>

{futureValue && (

<div className="bg-gray-50 p-4 rounded space-y-2">

<p>
<strong>Total Invested:</strong> ₹{invested?.toLocaleString()}
</p>

<p>
<strong>Total Returns:</strong> ₹{returns?.toLocaleString()}
</p>

<p className="text-lg font-semibold">
Future Value: ₹{futureValue.toLocaleString(undefined,{maximumFractionDigits:0})}
</p>

</div>

)}

</div>

);
}