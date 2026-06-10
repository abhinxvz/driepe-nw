import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "checkmateatelier.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "daigenco.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.breakout.com.pk",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.mxjofficial.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pk.ethnc.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
