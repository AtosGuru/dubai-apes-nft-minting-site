import "./App.css";
import DubaiNft from "./img/dubai.png";

function App() {
  return (
    <div className="App">
      <section className="header container m-auto">
        <header className="bg-white shadow-lg h-24  md:flex mt-2 border">
          <a
            href="/"
            className="border flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8"
          >
            <img
              className=""
              src="https://i.ibb.co/W6ZXdqN/2021-10-26-16h20-21.png"
              alt=""
            />
          </a>
          <nav className="header-links contents font-semibold text-base lg:text-lg">
            <ul className="flex items-center ml-4 xl:ml-8 mr-auto">
              <li className="p-3 xl:p-6 ">
                <a href="#about">
                  <span>About</span>
                </a>
              </li>
              <li className="p-3 xl:p-6">
                <a href="#roadmap">
                  <span>Roadmap</span>
                </a>
              </li>
              <li className="p-3 xl:p-6">
                <a href="#team">
                  <span>Team</span>
                </a>
              </li>
            </ul>
          </nav>
          <nav className="center md: xl:contents">
            <ul className=" items-center mr-4 lg:mr-6 xl:mr-8 hidden xl:flex">
              <li className="p-1">
                <a
                  href=""
                  className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
                >
                  <svg
                    className="h-4 svg-inline--fa fa-twitter fa-w-16 fa-9x"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="twitter"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="p-1">
                <a
                  href=""
                  className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
                >
                  <svg
                    className="h-4 svg-inline--fa fa-facebook-f fa-w-10 fa-7x"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook-f"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="p-1">
                <a
                  href=""
                  className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
                >
                  <svg
                    className="h-4 svg-inline--fa fa-linkedin-in fa-w-14 fa-9x"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="linkedin-in"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="p-1">
                <a
                  href=""
                  className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
                >
                  <svg
                    className="h-4 svg-inline--fa fa-instagram fa-w-14 fa-9x"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="instagram"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
          <div className="border flex items-center px-4 lg:px-6 xl:px-8">
            {/* <button className="pointer bg-black hover:bg-gray-700 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded">
              Connect Wallet
            </button> */}
            <a
              href="#_"
              className="relative rounded px-5 py-2.5 overflow-hidden group bg-black relative hover:bg-gradient-to-r hover:from-black-500 hover:to-black-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-black transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative font-bold">Connect Wallet</span>
            </a>
          </div>
        </header>
        <h1 className="text-center text-4xl lg:text-6xl mt-24 text-bolder nft-name underline decoration-4 font-bold ">
          <span className=""></span>Dubai{" "}
          <span className="text-[#fcae04]">Apes</span> Yacht Club
        </h1>
        <div className="text-center mt-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-16 m-auto border rounded-full p-2 border-[#fcae04] cursor-pointer"
            style={{ paddingLeft: "14px" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            />
          </svg>
        </div>
        <div className="border w-full lg:w-1/2 m-auto mt-16 round-lg p-4 pt-12 text-center shadow-lg mint-form">
          <p>
            <span className="text-[#fcae04]">Contract Address </span>
            <span>0xcea78de09a9d0f565f6dc72e139f3c9b4f6773f8</span>
          </p>
          <p>
            <span className="text-[#fcae04]">Price Per Nft </span>
            <span className="mr-8">0.1 ether</span>

            <span className="text-[#fcae04]">Total Supply </span>
            <span className="mr-8">3543</span>

            <span className="text-[#fcae04]">Max Supply </span>
            <span>10000</span>
          </p>
          <input
            className="input border w-52 lg:w-64 p-4 mr-4"
            placeholder="Mint Amount"
            type="number"
            min={1}
          ></input>
          <a
            href="#_"
            className="mt-4 relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative text-2xl">MINT</span>
          </a>
        </div>
      </section>
      <section className="about container m-auto" id="about">
        <h1 className="text-center text-4xl lg:text-6xl  mt-40 lg:mt-24  font-bold">
          <span className="text-[#fcae04]">About</span>
        </h1>
        <div className="mt-16 flex">
          <div className="w-full md:w-1/2">
            <img src={DubaiNft} alt="" className="w-full md:w-2/4 m-auto" />
          </div>
          <div className="w-full md:w-1/2  m-auto">
            <p className=" text-lg md:text-xl">
              -Dubai Apes Yacht Club Dubai Apes Yacht Club
            </p>
            <p className=" text-lg md:text-xl">
              -Dubai Apes Yacht Club Dubai Apes Yacht Club
            </p>
            <p className=" text-lg md:text-xl">
              -Dubai Apes Yacht Club Dubai Apes Yacht Club
            </p>
            <p className=" text-lg md:text-xl">
              -Dubai Apes Yacht Club Dubai Apes Yacht Club
            </p>
            <p className=" text-lg md:text-xl">
              -Dubai Apes Yacht Club Dubai Apes Yacht Club
            </p>
            <p className=" text-lg md:text-xl">
              -Dubai Apes Yacht Club Dubai Apes Yacht Club
            </p>
            <p className=" text-lg md:text-xl">
              -Dubai Apes Yacht Club Dubai Apes Yacht Club
            </p>
          </div>
        </div>
      </section>
      <section className="roadmap container m-auto" id="roadmap">
        <h1 className="text-center text-4xl lg:text-6xl  mt-40 lg:mt-24  font-bold">
          <span className="text-[#fcae04]">Roadmap</span>
        </h1>

        <ol className="relative border-l border-gray-200 dark:border-gray-700 justify-center w-full md:w-1/2 m-auto mt-24">
          <li className="mb-10 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Flowbite Application UI v2.0.0{" "}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Released on January 13th, 2022
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce &amp; Marketing
              pages.
            </p>
          </li>
          <li className="mb-10 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Flowbite Figma v1.3.0
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Released on December 7th, 2021
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the
              project.
            </p>
          </li>
          <li className="ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Flowbite Library v1.2.2
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Released on December 2nd, 2021
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </p>
          </li>
        </ol>
      </section>
      <section className="team" id="team">
        <h1 className="text-center text-4xl lg:text-6xl  mt-40 lg:mt-24  font-bold">
          <span className="text-[#fcae04]">Team</span>
        </h1>

        <div className="flex items-center justify-center bg-white py-24">
          <div className="flex flex-col">
            <div className="flex flex-col ">
              <div className="container max-w-7xl px-4">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                    <div className="flex flex-col">
                      <a href="#" className="mx-auto">
                        <img
                          className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                          src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80"
                        />
                      </a>

                      <div className="text-center mt-6">
                        <h1 className="text-gray-900 text-xl font-bold mb-1">
                          Tranter Jaskulski
                        </h1>

                        <div className="text-gray-700 font-light mb-2">
                          Founder & Specialist
                        </div>

                        <div
                          className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                        >
                          <a
                            href="#"
                            className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                          >
                            <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                          </a>

                          <a
                            href="#"
                            className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                          >
                            <i className="mdi mdi-twitter text-blue-300 mx-auto mt-2"></i>
                          </a>

                          <a
                            href="#"
                            className="flex rounded-full hover:bg-orange-50 h-10 w-10"
                          >
                            <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                    <div className="flex flex-col">
                      <a href="#" className="mx-auto">
                        <img
                          className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                          src="https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80"
                        />
                      </a>

                      <div className="text-center mt-6">
                        <h1 className="text-gray-900 text-xl font-bold mb-1">
                          Denice Jagna
                        </h1>

                        <div className="text-gray-700 font-light mb-2">
                          Tired & M. Specialist
                        </div>

                        <div
                          className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                        >
                          <a
                            href="#"
                            className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                          >
                            <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                          </a>

                          <a
                            href="#"
                            className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                          >
                            <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                          </a>

                          <a
                            href="#"
                            className="flex rounded-full hover:bg-orange-50 h-10 w-10"
                          >
                            <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                    <div className="flex flex-col">
                      <a href="#" className="mx-auto">
                        <img
                          className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                          src="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80"
                        />
                      </a>

                      <div className="text-center mt-6">
                        <h1 className="text-gray-900 text-xl font-bold mb-1">
                          Kenji Milton
                        </h1>

                        <div className="text-gray-700 font-light mb-2">
                          Team Memeber
                        </div>

                        <div
                          className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                        >
                          <a
                            href="#"
                            className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                          >
                            <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                          </a>

                          <a
                            href="#"
                            className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                          >
                            <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                          </a>

                          <a
                            href="#"
                            className="flex rounded-full hover:bg-orange-50 h-10 w-10"
                          >
                            <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                    <div className="flex flex-col">
                      <a href="#" className="mx-auto">
                        <img
                          className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                          src="https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80"
                        />
                      </a>

                      <div className="text-center mt-6">
                        <h1 className="text-gray-900 text-xl font-bold mb-1">
                          Doesn't matter
                        </h1>

                        <div className="text-gray-700 font-light mb-2">
                          Will be fired
                        </div>

                        <div
                          className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                        >
                          <a
                            href="#"
                            className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                          >
                            <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                          </a>

                          <a
                            href="#"
                            className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                          >
                            <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                          </a>

                          <a
                            href="#"
                            className="flex rounded-full hover:bg-orange-50 h-10 w-10"
                          >
                            <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer
        className="text-center text-white container m-auto mt-8"
        style={{ backgroundColor: "#f1f1f1" }}
      >
        <div className="container pt-9">
          <div className="flex justify-center mb-9">
            <a href="#!" className="mr-9 text-gray-800">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook-f"
                className="svg-inline--fa fa-facebook-f w-2.5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                ></path>
              </svg>
            </a>
            <a href="#!" className="mr-9 text-gray-800">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="twitter"
                className="svg-inline--fa fa-twitter w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                ></path>
              </svg>
            </a>
            <a href="#!" className="mr-9 text-gray-800">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                className="svg-inline--fa fa-google w-3.5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
            </a>
            <a href="#!" className="mr-9 text-gray-800">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="instagram"
                className="svg-inline--fa fa-instagram w-3.5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                ></path>
              </svg>
            </a>
            <a href="#!" className="mr-9 text-gray-800">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="linkedin-in"
                className="svg-inline--fa fa-linkedin-in w-3.5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                ></path>
              </svg>
            </a>
            <a href="#!" className="text-gray-800">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="github"
                className="svg-inline--fa fa-github w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div
          className="text-center text-gray-700 p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright :&nbsp;
          <a className="text-gray-800" href="https://tailwind-elements.com/">
            Dubai Apes Yacht Club
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
