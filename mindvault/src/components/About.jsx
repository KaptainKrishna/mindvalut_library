import Footer from "./Footer";

const About = () => {
  return (
    <div className="bg-gray-100 mt-20 min-h-screen">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-700 font-bold text-center">
        About Us
      </h1>

      <p className="text-center text-gray-500 text-base sm:text-lg lg:text-xl mt-5 mb-8 max-w-2xl mx-auto">
        Welcome to Mindvault Library, your premier study room for dedicated
        students.
      </p>

      <div className="flex flex-col lg:flex-row items-center p-5 ">
        <div className="space-y-6 w-full lg:w-1/2 p-4">
          <div className="p-6 bg-white rounded shadow">
            <h1 className="text-xl sm:text-2xl font-semibold">Our Mission</h1>
            <p className="text-gray-500 py-3 text-sm sm:text-base leading-relaxed">
              Our mission is to provide a conducive environment for students
              preparing for various exams, helping them achieve their academic
              goals.
            </p>
          </div>

          <div className="p-6 bg-white rounded shadow">
            <h1 className="text-xl sm:text-2xl font-semibold">Our Vision</h1>
            <p className="text-gray-500 py-3 text-sm sm:text-base leading-relaxed">
              We envision a future where every student has access to quality
              study spaces that enhance their learning experience and success.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/images/about-us.png"
            alt="About Us"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
