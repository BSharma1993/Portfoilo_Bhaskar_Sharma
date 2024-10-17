import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  var settings = {
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  const data = [
    {
      id: 1,
      name: "John Doe",
      title: "Software Engineer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dnutbqykg/image/upload/v1721660973/samples/woman-on-a-football-field.jpg",
    },
    {
      id: 2,
      name: "John Doe2",
      title: "Software Engineer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dnutbqykg/image/upload/v1721660973/samples/upscale-face-1.jpg",
    },
    {
      id: 3,
      name: "John Doe3",
      title: "Software Engineer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dnutbqykg/image/upload/v1721660973/cld-sample.jpg",
    },
    {
      id: 4,
      name: "John Doe4",
      title: "Software Engineer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dnutbqykg/image/upload/v1721660971/samples/smile.jpg",
    },
    {
      id: 5,
      name: "John Doe5",
      title: "Software Engineer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dnutbqykg/image/upload/v1721660964/samples/people/smiling-man.jpg",
    },
    {
      id: 6,
      name: "John Doe6",
      title: "Software Engineer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dnutbqykg/image/upload/v1721660963/samples/people/kitchen-bar.jpg",
    },
    {
      id: 7,
      name: "John Doe7",
      title: "Software Engineer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dnutbqykg/image/upload/v1721660964/samples/bike.jpg",
    },
    {
      id: 8,
      name: "John Doe8",
      title: "Software Engineer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dnutbqykg/image/upload/v1721660972/samples/man-portrait.jpg",
    },
    {
      id: 9,
      name: "John Doe9",
      title: "Software Engineer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dnutbqykg/image/upload/v1721660972/samples/outdoor-woman.jpg",
    },
    {
      id: 10,
      name: "John Doe10",
      title: "Software Engineer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://res.cloudinary.com/dnutbqykg/image/upload/v1721660972/samples/look-up.jpg",
    },
  ];
  return (
    <>
      <div
        name="Testimonial"
        className=" md:my-20 max-w-screen h-fit container m-auto"
      >
        <div className="  w-[300px] md:w-3/4 m-auto ">
          <div className=" pt-10 md:pt-24 ">
            <Slider {...settings}>
              {data.map((e) => (
                <div
                  key={e}
                  className=" bg-white md:h-[450px] text-black rounded-xl"
                >
                  <div className=" h-56 bg-gradient-to-t from-[#1595b6] to-[#1f2667e6] rounded-t-xl flex items-center justify-center">
                    <img
                      src={e.image}
                      alt=""
                      className=" w-44 h-44 rounded-full border-solid border-2 border-black p-1 object-center"
                    />
                  </div>
                  <div className=" flex flex-col justify-center items-center gap-4 p-4">
                    <h3>{e.name}</h3>
                    <h4>{e.title}</h4>
                    <p>{e.text}</p>
                    <button className=" hover:text-blue-500">Read More</button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
