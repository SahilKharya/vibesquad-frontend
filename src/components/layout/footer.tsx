import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900">
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="text-teal-300">
                <Image
                  src="/vs.png"
                  alt="VibeSquad"
                  width="200"
                  height="200"
                  className="mr-2 rounded-sm"
                ></Image>
              </div>

              <p className="mt-4 max-w-xs text-gray-400">
                Elevate Your Influence.
              </p>

              <ul className="mt-8 flex gap-6">
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    <span className="sr-only">Instagram</span>

                    <FaInstagram className="text-3xl text-pink-500 hover:text-pink-700" />
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    <span className="sr-only">X</span>

                    <FaXTwitter className="text-3xl text-white hover:text-blue-400" />
                  </a>
                </li>

              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
              {/* <div>
          <p className="font-medium text-white">Services</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="transition hover:opacity-75 text-gray-200">
                1on1 Coaching
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:opacity-75 text-gray-200">
                Company Review
              </a>
            </li>

          </ul>
        </div> */}

              {/* <div>
          <p className="font-medium text-white">Company</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="transition hover:opacity-75 text-gray-200">
                About
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:opacity-75 text-gray-200">
                Meet the Team
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:opacity-75 text-gray-200">
                Accounts Review
              </a>
            </li>
          </ul>
        </div> */}

              {/* <div>
          <p className="font-medium text-white">Helpful Links</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="transition hover:opacity-75 text-gray-200">
                Contact
              </a>
            </li>
          </ul>
        </div> */}

              <div>
                <p className="font-medium text-white">Legal</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="/privacy-policy"
                      className="transition hover:opacity-75 text-gray-200"
                    >
                      Privacy Policy
                    </a>
                  </li>

                  <li>
                    <a
                      href="/terms"
                      className="transition hover:opacity-75 text-gray-200"
                    >
                      Terms of Service
                    </a>
                  </li>

                  <li>
                    <a
                      href="/data-deletion"
                      className="transition hover:opacity-75 text-gray-200"
                    >
                      Data Deletion
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-400">
            &copy; 2024. VibeSquad. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
