'use client';

const about = () => {
  return (
    <main className="md:h-screen bg-white text-gray-800 dark:bg-transparent dark:text-gray-200 transition-colors duration-300">
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary dark:text-green-400">
          About Us
        </h1>
        <p className="text-center max-w-2xl mx-auto mb-12 text-lg text-gray-600 dark:text-gray-400">
          Welcome to Dream Future. We are committed to building a better future through unity,
          vision, and passion. Learn more about who we are and what we do.
        </p>

        {/* Mission + Vision Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "Our Journey",
              desc: "Started in 2025, Dream Future grew from a small bond to a nationwide initiative.",
            },
            {
              title: "Our Mission",
              desc: "To empower youth with discipline, unity, and responsibility.",
            },
            {
              title: "Our Vision",
              desc: "To create a society where dreams become reality through collaboration.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-100 dark:bg-[#1e1e2a] rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-primary dark:text-yellow-400">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        {/* <h2 className="text-3xl font-bold text-center mb-6 text-primary dark:text-green-300">
          Meet Our Team
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {["Al Amin", "Lamia", "Arifa"].map((name, i) => (
            <div
              key={i}
              className="bg-gray-100 dark:bg-[#1e1e2a] p-5 rounded-xl text-center shadow hover:shadow-lg"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-gray-300 dark:bg-gray-600 mb-4"></div>
              <h4 className="font-bold text-lg text-primary dark:text-yellow-300">{name}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Team Member</p>
            </div>
          ))}
        </div> */}
      </section>
    </main>
  )
}
export default about