"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, X } from "lucide-react";
import { toast } from "sonner";

export default function Footer() {
  const [showModelForm, setShowModelForm] = useState(false);
  const [formData, setFormData] = useState({
    instagram: "",
    fullName: "",
    email: "",
    phone: "",
    portfolio: "",
    followerCount: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSocialClick = (e: React.MouseEvent, platform: string) => {
    e.preventDefault();
    toast(`${platform} - Under Construction`, {
      description: "Will be available soon. Stay tuned!",
      duration: 3000,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const webhookUrl = "https://discord.com/api/webhooks/1251092354027229224/Y0dXgAV7sespFXL6OEcEfbO2qz4gCwac5-fNfMYqBFOcadheAzobfkqwGyrcWmBgMJ1b";
      
      const embed = {
        title: "🌟 NEW MODEL APPLICATION",
        color: 0x000000,
        fields: [
          {
            name: "📸 INSTAGRAM HANDLE",
            value: `@${formData.instagram}` || "N/A",
            inline: true,
          },
          {
            name: "👤 FULL NAME",
            value: formData.fullName || "N/A",
            inline: true,
          },
          {
            name: "📧 EMAIL",
            value: formData.email || "N/A",
            inline: false,
          },
          {
            name: "📱 PHONE NUMBER",
            value: formData.phone || "N/A",
            inline: true,
          },
          {
            name: "📊 FOLLOWER COUNT",
            value: formData.followerCount || "N/A",
            inline: true,
          },
          {
            name: "🔗 PORTFOLIO LINK",
            value: formData.portfolio || "N/A",
            inline: false,
          },
          {
            name: "💭 WHY MODEL WITH US?",
            value: formData.message || "N/A",
            inline: false,
          },
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: "DRIEPE MODEL APPLICATION",
        },
      };

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          embeds: [embed],
        }),
      });

      if (response.ok) {
        toast.success("APPLICATION SUBMITTED", {
          description: "We'll review your application and get back to you soon!",
          duration: 4000,
        });
        setShowModelForm(false);
        setFormData({
          instagram: "",
          fullName: "",
          email: "",
          phone: "",
          portfolio: "",
          followerCount: "",
          message: "",
        });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast.error("SUBMISSION FAILED", {
        description: "Please try again or contact us directly.",
        duration: 4000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="w-full bg-[#050505] border-t border-zinc-900 pt-16 pb-8 px-6 md:px-12 text-white mt-auto z-40 relative">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-24 mb-16">
        {/* Brand Column */}
        <div className="flex flex-col md:w-1/3">
          <img
            src="/logo.png"
            alt="Driepe Logo"
            className="h-20 object-contain self-start mb-6"
          />
          <p className="text-zinc-500 text-sm tracking-widest leading-relaxed uppercase max-w-sm">
            Redefining conventional streetwear.<br />
            Since 2026.
          </p>
        </div>

        {/* Links Columns */}
        <div className="flex gap-16 md:gap-24 md:w-2/3 md:justify-end">
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-black tracking-widest uppercase mb-2">
              Shop
            </h4>
            <Link
              href="/store"
              className="text-zinc-400 hover:text-white text-sm tracking-widest uppercase transition-colors"
            >
              All Products
            </Link>
            <Link
              href="/size-guide"
              className="text-zinc-400 hover:text-white text-sm tracking-widest uppercase transition-colors"
            >
              Size Guide
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-black tracking-widest uppercase mb-2">
              Support
            </h4>
            <Link
              href="/faq"
              className="text-zinc-400 hover:text-white text-sm tracking-widest uppercase transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/shipping"
              className="text-zinc-400 hover:text-white text-sm tracking-widest uppercase transition-colors"
            >
              Shipping
            </Link>
            <Link
              href="/returns"
              className="text-zinc-400 hover:text-white text-sm tracking-widest uppercase transition-colors"
            >
              Returns
            </Link>
            <Link
              href="/contact"
              className="text-zinc-400 hover:text-white text-sm tracking-widest uppercase transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              className="text-zinc-400 hover:text-white text-sm tracking-widest uppercase transition-colors"
            >
              Privacy Policy
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-black tracking-widest uppercase mb-2">
              Join Us
            </h4>
            <button
              onClick={() => setShowModelForm(true)}
              className="text-zinc-400 hover:text-white text-sm tracking-widest uppercase transition-colors text-left"
            >
              Model With Us
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1600px] mx-auto border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-600 text-xs tracking-widest uppercase">
          &copy; {new Date().getFullYear()} DRIEPE. ALL RIGHTS RESERVED.
        </p>

        <div className="flex gap-6 items-center">
          <button
            onClick={(e) => handleSocialClick(e, "Instagram")}
            className="text-zinc-600 hover:text-white transition-colors cursor-pointer"
            aria-label="Instagram - Coming Soon"
          >
            <Instagram size={20} />
          </button>
          <button
            onClick={(e) => handleSocialClick(e, "X (Twitter)")}
            className="text-zinc-600 hover:text-white transition-colors cursor-pointer"
            aria-label="X - Coming Soon"
          >
            <Twitter size={20} />
          </button>
        </div>
      </div>

      {/* Model Application Modal */}
      {showModelForm && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100]"
            onClick={() => setShowModelForm(false)}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-black border-2 border-white w-full max-w-3xl my-8 relative">
              {/* Decorative Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-white" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-white" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-white" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-white" />

              {/* Header */}
              <div className="border-b-2 border-white p-4 md:p-6 flex justify-between items-center bg-black relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 text-9xl font-black text-white" style={{ fontFamily: "var(--font-koulen), Impact, sans-serif" }}>
                    MODEL
                  </div>
                </div>
                <h2 className="text-xl md:text-3xl font-black tracking-widest uppercase z-10" style={{ fontFamily: "var(--font-koulen), Impact, sans-serif" }}>
                  MODEL WITH US
                </h2>
                <button
                  onClick={() => setShowModelForm(false)}
                  className="text-white hover:text-zinc-400 transition-colors z-10"
                >
                  <X size={24} className="md:hidden" />
                  <X size={28} className="hidden md:block" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-4 md:p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Instagram Handle */}
                  <div>
                    <label className="block text-[10px] md:text-xs font-black tracking-widest uppercase mb-2" style={{ fontFamily: "var(--font-koulen), Impact, sans-serif" }}>
                      INSTAGRAM HANDLE *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm">@</span>
                      <input
                        type="text"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleInputChange}
                        placeholder="your_instagram"
                        required
                        className="w-full bg-white text-black border-2 border-zinc-300 p-2 pl-8 text-xs md:text-sm tracking-wide placeholder:text-zinc-400 focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-[10px] md:text-xs font-black tracking-widest uppercase mb-2" style={{ fontFamily: "var(--font-koulen), Impact, sans-serif" }}>
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      className="w-full bg-white text-black border-2 border-zinc-300 p-2 text-xs md:text-sm tracking-wide placeholder:text-zinc-400 focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[10px] md:text-xs font-black tracking-widest uppercase mb-2" style={{ fontFamily: "var(--font-koulen), Impact, sans-serif" }}>
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      className="w-full bg-white text-black border-2 border-zinc-300 p-2 text-xs md:text-sm tracking-wide placeholder:text-zinc-400 focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-[10px] md:text-xs font-black tracking-widest uppercase mb-2" style={{ fontFamily: "var(--font-koulen), Impact, sans-serif" }}>
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 9876543210"
                      required
                      className="w-full bg-white text-black border-2 border-zinc-300 p-2 text-xs md:text-sm tracking-wide placeholder:text-zinc-400 focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>

                {/* Portfolio Link */}
                <div>
                  <label className="block text-[10px] md:text-xs font-black tracking-widest uppercase mb-2" style={{ fontFamily: "var(--font-koulen), Impact, sans-serif" }}>
                    PORTFOLIO LINK (GOOGLE DRIVE) *
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    placeholder="https://drive.google.com/..."
                    required
                    className="w-full bg-white text-black border-2 border-zinc-300 p-2 text-xs md:text-sm tracking-wide placeholder:text-zinc-400 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                {/* Follower Count */}
                <div>
                  <label className="block text-[10px] md:text-xs font-black tracking-widest uppercase mb-2" style={{ fontFamily: "var(--font-koulen), Impact, sans-serif" }}>
                    FOLLOWER COUNT *
                  </label>
                  <select
                    name="followerCount"
                    value={formData.followerCount}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white text-black border-2 border-zinc-300 p-2 text-xs md:text-sm tracking-wide focus:outline-none focus:border-black transition-colors"
                  >
                    <option value="">Select range</option>
                    <option value="0-1K">0 - 1K</option>
                    <option value="1K-5K">1K - 5K</option>
                    <option value="5K-10K">5K - 10K</option>
                    <option value="10K-50K">10K - 50K</option>
                    <option value="50K-100K">50K - 100K</option>
                    <option value="100K+">100K+</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] md:text-xs font-black tracking-widest uppercase mb-2" style={{ fontFamily: "var(--font-koulen), Impact, sans-serif" }}>
                    WHY DO YOU WANT TO MODEL WITH US? *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about yourself..."
                    required
                    rows={3}
                    className="w-full bg-white text-black border-2 border-zinc-300 p-2 text-xs md:text-sm tracking-wide placeholder:text-zinc-400 focus:outline-none focus:border-black resize-none transition-colors"
                  />
                </div>

                {/* Decorative Divider */}
                <div className="flex items-center gap-4 my-4">
                  <div className="flex-1 h-[2px] bg-white"></div>
                  <span className="text-white text-xs tracking-widest font-black" style={{ fontFamily: "var(--font-koulen), Impact, sans-serif" }}>★</span>
                  <div className="flex-1 h-[2px] bg-white"></div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white border-2 border-white py-3 text-xs md:text-sm font-black tracking-widest uppercase hover:bg-white hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                  style={{ fontFamily: "var(--font-koulen), Impact, sans-serif" }}
                >
                  <span className="relative z-10">{isSubmitting ? "SUBMITTING..." : "SUBMIT APPLICATION"}</span>
                  <div className="absolute inset-0 bg-white transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                </button>

                {/* Info Text */}
                <p className="text-zinc-500 text-[10px] text-center tracking-widest uppercase">
                  We review all applications • Expect a response within 72 hours
                </p>
              </form>
            </div>
          </div>
        </>
      )}
    </footer>
  );
}
