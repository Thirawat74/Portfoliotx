import Image from "next/image";

export function QuoteImageSection() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">

      {/* รูปพื้นหลัง */}
      <Image
        src="/img/20260108_142319(1).jpg"
        alt="quote background"
        fill
        className="object-cover"
      />

      {/* overlay ไล่เงาด้านล่าง */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* ข้อความ */}
      <div className="absolute inset-0 flex items-end">
        <div className="max-w-4xl px-6 md:px-16 pb-16">
          <p className="text-white text-2xl md:text-4xl font-bold leading-relaxed drop-shadow-lg">
            “โค้ดที่ดีไม่ได้เกิดจากการเขียนให้รันได้  
            แต่เกิดจากการเข้าใจตรรกะ  
            จนสามารถควบคุมมันได้”
          </p>
        </div>
      </div>

    </section>
  );
}
