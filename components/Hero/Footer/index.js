import React from "react";
import Image from "next/image";
import Link from "next/link";

import { socialMediaPaths } from "./social-media-data.js";

import footer from "../../../public/hero-footer/footer.svg";
import nameLogo from "../../../public/hero-footer/nameLogo.svg";
import logo from "../../../public/hero-footer/logo.svg";
import sendIcon from "../../../public/hero-footer/sendIcon.svg";

export default function index() {
  return (
    <div>
      <Image src={footer}
      alt="Picture of the author"
      width="1950"
      height='150'
      className="translate-y-6"
       />
      <div className="bg-[#080712] h-auto">
        <div className="flex flex-col flex-wrap max-w-screen-2xl mx-auto text-white py-8">
          <div className="flex justify-between py-8">
            <div className="flex flex-col gap-10">
              <div className="flex gap-5">
                <Image
                  src={logo}
                  alt="Picture of the author"
                  width="70"
                  height="30"
                />
                <Image
                  src={nameLogo}
                  alt="Picture of the author"
                  width="150"
                  height="50"
                />
              </div>
              <div className="flex gap-2 text-lg text-gray-600">
                <div>1.</div>
                <div>
                  @Virtual Vanguards NFT are among the <br /> top-notch digital
                  art collections available <br /> for buying and selling in the
                  NFT world.
                </div>
              </div>
              <div className="flex gap-3">
                {socialMediaPaths.map((item, index) => {
                  return (
                    <Link  key={index} href={item.url} passHref>
                    <div className="bg-[#182930] w-9 h-9 flex items-center justify-center rounded-full">
                      <Image
                        src={item.src}
                        alt='des'
                        width="16"
                        height="16"
                      />
                    </div>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-between w-1/2">
              <div>
                <div className="text-2xl font-medium mb-7">Company</div>
                <div className="flex flex-col text-lg font-light space-y-3">
                  <Link href="/about-us">About Us</Link>
                  <Link href="/about-us">Blog</Link>
                  <Link href="/about-us">Contact us</Link>
                  <Link href="/about-us">Pricing</Link>
                  <Link href="/about-us">Testimonials</Link>
                </div>
              </div>
              <div>
                <div className="text-2xl font-medium mb-7">Support</div>
                <div className="flex flex-col text-lg font-light  space-y-3">
                  <Link href="/about-us">Help center</Link>
                  <Link href="/about-us">Terms of service</Link>
                  <Link href="/about-us">Legal</Link>
                  <Link href="/about-us">Privacy policy</Link>
                  <Link href="/about-us">Status</Link>
                </div>
              </div>
              <div>
                <div className="text-2xl font-medium mb-7">Stay up to date</div>
                <div className="flex border-2 rounded-full w-48 border-[#0ED4FA] py-2 items-center justify-center gap-5">
                  <span className="text-[#0ED4FA] text-lg font-light">
                    Your email address
                  </span>
                  <Image
                    src={sendIcon}
                    alt="Picture of the author"
                    width="20"
                    height="20"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full text-center text-gray-600">
            © 2023 Virtual Vanguards. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
