"use client";

import { useState } from "react";
import imageCompression from "browser-image-compression";

export default function ImageCompressor() {

const [image,setImage] = useState<File | null>(null);
const [compressed,setCompressed] = useState<string>("");
const [originalSize,setOriginalSize] = useState<number>(0);
const [compressedSize,setCompressedSize] = useState<number>(0);
const [quality,setQuality] = useState(0.7);

const handleUpload = (e:any)=>{
const file = e.target.files[0];

if(!file) return;

setImage(file);
setOriginalSize(file.size);
};

const compressImage = async ()=>{

if(!image){
alert("Upload an image first");
return;
}

const options = {
maxSizeMB:1,
maxWidthOrHeight:1920,
useWebWorker:true,
initialQuality:quality
};

const compressedFile = await imageCompression(image,options);

setCompressedSize(compressedFile.size);

const url = URL.createObjectURL(compressedFile);

setCompressed(url);

};

return (

<div className="bg-transparent shadow rounded-lg p-6 space-y-6">

<input
type="file"
accept="image/*"
onChange={handleUpload}
/>

<div>

<label className="block mb-2">
Compression Quality
</label>

<input
type="range"
min="0.1"
max="1"
step="0.1"
value={quality}
onChange={(e)=>setQuality(Number(e.target.value))}
className="w-full"
/>

<p className="text-sm text-gray-500">
Quality: {Math.round(quality*100)}%
</p>

</div>

<button
onClick={compressImage}
className="bg-blue-600 text-white px-6 py-3 rounded w-full"
>
Compress Image
</button>

{compressed && (

<div className="space-y-4 text-center">

<img
src={compressed}
alt="Compressed Image"
className="mx-auto max-h-64"
/>

<div className="text-sm text-gray-600">

<p>
Original Size: {(originalSize/1024).toFixed(2)} KB
</p>

<p>
Compressed Size: {(compressedSize/1024).toFixed(2)} KB
</p>

<p>
Saved: {Math.round((1 - compressedSize/originalSize) * 100)}%
</p>

</div>

<a
href={compressed}
download="compressed-image.jpg"
className="inline-block bg-green-600 text-white px-5 py-2 rounded"
>
Download Image
</a>

</div>

)}

</div>

);

}