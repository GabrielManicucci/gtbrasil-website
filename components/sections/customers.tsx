"use client";
import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function Customers() {
  return (
    <section className="section">
      <div className="max-w-3xl mx-auto mb-12">
        <div className="mb-5">
          <p className="label text-center">Customers</p>
          <h2 className="headline text-center">Clientes atendidos</h2>
        </div>
      </div>
      <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          pauseOnHover
        />
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
          pauseOnHover
        />
        <div className="w-full h-full absolute top-0 left-0 z-50 flex">
          <div className="w-[50%] h-full bg-gradient-to-r from-silverTree-50 to-transparent"></div>
          <div className="w-[50%] h-full  bg-gradient-to-l from-silverTree-50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    src: "/customers/facebook logo.svg",
    width: 64,
    height: 64,
  },
  {
    src: "/customers/logo tiktok.svg",
    width: 64,
    height: 64,
  },
  {
    src: "/customers/meta_icon.png.png",
    width: 64,
    height: 64,
  },
  {
    src: "/customers/microsoft logo.png",
    width: 64,
    height: 64,
  },
  {
    src: "/customers/nvidia logo.png",
    width: 64,
    height: 64,
  },
  {
    src: "/customers/sap_icon.jpeg.png",
    width: 64,
    height: 64,
  },
  {
    src: "/customers/sebrae_santa_catarina_icon.jpeg.png",
    width: 64,
    height: 64,
  },
  {
    src: "/customers/vivoIcon.png",
    width: 64,
    height: 64,
  },
  {
    src: "/customers/x logo.png",
    width: 64,
    height: 64,
  },
];
