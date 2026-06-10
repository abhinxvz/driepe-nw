import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PRODUCTS, getStaticProductById } from "@/data/products";
import AddToCartSection from "./AddToCartSection";
import { Metadata } from "next";

const isVideo = (url: string) => /\.(mp4|webm|ogg|mov)$/i.test(url);

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getStaticProductById(id);

  if (!product) return { title: "Not Found | Driepe" };

  return {
    title: `${product.title} | DRIEPE`,
    description:
      product.description || `Buy the new ${product.title} at Driepe.`,
    openGraph: {
      title: product.title,
      description:
        product.description || `Buy the new ${product.title} at Driepe.`,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductDetailsPage({ params }: Props) {
  const { id } = await params;
  const product = getStaticProductById(id);

  if (!product) {
    notFound();
  }

  const allMedia = [product.image, ...(product.gallery || [])];
  const isSoldOut = product.status === "SOLD OUT";

  const discount =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) *
            100,
        )
      : null;

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gray-400 selection:text-black">
      <main className="w-full max-w-[1600px] mx-auto px-4 md:px-8 pt-32 md:pt-40 pb-16 min-h-screen">
        <Link
          href="/store"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors tracking-widest text-sm font-bold uppercase mb-12"
        >
          <ArrowLeft size={16} /> Back to Collection
        </Link>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          {/* LEFT: Vertical Media Stack */}
          <div className="w-full lg:w-3/5 flex flex-col gap-4">
            {allMedia.map((mediaUrl, index) => {
              const video = isVideo(mediaUrl);
              return (
                <div
                  key={`${mediaUrl}-${index}`}
                  className="relative w-full aspect-[4/5] bg-zinc-900 border border-zinc-800"
                >
                  {index === 0 && product.status && (
                    <div className="absolute top-6 left-6 z-20 px-4 py-2 text-sm font-black tracking-widest uppercase bg-white text-black shadow-lg">
                      {product.status}
                    </div>
                  )}

                  {video ? (
                    <video
                      src={mediaUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className={`w-full h-full object-cover ${isSoldOut ? "grayscale opacity-50" : ""}`}
                    />
                  ) : (
                    <Image
                      src={mediaUrl}
                      alt={`${product.title} - View ${index + 1}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className={`object-cover ${isSoldOut ? "grayscale opacity-50" : ""}`}
                      priority={index === 0}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT: Product Details */}
          <div className="w-full lg:w-2/5 flex flex-col pt-4 lg:sticky lg:top-32">
            <h1
              className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-4"
              style={{ fontFamily: "var(--font-koulen), Impact, sans-serif" }}
            >
              {product.title}
            </h1>

            {/* Price block */}
            <div className="flex items-baseline gap-4 mb-2">
              <p className="text-2xl font-medium tracking-widest text-white">
                ₹{product.price.toLocaleString("en-IN")}
              </p>
              {product.originalPrice && (
                <p className="text-lg font-medium tracking-widest text-zinc-500 line-through">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </p>
              )}
              {discount && (
                <span className="text-sm font-black tracking-widest text-green-400">
                  {discount}% OFF
                </span>
              )}
            </div>
            {product.originalPrice && (
              <p className="text-xs tracking-widest text-zinc-500 uppercase mb-8">
                You save ₹
                {(product.originalPrice - product.price).toLocaleString(
                  "en-IN",
                )}
              </p>
            )}

            <div className="w-full h-[1px] bg-zinc-800 mb-8" />

            <div className="text-zinc-400 leading-relaxed tracking-wide mb-12 uppercase text-sm whitespace-pre-line">
              {product.description ||
                "Archival piece. Heavyweight construction. Refer to size guide for exact measurements."}
            </div>

            <AddToCartSection product={product} />
          </div>
        </div>
      </main>
    </div>
  );
}
