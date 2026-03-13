import Image from "next/image";
import { Button } from "./ui/button";
import background from "@/public/background.png";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linear-to-b from-slate-100 to-blue-100">
      <Image
        src={background}
        alt=""
        fill
        className="absolute opacity-30 object-cover"
      />

      <div className="z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-700 mb-6 leading-tight">
          Sepatu Bersih, Percaya Diri Kembali
        </h2>

        <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
          Layanan laundry sepatu profesional dengan perawatan khusus untuk
          menjaga kualitas dan kebersihan sepatu Anda. Selain itu, kami juga
          menyediakan layanan <span className="font-semibold uppercase">dry clean</span>{" "}
          untuk berbagai kebutuhan seperti tas, topi, dan perlengkapan lainnya,
          sehingga semua barang favorit Anda tetap bersih dan terawat.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={"https://wa.me/6285117618643"}
            className="rounded-xl bg-linear-to-b from-blue-700 to-blue-500 hover:bg-linear-to-t text-white cursor-pointer px-8 py-2.5 text-lg"
          >
            Cuci Sepatu Sekarang
          </Link>
        </div>
      </div>
    </section>
  );
}
