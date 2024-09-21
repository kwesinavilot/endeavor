import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center items-between mx-auto max-w-xl">
        <Image
          src="https://steamuserimages-a.akamaihd.net/ugc/969851683423281150/FD02F89E5F735CAF2FCB4579BDDC11E299657213/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
          alt="Endeavor"
          width={400}
          height={400}
          priority
        />

        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-4xl font-bold">Build Something Phenominal!</h1>
          
          <p className="text-lg">
            Endeavor is a powerful and versatile character in the world of boilerplates. With a wide range of abilities and a unique playstyle,
            Endeavor is a force to be reckoned with.
          </p>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://endeavorblp.com/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Read The Docs
        </a>

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://endeavorblp.com/examples"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://ultrarumble.com/character/23"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Endeavor, the Hero →
        </a>
      </footer>
    </div>
  );
}
