import logo from "./assets/logo.svg"
import eventImg from "./assets/image.svg"
import cxoImg from "./assets/cxo-logo 1.svg"
import banner from "./assets/Banner_Home.svg"
import zeeMedia from "./assets/ZeeMedia.png"
import cardImg from "./assets/cardImg.png"
import devImg from "./assets/devImg.png"
import { useState } from "react"



function Home() {

  const [testIndex, setTestIndex] = useState(1); 
  const [currentIndex, setCurrentIndex] = useState(0);




  const navItems = ["Hackathon", "Summit", "Communities", "Resource"];
  const eventDay = {
    date: "10-15",
    month: "Nov",
    day: "SUN-FRI"
  }
  const bannerImg = [
    banner, banner, banner, banner
  ]
  const card = {
    img: cardImg,
    title: "Blockchain Hackathon- Online",
    date: "Sep 12th,2024 - Sep 13th, 2024",
    mode: "Online"
  }

  const testimonials = [
    {
      name: "Om Tomar",
      title: "Hackathon Winner",
      role: "Developer",
      text: "Blockchain has been a very vast and complex topic, but KALP SDK made it really easy during the challenges. I would love to participate in the next hackathon.",
    },
    {
      name: "Tanishq Gupta",
      title: "Hackathon Winner",
      role: "Developer",
      text: "Blockchain has been a very vast and complex topic, but KALP SDK made it really easy during the challenges. I would love to participate in the next hackathon.",
    },
    {
      name: "Gagan Deep",
      title: "Founder at Buildfuture.ai",
      role: "Entrepreneur",
      text: "Blockchain has been a very vast and complex topic, but KALP SDK made it really easy during the challenges. I would love to participate in the next hackathon.",
    },
  ];


  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? bannerImg.length - 1 : prev - 1));
    console.log("Current Index:", currentIndex);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === bannerImg.length - 1 ? 0 : prev + 1));
    console.log("Current Index:", currentIndex);
  };

  

  const prevSlideTest = () =>
    setTestIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const nextSlideTest = () =>
    setTestIndex((prev) => (prev + 1) % testimonials.length);
  return (
    <>
      {/* Nav Bar */}
      <div className="flex justify-between py-4 px-15 shadow-md w-full">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex">
          <ul className="flex items-center list-none">
            {navItems.map((item, index) => (
              <li className="px-8 font-bold text-sm"
                key={index}>{item}</li>
            ))}
          </ul>
          <div className="flex items-center ">
            <button className="bg-gray-900 text-white py-1.5 px-8 rounded-lg text-sm">Log In</button>
          </div>
        </div>

      </div>

      {/* Banner */}
      <div>
        <div className="relative w-full mx-auto overflow-hidden">
          <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>

            {bannerImg.map((img, index) => (
              <img className="w-full flex-shrink-0 object-cover" key={index}
                src={img}
                alt={`Slide ${index}`}
              />

            ))}
          </div>
          <button className=" absolute top-70 left-10 bg-white px-4 py-2.5 rounded-full border-1 
           hover:bg-gray-200"
            onClick={prevSlide}
          >
            {'<'}
          </button>

          <button className=" absolute top-70 right-10 bg-white px-4 py-2.5 rounded-full border-1 
           hover:bg-gray-200"
            onClick={nextSlide}
          >
            {'>'}
          </button>

          <div className="absolute bottom-10 left-1/2 flex justify-center mt-4 space-x-2">
            {bannerImg.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
                  }`}
              ></div>
            ))}
          </div>

        </div>
      </div>

      {/* Upcoming Events */}
      <div className="py-7 px-15">
        <h1 className="text-4xl font-bold p-4 text-center">Upcoming Events</h1>
        <div>
          <div className="flex justify-between p-1 border-1 border-slate-300 shadow-md">
            <div className="flex p-5">
              <div className="bg-slate-200 p-5 text-center text-gray-600 pt-10 px-10 ">
                <div>{eventDay.month}</div>
                <div className="font-bold text-2xl">{eventDay.date}</div>
                <div>{eventDay.day}</div>
              </div>
              <div className="ml-10">
                <div className="flex">
                  <div className="mr-10">calender</div>
                  <div>Location</div>
                </div>
                <h1 className="font-bold text-xl">BUILD Hackathon</h1>
                <p className="text-gray-500">Participate & be part of new edge technology innovations & learn from the leaders.  </p>
                <div className="pt-10">
                  <button className="bg-black text-white px-10 py-[8px] rounded-xl">Register Now</button>
                  <button className="ml-2 border-1 px-10 py-[8px] rounded-xl">Learn more</button>
                </div>
              </div>

            </div>
            <div className="p-5">
              <img className="min-w-3 shadow-[-6px_6px_0px_rgba(210,205,231,1)]" src={eventImg} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between p-1 border-1 border-slate-300 mt-15 shadow-md">
            <div className="flex p-5">
              <div className="bg-slate-200 p-5 text-center text-gray-600 pt-10 px-10 ">
                <div>{eventDay.month}</div>
                <div className="font-bold text-2xl">{eventDay.date}</div>
                <div>{eventDay.day}</div>
              </div>
              <div className="ml-10 ">
                <div className="flex">
                  <div className="mr-10">calender</div>
                  <div>Location</div>
                </div>
                <h1 className="font-bold text-xl">BUILD Hackathon</h1>
                <p className="text-gray-500">Participate & be part of new edge technology innovations & learn from the leaders.  </p>
                <div className="pt-10">
                  <button className="bg-black text-white px-10 py-[8px] rounded-xl">Register Now</button>
                  <button className="ml-2 border-1 px-10 py-[8px] rounded-xl">Learn more</button>
                </div>
              </div>

            </div>
            <div className="p-5 ">
              <img className="min-w-3 shadow-[-6px_6px_0px_rgba(210,205,231,1)]" src={eventImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Achivments */}
      <div className=" mt-10 bg-black text-white py-7 px-15 font-bold text-3xl text-center">
        <h1>Achivments</h1>
        <div className="flex justify-evenly mt-10 px-5">
          <div className="border-r border-gray-300 px-15">
            <h1>100K</h1>
            <p className="text-xs font-medium">Prize Pool</p>
          </div>
          <div className="border-r border-gray-300 px-15">
            <span>4</span><span className="text-green-500">+</span>
            <p className="text-xs font-medium">Hackathons/Summits held</p>
          </div>
          <div className="border-r border-gray-300 px-15">
            <span>3</span><span className="text-red-600">+</span>
            <p className="text-xs font-medium">Ideas Incubated</p>
          </div>
          <div className="border-r border-gray-300 px-15">
            <span>800</span><span className="text-orange-400">+</span>
            <p className="text-xs font-medium">Innovators & Developers</p>
          </div>
          <div className="px-15">
            <span>5</span><span className="text-blue-500">+</span>
            <p className="text-xs font-medium">Projects Mentored</p>
          </div>
        </div>
      </div>

      <div className="py-7 px-15 flex border-b-1 border-gray-300">
        <div className="w-1/2">
          <button className="px-3 py-2 font-bold
             text-blue-500 bg-blue-100 border-1 border-blue-500
             rounded-md">Press Release</button>
          <h1 className="text-5xl pr-10 font-bold flex-wrap">
            <p className="pr-10">
              KALP Studio Celebrates Successful Launch of <span className="text-blue-400">BUILD</span>
            </p>
            <img className="mt-5 py-5" src={cxoImg} alt="" />
          </h1>
        </div>
        <div className="py-4 w-1/2">
          <p className="font-bold text-2xl">
            A Global Initiative for Blockchain & Web 3.0 Community.
          </p>
          <p className="flex-wrap mt-5">KALP Studio today unveiled its global initiative, BUILD, co-hosted by
            Maharashtra DAO aimed at enriching and consolidating the global Blockchain
            and Web3.0 communities.  The BUILD Business Summit brought together over 300
            participants from premier institutions such as IIT Jammu, IIT Ropar, NIT Jalandhar,
            PEC, Panjab University, and Chitkara University</p>
          <button className="bg-black text-white py-2.5 px-8 rounded-xl mt-5">Read More</button>
        </div>
      </div>

      {/* Pr and Media */}
      <div className="mt-10 py-7 px-15">
        <h1 className="text-center font-bold text-2xl">PR & Media</h1>
        <div className="grid grid-cols-4 grid-rows-2 gap-4 ">
          <img src={zeeMedia} alt="" />
          <img src={zeeMedia} alt="" />
          <img src={zeeMedia} alt="" />
          <img src={zeeMedia} alt="" />
          <img src={zeeMedia} alt="" />
          <img src={zeeMedia} alt="" />
          <img src={zeeMedia} alt="" />
          <img src={zeeMedia} alt="" />
        </div>
      </div>
      {/* Past Events */}
      <div className="py-7 px-15 bg-slate-100">
        <h1 className="font-bold text-3xl p-2 text-center">Past Events</h1>
        <div className="px-10 py-5">
          <div className="grid grid-cols-3 grid-rows-1 gap-7">
            <div className="bg-white p-5 rounded-sm border-1 border-slate-300">
              <img className="py-2" src={cardImg} alt="" />
              <h1 className="py-2 font-bold text-2xl">{card.title}</h1>
              <p className="py-2 text-slate-500">{card.date}</p>
              <p className="py-2 text-slate-500">{card.mode}</p>
            </div>
            <div className="bg-white p-5 rounded-sm border-1 border-slate-300">
              <img className="py-2" src={cardImg} alt="" />
              <h1 className="py-2 font-bold text-2xl">{card.title}</h1>
              <p className="py-2 text-slate-500">{card.date}</p>
              <p className="py-2 text-slate-500">{card.mode}</p>
            </div>
            <div className="bg-white p-5 rounded-sm border-1 border-slate-300">
              <img className="py-2" src={cardImg} alt="" />
              <h1 className="py-2 font-bold text-2xl">{card.title}</h1>
              <p className="py-2 text-slate-500">{card.date}</p>
              <p className="py-2 text-slate-500">{card.mode}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testemonial */}
      <div className="py-7 px-15">
        <div className="relative">
          <h1 className="font-bold text-3xl text-center">Testemonial</h1>
          <h1 className="absolute -top-5 left-117 text-yellow-300 font-bold text-8xl -z-1">"</h1>
        </div>
        <div className="flex gap-6 transition-all">
        {testimonials.map((item, index) => {
          const isActive = index === testIndex;
          return (
            <div
              key={index}
              className=" py-10 px-5"
            >
              <div className={`p-6 w-80 text-center shadow-lg rounded-sm transition-all duration-500 ${
                isActive
                  ? "bg-yellow-50 border-2 border-yellow-400"
                  : "bg-white border border-gray-300"
              }`}>
              <p className="text-gray-600 mb-4">{item.text}</p>
              </div>
              <div>
              <div className="flex justify-center">
                  <div>
                    <div className="flex justify-center py-2">
                      <img className="rounded-full w-20" src={devImg} alt="" />
                    </div>
                    <h1>Om Tomer <span className="text-slate-500">{"(Developer)"}</span></h1>
                    <p className="text-sm">Hackathon Winner</p>
                  </div>
                </div>
              </div>
            </div>
            
          );
        })}
      </div>
      <div className="flex gap-4 justify-center pb-10">
        <button
          onClick={prevSlideTest}
          className="p-3 border-1 bg-gray-100 rounded-lg hover:bg-gray-200"
        >
          {"<"}
        </button>
        <button
          onClick={nextSlideTest}
          className="p-3 border-1 bg-gray-100 rounded-lg hover:bg-gray-200"
        >
          {">"}
        </button>
      </div>
    </div>

        
      
    </>
  )
}

export default Home