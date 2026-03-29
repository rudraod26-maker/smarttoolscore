"use client";

import { useState } from "react";

export default function TextCaseConverter() {

const [text,setText] = useState("");

const toUpper = () => setText(text.toUpperCase());

const toLower = () => setText(text.toLowerCase());

const toTitle = () => {

const title = text
.toLowerCase()
.split(" ")
.map(word => word.charAt(0).toUpperCase() + word.slice(1))
.join(" ");

setText(title);

};

const toSentence = () => {

const sentence =
text.charAt(0).toUpperCase() +
text.slice(1).toLowerCase();

setText(sentence);

};

const clearText = () => setText("");

const copyText = () => {

navigator.clipboard.writeText(text);
alert("Copied to clipboard");

};

return (

<div className="bg-transparent shadow rounded-lg p-6 space-y-6">

<textarea
rows={6}
placeholder="Enter or paste text here..."
value={text}
onChange={(e)=>setText(e.target.value)}
className="border p-3 rounded w-full"
/>

<div className="grid md:grid-cols-3 gap-3">

<button
onClick={toUpper}
className="bg-blue-600 text-white px-4 py-2 rounded"
>
UPPERCASE
</button>

<button
onClick={toLower}
className="bg-blue-600 text-white px-4 py-2 rounded"
>
lowercase
</button>

<button
onClick={toTitle}
className="bg-blue-600 text-white px-4 py-2 rounded"
>
Title Case
</button>

<button
onClick={toSentence}
className="bg-blue-600 text-white px-4 py-2 rounded"
>
Sentence case
</button>

<button
onClick={copyText}
className="bg-green-600 text-white px-4 py-2 rounded"
>
Copy
</button>

<button
onClick={clearText}
className="bg-red-600 text-white px-4 py-2 rounded"
>
Clear
</button>

</div>

</div>

);
}