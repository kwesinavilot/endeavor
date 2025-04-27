import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <h1 className="text-5xl font-bold mb-4 text-center">Build MVPs Faster with Endeavor</h1>
      <p className="text-lg text-center mb-8 max-w-xl">
        Endeavor is a full-stack boilerplate for authentication, database, and UI. Get started in minutes and scale with confidence.
      </p>
      <div className="flex gap-4">
        <Link href="/auth/signin" className="px-6 py-3 rounded bg-primary text-white font-semibold hover:bg-primary/90">
          Get Started
        </Link>
        <Link href="/about" className="px-6 py-3 rounded border border-primary text-primary font-semibold hover:bg-primary/10">
          Learn More
        </Link>
      </div>
    </main>
  );
}
