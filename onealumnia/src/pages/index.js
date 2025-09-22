import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-900">
      <Navbar />

      <main className="pt-28 max-w-6xl mx-auto px-6">
        {/* Hero */}
        <section className="text-center py-12 md:py-20">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Build Bridges between <span className="text-indigo-600">Students</span>,
            <br />
            <span className="text-indigo-600">Colleges</span> & <span className="text-indigo-600">Alumni</span>
          </h1>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Wesntr connects students, colleges, alumni and companies — mentorship,
            placements and community, all in one place.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/about"
              className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700"
            >
              Learn More
            </Link>
            <Link
              href="/signup"
              className="px-6 py-3 rounded-lg border border-gray-200 text-gray-700 font-semibold hover:shadow"
            >
              Get Started
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="py-10 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Who we serve</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Students</h3>
              <p className="text-gray-600">Find mentorship, internships and alumni guidance.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Colleges</h3>
              <p className="text-gray-600">Manage alumni relationships and placement pipelines.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Alumni & Companies</h3>
              <p className="text-gray-600">Hire fresh talent and give back through mentoring.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
