import Image from "next/image";
import {
  FaInstagram,
  FaXTwitter,
  FaTiktok,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa6";

export default function JoinSection() {
  const socialLinks = [
    { Icon: FaInstagram, href: "https://www.instagram.com/fizzer_bgmi?igsh=cDM2aDVjdHB2bTcw" },
    { Icon: FaYoutube, href: "https://www.youtube.com/@OnlyFizZer" },
    { Icon: FaDiscord, href: "#" },
  ];
  return (
    <section id="socials" className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT — RED PANEL */}
        <div className="bg-red-600 p-16 flex flex-col justify-center">
          <h2 className="mb-12 text-6xl font-extrabold uppercase leading-tight text-white">
            Join
            <br />
            FizZer
            <br />
            Family
          </h2>

          {/* Social icons */}
          <div className="flex gap-4 flex-wrap">
            {socialLinks.map(({ Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-16 w-16 items-center justify-center bg-white text-black hover:bg-black hover:text-white transition"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT — IMAGE */}
        <div className="relative min-h-[420px] lg:min-h-[600px]">
          <Image
            src="/join-team.jpg"
            alt="FasterUI Team"
            fill
            className="object-cover grayscale"
            priority
          />
        </div>

      </div>
    </section>
  );
}
