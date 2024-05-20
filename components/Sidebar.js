import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-link-cont">
          <div className="link-wrap-w">
            <div className="link-wrap">
              <h5>
                <i className="fas fa-music mg-r icon"></i>
                Music
              </h5>
              <i class="fas fa-bars icon sp-icon" aria-hidden="true"></i>
            </div>
          </div>
          <div className="link-wrap-w">
            <div className="link-wrap ml-10">
              <p>
                <i className="fas fa-database mg-r icon"></i>
                Discover
              </p>
            </div>
          </div>
          <div className="link-wrap-w">
            <div className="link-wrap ml-10">
              <p>
                <i className="fab fa-chrome mg-r icon"></i>
                Browse
              </p>
            </div>
          </div>
          <div className="category">
            <p className="color-grey">My Collection</p>
          </div>
          <div className="link-wrap-w">
            <div className="link-wrap ml-10">
              <p>
                <i className="fas fa-heart mg-r icon"></i>
                Likes
              </p>
            </div>
          </div>
          <div className="link-wrap-w mt-10">
            <div className="link-wrap ml-10">
              <p>
                <i className="fas fa-list mg-r icon"></i>
                Playlist
              </p>
            </div>
          </div>
          <div className="category">
            <p className="color-grey">Settings</p>
          </div>
          <div className="link-wrap-w mt-10">
            <div className="link-wrap ml-10">
              <p>
                <i className="fas fa-arrows-alt mg-r icon"></i>
                Fullscreen
              </p>
            </div>
          </div>
          <div className="link-wrap-w mt-10">
            <div className="link-wrap ml-10">
              <p>
                <i className="fas fa-toggle-off mg-r icon"></i>
                Dark theme
              </p>
            </div>
          </div>
          <div className="blog-links ">
            <Link className="no-decoration link" href="/">
              <p>Blog</p>
            </Link>
            <Link className="no-decoration link" href="/">
              <p>Plan</p>
            </Link>
            <Link className="no-decoration link" href="/">
              <p>Pricing</p>
            </Link>
          </div>
          <div className="blog-links blog-link-up">
            <Link className="no-decoration link" href="/">
              <p>Privacy</p>
            </Link>
            <Link className="no-decoration link" href="/">
              <p>Terms</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
