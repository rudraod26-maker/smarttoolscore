"use client";

import { useState, useRef } from "react";
import QRCode from "qrcode";

export default function QrGenerator() {

const [text,setText] = useState("");
const [qr,setQr] = useState("");
const [color,setColor] = useState("#000000");
const [bgColor,setBgColor] = useState("#ffffff");
const [size,setSize] = useState(300);
const canvasRef = useRef<HTMLCanvasElement>(null);

const generateQR = async () => {

if(!text){
alert("Enter text or URL");
return;
}

const canvas = canvasRef.current;

if(canvas){

await QRCode.toCanvas(canvas,text,{
width:size,
color:{
dark:color,
light:bgColor
}
});

setQr(canvas.toDataURL());

}

};

const downloadPNG = () => {

const canvas = canvasRef.current;

if(!canvas) return;

const link = document.createElement("a");

link.download = "qr-code.png";
link.href = canvas.toDataURL();
link.click();

};

const downloadSVG = async () => {

const svg = await QRCode.toString(text,{
type:"svg",
width:size,
color:{
dark:color,
light:bgColor
}
});

const blob = new Blob([svg],{type:"image/svg+xml"});

const url = URL.createObjectURL(blob);

const link = document.createElement("a");

link.href = url;
link.download = "qr-code.svg";
link.click();

};

const handleLogo = (e: any) => {

const file = e.target.files[0];

if(!file) return;

const canvas = canvasRef.current;

if(!canvas) return;

const ctx = canvas.getContext("2d");

const img = new Image();

img.src = URL.createObjectURL(file);

img.onload = () => {

const sizeLogo = canvas.width * 0.2;

ctx?.drawImage(
img,
(canvas.width-sizeLogo)/2,
(canvas.height-sizeLogo)/2,
sizeLogo,
sizeLogo
);

};

};

return (

<div className="bg-transparent shadow rounded-lg p-6 space-y-6">

<div className="grid md:grid-cols-2 gap-4">

<input
type="text"
placeholder="Enter URL or text"
value={text}
onChange={(e)=>setText(e.target.value)}
className="border p-3 rounded w-full"
/>

<select
value={size}
onChange={(e)=>setSize(Number(e.target.value))}
className="border p-3 rounded"
>
<option value="200">Small</option>
<option value="300">Medium</option>
<option value="500">Large</option>
</select>

</div>

<div className="grid md:grid-cols-2 gap-4">

<label>
QR Color
<input
type="color"
value={color}
onChange={(e)=>setColor(e.target.value)}
className="ml-2"
/>
</label>

<label>
Background
<input
type="color"
value={bgColor}
onChange={(e)=>setBgColor(e.target.value)}
className="ml-2"
/>
</label>

</div>

<div>

<label className="block mb-2">
Add Logo
</label>

<input
type="file"
accept="image/*"
onChange={handleLogo}
/>

</div>

<button
onClick={generateQR}
className="bg-blue-600 text-white px-6 py-3 rounded w-full"
>
Generate QR Code
</button>

<div className="text-center space-y-4">

<canvas ref={canvasRef} className="mx-auto"></canvas>

<div className="space-x-3">

<button
onClick={downloadPNG}
className="bg-green-600 text-white px-4 py-2 rounded"
>
Download PNG
</button>

<button
onClick={downloadSVG}
className="bg-purple-600 text-white px-4 py-2 rounded"
>
Download SVG
</button>

</div>

</div>

</div>

);

}