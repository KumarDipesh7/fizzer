import Image from "next/image";
import Link from "next/link";

type NewsCardProps = {
  image: string;
  title: string;
  description: string;
};

export default function NewsCard({
  image,
  title,
  description,
}: NewsCardProps) {
  return (
    <div className="bg-black text-white">
      {/* Image */}
      <div className="relative h-[420px] w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover grayscale contrast-125"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-3 text-xl font-extrabold uppercase">{title}</h3>
        <p className="mb-6 text-sm text-gray-300">{description}</p>

        <Link
          href="#"
          className="inline-flex items-center gap-2 bg-red-600 px-5 py-2 text-xs font-bold uppercase tracking-wide hover:bg-red-700 transition"
        >
          Learn More <span>›</span>
        </Link>
      </div>
    </div>
  );
}
