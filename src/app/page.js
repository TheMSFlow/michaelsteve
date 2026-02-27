"use client"

export default function Page() {
  return (
    <>
      <main className="flex flex-col items-center justify-center">
        {/* Hero */}
        <section className="max-w-300 2xl:max-w-7xl h-dvh flex flex-col items-center justify-center px-16 gap-16">
          <h2 className="text-[3rem] md:text-[4rem] ">
            You can only give <i>clarity</i>, if you have <i>clarity</i>.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 text-[1.25rem] font-light gap-8">
            <div>
              {/* Something goes here */}
            </div>
            <p>
              Michael Steve is a clarity catalyst studio for strategic,
              executive, and institutional leaders.
            </p>
            <p>
              We provide leaders with clarity in AI by simplifying complexities
              in governance, security, efficiency, and deployment.
            </p>
          </div>
        </section>

        <section></section>
      </main>
    </>
  );
}
