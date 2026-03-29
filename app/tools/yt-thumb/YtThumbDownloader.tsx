"use client";

import { useState } from "react";

export default function YtThumbDownloader() {

const [url,setUrl] = useState("");
const [videoId,setVideoId] = useState("");

const extractVideoId = (url:string)=>{

const regExp =
/(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([^&\n?#]+)/;

const match = url.match(regExp);

return match ? match[1] : null;

};

const handleFetch = ()=>{

const id = extractVideoId(url);

if(!id){
alert("Invalid YouTube URL");
return;
}

setVideoId(id);

};

const thumbnails = videoId
? [
{
label:"Max Resolution",
url:`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
},
{
label:"HD Quality",
url:`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
},
{
label:"Medium Quality",
url:`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
},
{
label:"Standard Quality",
url:`https://img.youtube.com/vi/${videoId}/sddefault.jpg`
}
]
: [];

return (

<div className="bg-transparent shadow rounded-lg p-6 space-y-6">

<input
type="text"
placeholder="Paste YouTube URL"
value={url}
onChange={(e)=>setUrl(e.target.value)}
className="border p-3 rounded w-full"
/>

<button
onClick={handleFetch}
className="bg-red-600 text-white px-6 py-3 rounded w-full"
>
Get Thumbnails
</button>

{thumbnails.length > 0 && (

<div className="grid md:grid-cols-2 gap-6">

{thumbnails.map((thumb,index)=>(
<div
key={index}
className="border p-4 rounded text-center space-y-2"
>

<p className="font-semibold">
{thumb.label}
</p>

<img
src={thumb.url}
alt="YouTube Thumbnail"
className="mx-auto"
/>

<a
href={thumb.url}
download
className="inline-block bg-blue-600 text-white px-4 py-2 rounded"
>
Download
</a>

</div>
))}

</div>

)}

</div>

);
}