import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-blue-700 text-white px-5 sm:px-10 lg:px-20 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h1 className="text-lg sm:text-xl font-bold">Mindvault Library</h1>
          <p className="py-2 text-sm sm:text-base">Never Stop Reading</p>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-lg sm:text-xl font-bold">Quick Links</h1>
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </div>

        <div>
          <h1 className="text-lg sm:text-xl font-bold">Karve Nagar Branch-1</h1>
          <p className="py-2 text-sm sm:text-base leading-relaxed">
            Karve Nagar Rd, near Ganesh Black Temple, Hingane Home Colony, Karve
            Nagar, Pune, Maharashtra 411052 <br />
            Contact: +91 72197 57681
          </p>
        </div>

        <div>
          <h1 className="text-lg sm:text-xl font-bold">
            Sadashiv Peth Branch-2
          </h1>
          <p className="py-2 text-sm sm:text-base leading-relaxed">
            Uttam Moti Building, 104 2nd Floor, near Nagnath Park, Pune 411030{" "}
            <br />
            Contact: +91 72197 57681
          </p>
        </div>
      </div>

      <div className="mt-10 border-t border-blue-500 pt-5 text-center text-sm sm:text-base space-y-1">
        <p>©2021 - 2026 Mindvault Library. All rights reserved.</p>
        <p>Privacy Policy | Terms and Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
