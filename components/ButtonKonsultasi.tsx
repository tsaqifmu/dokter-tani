import Image from "next/image";
import Link from "next/link";

export const ButtonKonsultasi = () => (
  <Link
    href={
      "https://api.whatsapp.com/send?phone=6283134954396&text=Halo%20admin%20Dokter%20Tani%2C%20saya%20ingin%20konsultasi"
    }
    target="_blank"
  >
    <button className="flex w-fit items-center gap-x-2 rounded-lg border-2 border-orangeDokTan bg-orangeDokTan px-4 py-2 shadow-lg transition-all hover:border-orange-400 hover:bg-orange-400 lg:px-6">
      <Image
        src={"/phone.svg"}
        height={20}
        width={20}
        alt="phone logo"
        className="w-4 lg:w-5"
      />
      <h3 className="text-xs text-white lg:text-base">Konsultasi Sekarang</h3>
    </button>
  </Link>
);
