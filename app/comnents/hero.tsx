import foto from "../111.jpg";

export default function Hero() {
    return (
       <div className="container mx-auto p-2 text-center">
         <h1 className="text-black-300 font-bold">CV Online</h1>
         <h1 className="text-3x1">RYAN MAULANA</h1>
         <Profile />
         <p>
         <h1>Saya Adalah seorang mahasiswa Jurusan sistem informasi Semester 5 di Universitas </h1>
         </p>
       </div>
     );
    }

function Profile() {
    return <img src={foto.src} alt="Ryan Maulana Profile" className="fotoku" />;
}