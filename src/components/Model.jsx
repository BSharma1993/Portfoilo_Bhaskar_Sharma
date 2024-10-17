import React from "react";
import reactJS from "../assets/ReactJS.png";
import java from "../assets/java.png";
import itsm from "../assets/ITSM.jpg";
import itil from "../assets/ITIL4.jpg";
import ReactPlayer from "react-player";
import video1 from "../assets/videos1.mp4";
import video2 from "../assets/videos2.mp4";
import video3 from "../assets/videos3.mp4";
import video4 from "../assets/videos4.mp4";
import video5 from "../assets/videos5.mp4";
import video6 from "../assets/videos6.mp4";

const Model = () => {
  return (
    <div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-fit max-w-4xl">
          <img src={reactJS} alt="" />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-2 text-3xl text-white font-extrabold">
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box w-fit max-w-4xl">
          <img src={java} alt="" />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-2 text-3xl text-white font-extrabold">
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box w-fit max-w-4xl">
          <img src={itsm} alt="" />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-2 md:right-6 md:top-5 text-3xl font-extrabold">
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-fit max-w-4xl">
          <img src={itil} alt="" />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-2 md:right-6 md:top-5 text-3xl font-extrabold">
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box w-fit max-w-4xl">
          <h1>READ ME</h1>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-2 text-3xl font-extrabold">
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="my_modal_6" className="modal">
        <div className="modal-box w-fit max-w-6xl ">
          <ReactPlayer
            controls={true}
            width="100%"
            height="100%"
            url={video2}
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
              },
            }}
          />
          <div className=" m-6 space-y-4">
            <h1 className=" text-2xl font-semibold">Description:</h1>
            <span>Bulid With HTML & CSS</span>
            <h1 className=" text-2xl font-semibold">Technologies:</h1>
            <span>HTML</span>
            <br />
            <span>CSS</span>
            <h1 className=" text-2xl font-semibold">Stack:</h1>
            <span>N/A</span>
            <h1 className=" text-2xl font-semibold">Deployed:</h1>
            <span>N/A</span>
            <h1 className=" text-2xl font-semibold">Github Repository Link:</h1>
            <a
              className=" text-blue-600"
              href="https://github.com/BSharma1993/Pratice3"
              target="_blank"
            >
              https://github.com/BSharma1993/Pratice3
            </a>
            <h1 className=" text-2xl font-semibold">Youtube Link:</h1>
            <a
              className=" text-blue-600"
              href="https://youtu.be/cKpf7TVrvDs"
              target="_blank"
            >
              https://youtu.be/cKpf7TVrvDs
            </a>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-2 text-3xl font-extrabold">
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="my_modal_7" className="modal">
        <div className="modal-box w-fit max-w-6xl ">
          <ReactPlayer
            controls={true}
            width="100%"
            height="100%"
            url={video1}
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
              },
            }}
          />
          <div className=" m-6 space-y-4">
            <h1 className=" text-2xl font-semibold">Description:</h1>
            <span>Bulid With HTML & CSS</span>
            <h1 className=" text-2xl font-semibold">Technologies:</h1>
            <span>HTML</span>
            <br />
            <span>CSS</span>
            <h1 className=" text-2xl font-semibold">Stack:</h1>
            <span>N/A</span>
            <h1 className=" text-2xl font-semibold">Deployed:</h1>
            <span>N/A</span>
            <h1 className=" text-2xl font-semibold">Github Repository Link:</h1>
            <a
              className=" text-blue-600"
              href="https://github.com/BSharma1993/NetflixClone"
              target="_blank"
            >
              https://github.com/BSharma1993/NetflixClone
            </a>
            <h1 className=" text-2xl font-semibold">Youtube Link:</h1>
            <a
              className=" text-blue-600"
              href="https://youtu.be/NGtF0wP2acQ"
              target="_blank"
            >
              https://youtu.be/NGtF0wP2acQ
            </a>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-2 text-3xl font-extrabold">
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="my_modal_8" className="modal">
        <div className="modal-box w-fit max-w-6xl ">
          {/* <h3 className=" m-4 md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-blue-800">
            Card Slider Using Swipers JS
          </h3> */}
          <ReactPlayer
            controls={true}
            width="100%"
            height="100%"
            url={video3}
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
              },
            }}
          />
          <div className=" m-6 space-y-4">
            <h1 className=" text-2xl font-semibold">Description:</h1>
            <span>Bulid With HTML & CSS</span>
            <br />
            <span>Some Basic JS concepts.</span>
            <h1 className=" text-2xl font-semibold">Technologies:</h1>
            <span>HTML</span>
            <br />
            <span>CSS</span>
            <br />
            <span>Swipers JS</span>
            <h1 className=" text-2xl font-semibold">Stack:</h1>
            <span>N/A</span>
            <h1 className=" text-2xl font-semibold">Deployed:</h1>
            <span>N/A</span>
            <h1 className=" text-2xl font-semibold">Github Repository Link:</h1>
            <a
              className=" text-blue-600"
              href="https://github.com/BSharma1993/Sliding-Card"
              target="_blank"
            >
              https://github.com/BSharma1993/Sliding-Card
            </a>
            <h1 className=" text-2xl font-semibold">Youtube Link:</h1>
            <a
              className=" text-blue-600"
              href="https://youtu.be/FsS4ffhCbH0"
              target="_blank"
            >
              https://youtu.be/FsS4ffhCbH0
            </a>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-2 text-3xl font-extrabold">
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="my_modal_9" className="modal">
        <div className="modal-box w-fit max-w-6xl">
          <ReactPlayer
            controls={true}
            width="100%"
            height="100%"
            url={video4}
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
              },
            }}
          />
          <div className=" m-6 space-y-4">
            <h1 className=" text-2xl font-semibold">Description:</h1>
            <span>Bulid With HTML & CSS</span>
            <h1 className=" text-2xl font-semibold">Technologies:</h1>
            <span>HTML</span>
            <br />
            <span>CSS</span>
            <h1 className=" text-2xl font-semibold">Stack:</h1>
            <span>N/A</span>
            <h1 className=" text-2xl font-semibold">Deployed:</h1>
            <span>N/A</span>
            <h1 className=" text-2xl font-semibold">Github Repository Link:</h1>
            <a
              className=" text-blue-600"
              href="https://github.com/BSharma1993/Pratice4"
              target="_blank"
            >
              https://github.com/BSharma1993/Pratice4
            </a>
            <h1 className=" text-2xl font-semibold">Youtube Link:</h1>
            <a
              className=" text-blue-600"
              href="https://youtu.be/oZhvGOn0_aI"
              target="_blank"
            >
              https://youtu.be/oZhvGOn0_aI
            </a>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-2 text-3xl font-extrabold">
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="my_modal_10" className="modal">
        <div className="modal-box w-fit max-w-6xl">
          {/* <h3 className=" m-4 md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-blue-800">
            Animation Landing Page
          </h3> */}
          <ReactPlayer
            controls={true}
            width="100%"
            height="100%"
            url={video5}
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
              },
            }}
          />
          <div className=" m-6 space-y-4">
            <h1 className=" text-2xl font-semibold">Description:</h1>
            <span>Bulid With HTML & CSS</span>
            <br />
            <span>Some Basic JS concepts.</span>
            <h1 className=" text-2xl font-semibold">Technologies:</h1>
            <span>HTML</span>
            <br />
            <span>CSS</span>
            <br />
            <span>gsap</span>
            <h1 className=" text-2xl font-semibold">Stack:</h1>
            <span>N/A</span>
            <h1 className=" text-2xl font-semibold">Deployed:</h1>
            <span>N/A</span>
            <h1 className=" text-2xl font-semibold">Github Repository Link:</h1>
            <a
              className=" text-blue-600"
              href="https://github.com/BSharma1993/Pratice5"
              target="_blank"
            >
              https://github.com/BSharma1993/Pratice5
            </a>
            <h1 className=" text-2xl font-semibold">Youtube Link:</h1>
            <a
              className=" text-blue-600"
              href="https://youtu.be/BBot9YCOr1c"
              target="_blank"
            >
              https://youtu.be/BBot9YCOr1c
            </a>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-2 text-3xl font-extrabold">
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="my_modal_11" className="modal">
        <div className="modal-box w-fit max-w-6xl my-4">
          {/* <h3 className=" m-4 md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-blue-800">
            Landing Page
          </h3> */}
          <ReactPlayer
            controls={true}
            width="100%"
            height="100%"
            url={video6}
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
              },
            }}
          />
          <div className=" m-6 space-y-4">
            <h1 className=" text-2xl font-semibold">Description:</h1>
            <span>Bulid With HTML & CSS</span>
            <h1 className=" text-2xl font-semibold">Technologies:</h1>
            <span>HTML</span>
            <br />
            <span>CSS</span>
            <h1 className=" text-2xl font-semibold">Stack:</h1>
            <span>N/A</span>
            <h1 className=" text-2xl font-semibold">Deployed:</h1>
            <span>N/A</span>
            <h1 className=" text-2xl font-semibold">Github Repository Link:</h1>
            <a
              className=" text-blue-600"
              href="https://github.com/BSharma1993/Pratice1"
              target="_blank"
            >
              https://github.com/BSharma1993/Pratice1
            </a>
            <h1 className=" text-2xl font-semibold">Youtube Link:</h1>
            <a
              className=" text-blue-600"
              href="https://youtu.be/6EMY-4CjXco"
              target="_blank"
            >
              https://youtu.be/6EMY-4CjXco
            </a>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-2 text-3xl font-extrabold">
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Model;
