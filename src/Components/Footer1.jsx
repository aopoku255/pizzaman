import React from "react";
import apple from "../assets/apple-app.svg";
import google from "../assets/google-play.svg";
import logo from "../assets/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer1 = () => {
  return (
    <div className="bg-black">
      <div className=" py-10 px-10 text-white flex flex-wrap gap-x-32 gap-y-10 border-b-[1px] border-white">
        <div className="">
          <h2 className="text-2xl mb-6">Contact Us</h2>
          <div>
            <p>Head office:</p>
            <p>Citizen kofi building, Labone.</p>
            <p>Accra - Ghana</p>

            <p className="pt-8">Email: info@ceqaltd.com</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl mb-6">Quick Link</h2>
          <div className="space-y-4">
            <div>
              <div />
              <Link to="/about_us" className="hover:text-[#e93e21]">
                About Us
              </Link>
            </div>
            <div>
              <div />
              <Link to="/our_branch" className="hover:text-[#e93e21]">
                Our Branches
              </Link>
            </div>
            <div>
              <div />
              <Link to="/our_team" className="hover:text-[#e93e21]">
                Our Team
              </Link>
            </div>
            <div>
              <div />
              <a to="/" className="hover:text-[#e93e21]">
                Menu
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl">Download App</h1>
          <a href="">
            <img src={apple} />
          </a>
          <a href="">
            <img src={google} />
          </a>
        </div>
        <div>
          <img src={logo} width={200} />
        </div>
      </div>
      <div className="py-10 text-white text-center">
        <p>Copyright © 2022 <span className="text-[#e93e21]">PizzaMan & ChickenMan.</span> All rights reserved.</p>
        <div className="flex gap-10 justify-center py-10">
                <a href="" className="p-4 rounded-full border border-white hover:bg-[#e93e21] hover:border-[#e93e21] transition-all duration-200 ease-out"><FaFacebookF/></a>
                <a href="" className="p-4 rounded-full border border-white hover:bg-[#e93e21] hover:border-[#e93e21] transition-all duration-200 ease-out"><FaTwitter/></a>
                <a href="" className="p-4 rounded-full border border-white hover:bg-[#e93e21] hover:border-[#e93e21] transition-all duration-200 ease-out"><FaInstagram/></a>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
