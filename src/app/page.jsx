import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="w-full h-96  ">
        <Image
          src="/img/bg_1.jpeg"
          alt="as"
          width={300}
          height={100}
          className="w-full"
          objectFit="cover"
        />
      </div>
    </main>
  );
}
