import React, { useEffect, useState } from "react";
import "./cardpage.css";
import Ongoing_gif from "../../media/ongoing.gif";
import Awaiting_gif from "../../media/awaiting.gif";
import Ready_gif from "../../media/ready.gif";
const RootWindow = () => {
  const [mQuery, setMQuery] = useState({
    matches: window.innerWidth > 768 ? true : false,
  });
  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 768px)");
    mediaQuery.addListener(setMQuery);
    // this is the cleanup function to remove the listener
    return () => mediaQuery.removeListener(setMQuery);
  }, []);
  return (
    <div className="container">
      {mQuery && !mQuery.matches ? (
        <>
          <>
            <div className="ready">
              <h1 className="heading_ready">Ready</h1>
              <div className="ready_card">
                <h1 className="order_no">#12</h1>
                <div className="order_name">
                  <h1 className="name">Hanna L.</h1>
                  <p className="name small_name">Kyosn order</p>
                </div>
                <img className="gif_img" src={Ready_gif} alt="icon" />
                <p>Ready for PickUp</p>
              </div>
              <div className="ready_card">
                <h1 className="order_no">#13</h1>
                <div className="order_name">
                  <h1 className="name">Hanna L.</h1>
                  <p className="name small_name">Kyosn order</p>
                </div>
                <img className="gif_img" src={Ready_gif} alt="icon" />
                <p>DineIn</p>
              </div>
              <div className="ready_card">
                <h1 className="order_no">#14</h1>
                <div className="order_name">
                  <h1 className="name">Hanna L.</h1>
                  <p className="name small_name">Kyosn order</p>
                </div>
                <img className="gif_img" src={Ready_gif} alt="icon" />
                <p>Ready to Deliver</p>
              </div>
            </div>
          </>
          <div className="preparing">
            <h1 className="heading_preparing">Preparing</h1>
            <div className="prepare_card">
              <h1 className="order_no">#16</h1>
              <div className="order_name">
                <h1 className="name">Hanna L.</h1>
                <p className="name small_name">Kyosn order</p>
              </div>
              <img className="gif_img" src={Ongoing_gif} alt="icon" />
              <p>ongoing</p>
            </div>

            <div className="prepare_card">
              <h1 className="order_no">#17</h1>
              <div className="order_name">
                <h1 className="name">Hanna L.</h1>
                <p className="small_name">Kyosn order</p>
              </div>
              <img className="gif_img" src={Ongoing_gif} alt="icon" />
              <p>ongoing</p>
            </div>

            <div className="prepare_card">
              <h1 className="order_no">#16</h1>
              <div className="order_name">
                <h1 className="name">Hanna L.</h1>
                <p className="small_name">Kyosn order</p>
              </div>
              <img className="gif_img" src={Ongoing_gif} alt="icon" />
              <p>ongoing</p>
            </div>

            <div className="prepare_card await">
              <h1 className="order_no">#17</h1>
              <div className="order_name">
                <h1 className="name">Hanna L.</h1>
                <p className="small_name">Kyosn order</p>
              </div>
              <img className="gif_img" src={Awaiting_gif} alt="icon" />
              <p>awaiting</p>
            </div>

            <div className="prepare_card await">
              <h1 className="order_no">#16</h1>
              <div className="order_name">
                <h1 className="name">Hanna L.</h1>
                <p className="small_name">Kyosn order</p>
              </div>
              <img className="gif_img" src={Awaiting_gif} alt="icon" />
              <p>awaiting</p>
            </div>

            <div className="prepare_card await">
              <h1 className="order_no">#17</h1>
              <div className="order_name">
                <h1 className="name">Hanna L.</h1>
                <p className="small_name">Kyosn order</p>
              </div>
              <img className="gif_img" src={Awaiting_gif} alt="icon" />
              <p>awaiting</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="preparing">
            <h1 className="heading_preparing">Preparing</h1>
            <div className="prepare_card">
              <h1 className="order_no">#16</h1>
              <div className="order_name">
                <h1 className="name">Hanna L.</h1>
                <p className="name small_name">Kyosn order</p>
              </div>
              <img className="gif_img" src={Ongoing_gif} alt="icon" />
              <p>ongoing</p>
            </div>

            <div className="prepare_card">
              <h1 className="order_no">#17</h1>
              <div className="order_name">
                <h1 className="name">Hanna L.</h1>
                <p className="small_name">Kyosn order</p>
              </div>
              <img className="gif_img" src={Ongoing_gif} alt="icon" />
              <p>ongoing</p>
            </div>

            <div className="prepare_card">
              <h1 className="order_no">#16</h1>
              <div className="order_name">
                <h1 className="name">Hanna L.</h1>
                <p className="small_name">Kyosn order</p>
              </div>
              <img className="gif_img" src={Ongoing_gif} alt="icon" />
              <p>ongoing</p>
            </div>

            <div className="prepare_card await">
              <h1 className="order_no">#17</h1>
              <div className="order_name">
                <h1 className="name">Hanna L.</h1>
                <p className="small_name">Kyosn order</p>
              </div>
              <img className="gif_img" src={Awaiting_gif} alt="icon" />
              <p>awaiting</p>
            </div>

            <div className="prepare_card await">
              <h1 className="order_no">#16</h1>
              <div className="order_name">
                <h1 className="name">Hanna L.</h1>
                <p className="small_name">Kyosn order</p>
              </div>
              <img className="gif_img" src={Awaiting_gif} alt="icon" />
              <p>awaiting</p>
            </div>

            <div className="prepare_card await">
              <h1 className="order_no">#17</h1>
              <div className="order_name">
                <h1 className="name">Hanna L.</h1>
                <p className="small_name">Kyosn order</p>
              </div>
              <img className="gif_img" src={Awaiting_gif} alt="icon" />
              <p>awaiting</p>
            </div>
          </div>

          {/* Ready */}
          <div>
            <div className="ready">
              <h1 className="heading_ready">Ready</h1>
              <div className="ready_card">
                <h1 className="order_no">#12</h1>
                <div className="order_name">
                  <h1 className="name">Hanna L.</h1>
                  <p className="name small_name">Kyosn order</p>
                </div>
                <img className="gif_img" src={Ready_gif} alt="icon" />
                <p>Ready for PickUp</p>
              </div>
              <div className="ready_card">
                <h1 className="order_no">#13</h1>
                <div className="order_name">
                  <h1 className="name">Hanna L.</h1>
                  <p className="name small_name">Kyosn order</p>
                </div>
                <img className="gif_img" src={Ready_gif} alt="icon" />
                <p>DineIn</p>
              </div>
              <div className="ready_card">
                <h1 className="order_no">#14</h1>
                <div className="order_name">
                  <h1 className="name">Hanna L.</h1>
                  <p className="name small_name">Kyosn order</p>
                </div>
                <img className="gif_img" src={Ready_gif} alt="icon" />
                <p>Ready to Deliver</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RootWindow;
