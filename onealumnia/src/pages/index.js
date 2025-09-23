// pages/index.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-900 bg-white relative overflow-hidden">
      <Navbar />

      <main className="pt-28 max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <section className="py-12 md:py-20 flex flex-col md:flex-row items-center gap-10 relative">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left space-y-6 z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Build Bridges between{" "}
              <span className="text-indigo-600">Students</span>,
              <br />
              <span className="text-indigo-600">Colleges</span> &{" "}
              <span className="text-indigo-600">Alumni</span>
            </h1>
            <p className="text-gray-600 max-w-xl">
              Wesntr connects students, colleges, alumni and companies —
              mentorship, placements and community, all in one place.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
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
          </div>

          {/* Right Cartoon Image */}
          <div className="md:w-1/2 relative flex justify-center items-center">
            {/* Floating dots */}
            <div className="absolute top-5 left-10 w-5 h-5 bg-yellow-400 rounded-full animate-bounce-slow opacity-70"></div>
            <div className="absolute top-20 right-10 w-8 h-8 bg-red-400 rounded-full animate-bounce-slow opacity-60"></div>
            <div className="absolute bottom-10 left-20 w-6 h-6 bg-green-400 rounded-full animate-bounce-slow opacity-50"></div>
            <div className="absolute bottom-5 right-20 w-6 h-6 bg-purple-400 rounded-full animate-bounce-slow opacity-80"></div>

            {/* Circular lines */}
            <div className="absolute top-20 left-5 w-24 h-24 rounded-full border border-indigo-300 opacity-40 animate-spin-slow"></div>
            <div className="absolute bottom-20 right-5 w-24 h-24 rounded-full border border-pink-300 opacity-30 animate-spin-reverse-slow"></div>

            {/* Cartoon Image */}
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <Image
                src="/assests/two.jpg"
                alt="Cartoon Illustration"
                fill
                className="object-contain animate-float"
              />
            </div>
          </div>
        </section>

        {/* Swiper Section */}
        <section className="pt-8 relative">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Explore Our App
          </h2>

          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="w-full"
          >
            {[
              "one.jpg",
              "two.jpg",
              "three.jpg",
              "four.jpeg",
              "one.jpg",
              "two.jpg",
              "three.jpg",
              "four.jpeg",
            ].map((img, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[300px] flex justify-center items-center">
                  <Image
                    src={`/assests/${img}`}
                    alt={`App Screenshot ${index + 1}`}
                    width={250}
                    height={500}
                    className="rounded-xl shadow-lg object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Who We Serve Section */}
        <section className="py-10 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            <span className="text-blue-600">WHO WE SERVE</span> 
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Students",
                desc: "Find mentorship, internships and alumni guidance.",
              },
              {
                title: "Colleges",
                desc: "Manage alumni relationships and placement pipelines.",
              },
              {
                title: "Alumni & Companies",
                desc: "Hire fresh talent and give back through mentoring.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-lg transition transform hover:-translate-y-1 animate-slideUp hover:shadow-[0_0_10px_rgba(37,99,235,0.6)]"
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Solutions Section */}
        <section className="py-10 md:py-16 bg-gray-50">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          <span className="text-blue-600">OUR SOLUTIONS</span> 
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Centralized Alumni Database",
                desc: "All alumni data in one secure place for easy access.",
              },
              {
                title: "Mentorship Programs",
                desc: "Connect students with alumni mentors for guidance.",
              },
              {
                title: "Placement Support",
                desc: "Bridge companies, alumni, and students for jobs.",
              },
              {
                title: "Networking Opportunities",
                desc: "Events and platforms to keep everyone connected.",
              },
              {
                title: "Analytics & Insights",
                desc: "Track placements, alumni contributions, and growth.",
              },
              {
                title: "Community Building",
                desc: "Strengthen bonds between students, colleges & alumni.",
              },
            ].map((solution, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-lg transition transform hover:-translate-y-1 animate-slideUp hover:shadow-[0_0_10px_rgba(37,99,235,0.6)]"
              >
                <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
                <p className="text-gray-600">{solution.desc}</p>
              </div>
            ))}
          </div>
        </section>

