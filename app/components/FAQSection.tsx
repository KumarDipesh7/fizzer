"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Will this work for my device?",
    answer:
      "Yes — sensitivity and control layouts are tested across a wide range of screen sizes and devices. If something doesn't feel right, reach out and I'll help you adjust it.",
  },
  {
    question: "How do I receive my setup after payment?",
    answer:
      "Delivery is instant — you'll get your code, layout file, or asset pack immediately after checkout, along with a setup guide.",
  },
  {
    question: "Is there a refund if it doesn't work for me?",
    answer:
      "Follow the included drill/setup guide first. Most issues are solved after following the included instructions. If your setup genuinely doesn't work for your device, contact me directly and I'll personally help you.",
  },
  {
    question: "Can I book a 1-on-1 session for something not listed?",
    answer:
      "Yes. The 1-on-1 session is completely personalized. Whether it's gameplay, sensitivity, content creation, YouTube growth or anything else, we'll work on exactly what you need.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden border-y border-white/10 bg-[#171313] py-28 text-white"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-0 top-0 h-[520px] w-[520px]"
          style={{
            background:
              "radial-gradient(circle, rgba(170,20,35,.12), transparent 72%)",
          }}
        />

        <div
          className="absolute right-0 bottom-0 h-[520px] w-[520px]"
          style={{
            background:
              "radial-gradient(circle, rgba(170,20,35,.08), transparent 72%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-20 max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.45em] text-red-500">
            • QUESTIONS
          </p>

          <h2 className="text-5xl font-black uppercase leading-none md:text-7xl">
            BEFORE YOU BUY
          </h2>
        </div>

        {/* FAQ */}

        <div className="max-w-5xl">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="border-b border-white/10 transition-colors duration-300 hover:border-red-500/20"
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-start justify-between gap-10 py-9 text-left"
              >
                <h3 className="text-xl font-bold md:text-[32px] md:leading-tight">
                  {faq.question}
                </h3>

                <span
                  className={`mt-1 text-3xl font-light text-red-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {/* Animated Answer */}

              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] pb-10"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="max-w-4xl text-lg leading-9 text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Accent */}

        <div className="mt-16 flex items-center gap-5">
          <div className="h-px w-24 bg-red-600" />
          <span className="text-xs uppercase tracking-[0.35em] text-gray-500">
            Still have a question? Contact me directly.
          </span>
        </div>
      </div>
    </section>
  );
}