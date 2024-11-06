export default function RiwayatPekerjaan() {
    return(
        <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-2xl sm:text-3xl mb-8">Riwayat Pekerjaan</h2>
        <RowRiwayatPekerjaanProps tahunk="2020" intansi="yayasan alif" bekerjaseb="desain grafis" jabatan="header" />
        <RowRiwayatPekerjaanProps tahunk="2022" intansi="klinik dr. candra" bekerjaseb="perekam medis" jabatan="manager" />
        <RowRiwayatPekerjaanProps tahunk="2023" intansi="jaya store" bekerjaseb="programer" jabatan="header" />
        <RowRiwayatPekerjaanProps tahunk="2024" intansi="mnc grup" bekerjaseb="manager" jabatan="header" />
      </div>
  );
}
interface RowRiwayatPekerjaanProps {
        tahunk: string;
        intansi: string;
        bekerjaseb: string;
        jabatan: string;
      }

function RowRiwayatPekerjaanProps (props: RowRiwayatPekerjaanProps) {
    return (
    <div className="border-2 border-red-500/75 rounded-lg bg-white-800 p-2 my-5">
             <div className="grid grid-cols-12 gap-2">
             <div className="col-span-12 md:col-span-4">{props.tahunk}</div>
             <div className="col-span-12 md:col-span-4">{props.intansi}</div>
             <div className="col-span-12 md:col-span-4">{props.bekerjaseb}</div>
            </div>
        </div>
    );
}