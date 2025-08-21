import Image from "next/image";

export default function ScrollingLogos() {
  return (
    <div className="overflow-hidden bg-white py-3 border-gray-200 border-t-2 border-b-2 mb-2">
      <div className="flex animate-scroll gap-280">
        {/* Duplicate the list twice for seamless looping */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-30 items-center">
            <Image
              src="/ban1.webp"
              alt="TIME"
              width={220}
              height={50}
              className="object-fit"
            />
            <Image
              src="/ban2.webp"
              alt="Medium"
              width={220}
              height={50}
              className="object-fit"
            />
            <Image
              src="/ban4.png"
              alt="Tampa Bay Times"
              width={220}
              height={50}
              className="object-fit"
            />
            <Image
              src="/ban5.webp"
              alt="Chicago Tribune"
              width={220}
              height={50}
              className="object-fit"
            />
           
           <Image
              src="/ban6.png"
              alt="Business News Daily"
              width={220}
              height={50}
              className="object-contain"
            />
             <Image
              src="/ban7.png"
              alt="Business News Daily"
              width={220}
              height={90}
              className="object-contain"
            />
             <Image
              src="/ban8.png"
              alt="Business News Daily"
              width={220}
              height={50}
              className="object-contain"
            />
             <Image
              src="/ban10.webp"
              alt="Business News Daily"
              width={220}
              height={50}
              className="object-contain"
            /> <Image
            src="/ban11.webp"
            alt="Business News Daily"
            width={220}
            height={50}
            className="object-contain"
          />
            <Image
              src="/ban8.png"
              alt="Best"
              width={220}
              height={90}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
