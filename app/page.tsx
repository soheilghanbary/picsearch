export default function homePage() {
  return (
    <div>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <a
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
            href="https://twitter.com/shadcn"
          >
            Follow along on Twitter
          </a>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            a Cool photo searcher from all over the world
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            I'm building a web app with Next.js 13 and open sourcing everything.
            Follow along as we figure this out together.
          </p>
          <div className="space-x-4">
            <a
              className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 rounded-md"
              href="/login"
            >
              Get Started
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-11 px-8 rounded-md"
              href="https://github.com/shadcn/taxonomy"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
