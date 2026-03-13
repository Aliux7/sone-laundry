import Link from "next/link";
import { Button } from "./ui/button";

export function CTA() {
  return (
    <section className="py-20 bg-linear-to-b from-slate-100 to-blue-100 text-slate-700">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-4xl sm:text-5xl font-bold mb-6">
          Siap Membersihkan Sepatu Anda?
        </h3>

        <p className="text-lg text-slate-700 mb-8 max-w-xl mx-auto">
          Percayakan sepatu dan barang favorit Anda kepada layanan laundry
          sepatu dan dry clean profesional dari Sone Laundry. Bersih, rapi,
          dan terawat seperti baru kembali.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={"https://wa.me/6285117618643"}
            className="rounded-xl bg-linear-to-b from-blue-700 to-blue-500 hover:bg-linear-to-t text-white cursor-pointer px-10 py-2.5 text-lg"
          >
            Pesan Sekarang
          </Link>
        </div>
      </div>
    </section>
  );
}
