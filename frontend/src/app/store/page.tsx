import React from "react";
import { PRODUCTS } from "@/data/products";
import StoreClient from "./StoreClient";

export default function StorePage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gray-400 selection:text-black">
      <main className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 pt-32 md:pt-40 pb-20 min-h-screen">
        <StoreClient initialProducts={PRODUCTS} />
      </main>
    </div>
  );
}
