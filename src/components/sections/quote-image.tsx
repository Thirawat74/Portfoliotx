import Image from "next/img";

export function QuoteImageSection() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px]">
      
      {/* รูปพื้นหลัง */}
      <Image
        src="/img/quote.jpg"
        alt="quote background"
        fill
        className="object-cover"
        priority={false}
      />

      {/* overlay ไล่เงา */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* ข้อความ */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-4xl px-6 md:px-16">
          <p className="text-white text-2xl md:text-4xl font-bold leading-relaxed">
            “โค้ดที่ดีไม่ได้เกิดจากการเขียนให้รันได้  
            แต่เกิดจากการเข้าใจตรรกะ  
            จนสามารถควบคุมมันได้”
          </p>
        </div>
      </div>

    </section>
  );
}
