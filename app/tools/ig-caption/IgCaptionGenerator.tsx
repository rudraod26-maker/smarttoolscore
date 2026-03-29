"use client";

import { useState } from "react";

type Category = "travel" | "selfie" | "motivation" | "food";

const captions: Record<Category, string[]> = {

travel:[
"Exploring the world one step at a time 🌍",
"Adventure is calling ✈️",
"Collecting memories around the globe",
"Wander often, wonder always"
],

selfie:[
"Confidence level: Selfie with no filter 😎",
"Just me being me",
"Self love looks good on me",
"Smile big, shine brighter"
],

motivation:[
"Dream big. Work hard. Stay focused.",
"Success starts with self belief",
"Your only limit is you",
"Consistency beats talent"
],

food:[
"Good food = good mood 🍕",
"Serving delicious vibes",
"Food before everything",
"Life is better with good food"
]

};

const hashtags: Record<Category,string> = {

travel:"#travel #wanderlust #adventure",
selfie:"#selfie #selflove #confidence",
motivation:"#motivation #success #mindset",
food:"#food #foodie #yummy"

};

export default function IgCaptionGenerator(){

const [category,setCategory] = useState<Category>("travel");
const [result,setResult] = useState("");

const generateCaption = ()=>{

const options = captions[category];

const random = options[Math.floor(Math.random()*options.length)];

setResult(random + "\n\n" + hashtags[category]);

};

const copyText = ()=>{

navigator.clipboard.writeText(result);

alert("Caption copied!");

};

return(

<div className="bg-transparent shadow rounded-lg p-6 space-y-6">

<select
value={category}
onChange={(e)=>setCategory(e.target.value as Category)}
className="border p-3 rounded w-full"
>

<option value="travel">Travel</option>
<option value="selfie">Selfie</option>
<option value="motivation">Motivation</option>
<option value="food">Food</option>

</select>

<button
onClick={generateCaption}
className="bg-purple-600 text-white px-6 py-3 rounded w-full"
>
Generate Caption
</button>

{result && (

<div className="bg-gray-50 p-4 rounded space-y-3">

<p className="whitespace-pre-line">
{result}
</p>

<button
onClick={copyText}
className="bg-green-600 text-white px-4 py-2 rounded"
>
Copy Caption
</button>

</div>

)}

</div>

);

}