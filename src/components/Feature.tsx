import Image from "next/image";

export default function FeaturedIn() {
  return (
    <section className="py-10">
      <h2 className="text-center text-lg font-semibold uppercase tracking-wide mb-10">
        AS FEATURED IN
      </h2>
      <div className="flex justify-center items-center gap-20 flex-wrap">
        {/* HuffPost */}
        <Image
          src="/featured1.webp" // update your image path
          alt="HuffPost"
          width={180}
          height={70}
          className="object-contain"
        />

        {/* Forbes */}
        <Image
          src="/featured2.webp" // update your image path
          alt="Forbes"
          width={180}
          height={70}
          className="object-contain"
        />

        {/* Mashable */}
        <Image
          src="/featured3.webp" // update your image path
          alt="Mashable"
          width={180}
          height={70}
          className="object-contain"
        />
      </div>
    </section>
  );
}
