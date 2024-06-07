import Image from "next/image";
import Link from "next/link";

export const ButtonKonsultasi = () => (
  <Link
    href={
      "https://api.whatsapp.com/send?phone=6283134954396&text=Halo%20admin%20Dokter%20Tani%2C%20saya%20ingin%20konsultasi"
    }
    target="_blank"
  >
    <button className="bg-orangeDokTan border-orangeDokTan flex w-fit items-center gap-x-2 rounded-lg border-2 px-6 py-2 shadow-lg transition-all hover:border-orange-400 hover:bg-orange-400">
      <Image
        src={"/phone.svg"}
        height={20}
        width={20}
        alt="phone logo"
        className="fill-white stroke-white text-white"
      />
      <h3>Konsultasi Sekarang</h3>
    </button>
  </Link>
);
