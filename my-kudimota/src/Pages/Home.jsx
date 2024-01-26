import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import logo from '../Assets/logo.png'
import redcar from '../Assets/redcar.jpg'
import car_red from '../Assets/car_red.png'

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="z-0 relative -top-24 left-16">
        <img src={redcar} alt="" className="w-full" />
      </div>

      <div className="bg-red-900 relative -top-136 -mt-80 z-30 w-14 h-144"></div>
      <div className="bg-gray-900 relative -top-172 -mt-96 z-20 w-80 h-188"></div>

      <div className="ml-36 z-40 relative -top-176 -mt-128">
        <div className="-mt-12 mb-10">
          <h1 className="text-6xl w-8/12 uppercase font-bold tracking-normal leading-normal">
            Get to predict the car of your choice seamlessly
          </h1>
          <button className="mt-10 px-10 pt-4 pb-4 text-white text-sm bg-red-600 border-red-600 rounded-md" id="gallery">
            <a href="#">Check Gallery</a>
          </button>
        </div>

        <div className="flex flex-col justify-center mt-80">
          <h2 className="text-center text-4xl "> Product Categories</h2>
          <div className="flex flex-row justify-center mt-9">
            <img src={logo} alt="" className="w-4/12" />
            <div className="bg-red-900 rounded-md w-2 h-36 mx-9"></div>
            <p className="w-4/12 pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus maxime alias quasi, suscipit eius quos
              perferendis minima vero placeat. Sit quis illo voluptate molestias soluta laboriosam quasi dolorum ex
              magnam!
            </p>
          </div>

          <div className="flex justify-between">
            <span className="text-7xl ml-20">‹</span>
            <span className="text-7xl mr-40 ">›</span>
          </div>
          <img src={car_red} alt="" className="scale-50 z-10 relative right-4 -top-36" />
        </div>

        <div className="-mt-20">
          <h2 className="text-center text-4xl mb-10 mr-9">What Can you do?</h2>
          <div className="flex justify-center">
            <div className="flex justify-center flex-col ml-36">
              <div className="flex flex-row">
                <div className="bg-red-600 p-6 m-4 w-1/3" id="subOne">
                  <h3 className="text-white font-light text-3xl">01</h3>

                  <h4 className="text-white font-semibold text-xl">Explore favorite cars</h4>

                  <p className="text-white text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus maxime alias quasi, suscipit eius
                    quos perferendis minima vero placeat.
                  </p>
                </div>

                <div className="bg-rose-950 p-6 m-4 w-1/3" id="subTwo">
                  <h3 className="text-white font-light text-3xl">02</h3>

                  <h4 className="text-white font-semibold text-xl">Input your specification</h4>

                  <p className="text-white text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus maxime alias quasi, suscipit eius
                    quos perferendis minima vero placeat.
                  </p>
                </div>
              </div>

              <div className="bg-rose-950 w-176 flex flex-col p-6 m-4" id="subThree">
                <h3 className="text-white font-light text-3xl">03</h3>
                <h4 className="text-white font-semibold text-xl">Predict the price</h4>
                <div className="flex">
                  <p className="text-white w-3/5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus maxime alias quasi, suscipit eius
                    quos perferendis minima vero placeat. Sit quis illo voluptate molestias soluta laboriosam quasi
                    dolorum ex magnam!
                  </p>

                  <img src={car_red}  alt="" className="w-80 z-10 relative left-20" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-40">
          <h2 className="text-center mb-12 text-4xl">Car Gallery</h2>

          <div className="flex flex-row justify-center relative">
            <div className="bg-rose-950 p-5 m-4 w-1/5 h-1/3">
              <img src={car_red}  alt="imageSix" className="w-4/5 mt-3 mb-4 pl-2" />
              <div className="texts">
                <h5 className="font-bold text-lg pl-2">Range Rover Velar</h5>
                <p className="text-sm pl-2">Lorem Ipsum Consectetur </p>
              </div>
            </div>

            <div className="bg-rose-950 p-5 m-4 w-1/5 h-1/3">
              <img src={car_red}  alt="imageSix" className="w-4/5 mt-3 mb-4 pl-2" />
              <div className="texts">
                <h5 className="font-bold text-lg pl-2">Range Rover Velar</h5>
                <p className="text-sm pl-2">Lorem Ipsum Consectetur</p>
              </div>
            </div>

            <div className="bg-rose-950 p-5 m-4 w-1/5 h-1/3">
              <img src={car_red}  alt="imageSix" className="w-4/5 mt-3 mb-4 pl-2" />
              <div className="texts">
                <h5 className="font-bold text-lg pl-2">Range Rover Velar</h5>
                <p className="text-sm pl-2">Lorem Ipsum Consectetur</p>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center relative ">
            <div className="bg-rose-950 p-5 m-4 w-1/5 h-1/3">
              <img src={car_red}  alt="imageSix" className="w-4/5 mt-3 mb-4 pl-2" />
              <div className="texts">
                <h5 className="font-bold text-lg pl-2">Range Rover Velar</h5>
                <p className="text-sm pl-2">Lorem Ipsum Consectetur</p>
              </div>
            </div>

            <div className="bg-rose-950 p-5 m-4 w-1/5 h-1/3">
              <img src={car_red}  alt="imageSix" className="w-4/5 mt-3 mb-4 pl-2" />
              <div className="texts">
                <h5 className="font-bold text-lg pl-2">Range Rover Velar</h5>
                <p className="text-sm pl-2">Lorem Ipsum Consectetur</p>
              </div>
            </div>

            <div className="bg-rose-950 p-5 m-4 w-1/5 h-1/3">
              <img src={car_red}  alt="imageSix" className="w-4/5 mt-3 mb-4 pl-2" />
              <div className="texts">
                <h5 className="font-bold text-lg pl-2">Range Rover Velar</h5>
                <p className="text-sm pl-2">Lorem Ipsum Consectetur</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-2 mb-2">
            <a href="#" className="mx-1 mt-2 mb-2">‹</a>
            <a href="#" className="mx-1 mt-2 mb-2">1</a>
            <a href="#" className="mx-1 mt-2 mb-2">2</a>
            <a href="#" className="mx-1 mt-2 mb-2">3</a>
            <a href="#" className="mx-1 mt-2 mb-2">....</a>
            <a href="#" className="mx-1 mt-2 mb-2">10</a>
            <a href="#" className="mx-1 mt-2 mb-2">›</a>
          </div>
        </div>

        <div className="w-full h-1 bg-red-800 mt-36"></div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