{/* Testimonial Section with Continuous Scrolling */}
<section className="py-10 md:py-16 bg-white">
  <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
    <span className="text-blue-600">WHAT OUR CLIENTS SAY</span>
  </h2>
  <p className="text-center text-gray-600 mb-12">
    Hear from students, alumni, and companies who have benefited from our platform
  </p>

  <Swiper
    modules={[Autoplay]}
    loop={true}
    speed={1000} // higher speed means slower continuous scroll
    autoplay={{
      delay: 0,
      disableOnInteraction: false,
    }}
    spaceBetween={20}
    slidesPerView={3}
    breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
    className="w-full"
  >
    {Array.from({ length: 10 }, (_, idx) => ({
      name: `Client ${idx + 1}`,
      role: `Role ${idx + 1}`,
      testimonial: `This is a dummy review number ${idx + 1}. The platform has been amazing and very helpful for connecting students, alumni, and companies.`,
    })).map((item, index) => (
      <SwiperSlide key={index}>
        <div className="p-6 bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-lg transition transform hover:-translate-y-1 animate-slideUp hover:shadow-[0_0_10px_rgba(37,99,235,0.6)]">
          <div className="flex flex-col items-center text-center">
            <p className="text-gray-700 mb-3">"{item.testimonial}"</p>
            <h4 className="font-semibold">{item.name}</h4>
            <span className="text-sm text-gray-500">{item.role}</span>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>

{/* Blog Section with Swiper Slider */}
<section className="py-10 md:py-16 bg-gray-50">
  <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
    <span className="text-blue-600">LATEST BLOGS</span>
  </h2>
  <p className="text-center text-gray-600 mb-12">
    Read our latest insights, stories, and updates from students, alumni, and colleges
  </p>

  <Swiper
    modules={[Autoplay]}
    loop={true}
    speed={4000} // continuous smooth scroll speed
    autoplay={{
      delay: 0,
      disableOnInteraction: false,
    }}
    spaceBetween={20}
    slidesPerView={3}
    breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
    className="w-full"
  >
    {[
      {
        title: "How to Connect with Alumni Effectively",
        author: "John Doe",
        time: "2 days ago",
        image: "/assests/one.jpg",
        excerpt: "Tips and strategies to engage alumni and build lasting relationships.",
      },
      {
        title: "Mentorship Programs that Work",
        author: "Jane Smith",
        time: "5 days ago",
        image: "/assests/two.jpg",
        excerpt: "Learn how mentorship programs can impact student growth.",
      },
      {
        title: "Top Placement Trends in 2025",
        author: "Alice Johnson",
        time: "1 week ago",
        image: "/assests/three.jpg",
        excerpt: "Insights and analytics on the latest placement trends for students.",
      },
      {
        title: "Networking Tips for Students",
        author: "Michael Brown",
        time: "3 days ago",
        image: "/assests/one.jpg",
        excerpt: "Practical advice for students to expand their professional network.",
      },
      {
        title: "Alumni Success Stories",
        author: "Sarah Williams",
        time: "4 days ago",
        image: "/assests/two.jpg",
        excerpt: "Highlighting inspiring stories from our alumni community.",
      },
      {
        title: "Building a Strong College Community",
        author: "David Lee",
        time: "1 week ago",
        image: "/assests/three.jpg",
        excerpt: "How colleges can foster a vibrant and supportive environment.",
      },
    ].map((blog, idx) => (
      <SwiperSlide key={idx}>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-[0_0_10px_rgba(37,99,235,0.6)] transition transform hover:-translate-y-1">
          <div className="relative h-48 w-full">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
            <p className="text-gray-500 text-sm mb-3">
              By {blog.author} · {blog.time}
            </p>
            <p className="text-gray-700">{blog.excerpt}</p>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>





      </main>

      <Footer />
    </div>
  );
}
