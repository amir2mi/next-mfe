import Image from "next/image";

interface RandomImagesProps {
  borderColor: string;
}

export default function RandomImages({ borderColor }: RandomImagesProps) {
  return (
    <main>
      <h1>Page: Random Images Gallery</h1>
      <Image
        style={{
          borderRadius: 15,
          borderWidth: 4,
          borderStyle: "solid",
          borderColor: borderColor || "red",
        }}
        src="https://picsum.photos/512/512/?random"
        height={512}
        width={512}
        alt="a random image"
      />
    </main>
  );
}
