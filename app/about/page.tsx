import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen text-center flex flex-col justify-center items-center my-12 mx-4">
      <p className="text-2xl font-medium my-4">About Us 🤫</p>
      <div className="flex gap-4 items-center justify-center">
        <div className="bg-white rounded-lg border p-8">
          <div className="flex flex-col items-center">
            <Image
              src="/profil1.png" // Ganti dengan path gambar profil Anda
              alt="Dhimas F"
              width={100}
              height={100}
              className="rounded-full border-4 border-blue-500"
            />
            <h1 className="lg:text-3xl font-bold mt-6">D~F</h1>
          </div>
        </div>
        <div className="bg-white rounded-lg border p-8">
          <div className="flex flex-col items-center">
            <Image
              src="/profil1.png" // Ganti dengan path gambar profil Anda
              alt="Dhimas F"
              width={100}
              height={100}
              className="rounded-full border-4 border-blue-500"
            />
            <h1 className="lg:text-3xl font-bold mt-6">C~A</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
