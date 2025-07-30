"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function DogPage() {
  const [image, setImageDatas] = useState({ width: 500, height: 300, url: "" });

  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/images/search?limit=1", {
      headers: {
        "x-api-key": process.env.DOG_API_KEY || "",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.url) {
          setImageDatas({
            width: data[0].width,
            height: data[0].height,
            url: data[0].url,
          });
        }
      });
  }, []);

  return (
    <div className="flex items-center justify-center flex-col h-screen bg-yellow-100">
      <div className="text-3xl mb-2 text-gray-600">Chien 🐶</div>
      <div className="w-3/4 lg:w-1/2 shadow-lg max-w-3xl">
        {image.url && (
          <Image
            className="rounded-lg w-full h-auto object-cover"
            src={image.url}
            loading="lazy"
            alt="Random Dog"
            width={image.width}
            height={image.height}
          />
        )}
      </div>
    </div>
  );
}
