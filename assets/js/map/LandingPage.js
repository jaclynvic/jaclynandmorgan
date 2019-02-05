import React from "react";
import { InteractiveMapWrapper } from "./InteractiveMap";
import {
    ParallaxBanner,
    ParallaxProvider,
    Parallax
} from "react-scroll-parallax";
import { GoogleMap } from "./GoogleMap";
import { Labels } from "./strings";

const WelcomText = () => {
    return <p className="welcom-text">Where: OVY Camp</p>;
};

const LocationText = () => {
    return (
        <p className="location-text">
            <strong>Location:</strong> Ovy Camp, 5360 La Honda Rd. San Gregorio,
            CA 94074
        </p>
    );
};

// const ParallaxCampMap = () => (
//     <Parallax
//         className="camp-map-outer"
//         offsetXMin="-100px"
//         offsetXMax="100px"
//         slowerScrollRate={true}
//         tag="figure"
//     >

//     </Parallax>
// );

const TopNav = props => (
    <ul className="top-nav">
        {props.links.map(link => (
            <li key={link} className="nav-link">
                <a href={`#${link}`}>{link}</a>
            </li>
        ))}
    </ul>
);

TopNav.defaultProps = {
    links: ["JACAMO", "ABOUT", "LOCATION", "RSVP", "FAQ", "GIFTS"]
};

const curves = {
    tan: {
        name: "tan-curve",
        up: true,
        fill: "#c89f4f"
    },
    green: {
        name: "green-curve",
        up: false,
        fill: "#81a394"
    }
};

const windowHeight = () => {
    const { innerHeight } = window;
    return innerHeight + innerHeight * 0.1;
};

const BackgroundCurve = props => {
    const path = props.up
        ? "M504.8 36.68C643.36 34.62 808.43 22.39 1000 0L1000 43.22L0 41.44L0 0C197.96 26.52 366.23 38.75 504.8 36.68Z"
        : "M504.8 6.54C643.36 8.61 808.43 20.83 1000 43.22L1000 0L0 1.78L0 43.22C197.96 16.7 366.23 4.47 504.8 6.54Z";
    return (
        <svg
            //style={{bottom:`${0 - (window.innerHeight * .12)}px`}}
            className={`${props.name} curve`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 50"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <defs>
                <filter id="shadow">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
                    <feOffset dx="0" dy="2" result="offsetblur" />
                    <feFlood floodColor="#140f0e7d" />
                    <feComposite in2="offsetblur" operator="in" />
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
            <path
                d={path}
                opacity="1"
                fill={props.fill}
                fillOpacity="1"
                filter="url(#shadow)"
            />
        </svg>
    );
};

const Line = props => (
    <svg
        height={props.height}
        width={props.width}
        className={`line-${props.id} line`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={props.viewBox}
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <path
            d={props.path}
            opacity="1"
            fillOpacity="0"
            stroke="#fcf3e0"
            strokeOpacity="1"
        />
    </svg>
);

export const LandingPage = () => {
    return (
        <div>
            <TopNav />
            <div className="bg-nav-color" />
            <ParallaxProvider>
                <ParallaxBanner
                    className="intro-image"
                    layers={[
                        {
                            image: "/assets/images/redwood_road.jpg",
                            amount: 0.2,
                            expanded: true,
                            slowerScrollRate: true
                        },
                        {
                            amount: 0.6,
                            expanded: true,
                            slowerScrollRate: false,
                            children: (
                                <header>
                                    <img
                                        src="assets/images/jacamo.svg"
                                        className="jacamo-logo"
                                    />
                                </header>
                            )
                        }
                    ]}
                    style={{
                        height: windowHeight()
                    }}
                >
                    <div className="down-arrow">
                        <img className="arrow" src="/assets/images/arrow.svg" />
                    </div>
                </ParallaxBanner>
                <div className="curve-wrappers">
                    <BackgroundCurve {...curves.tan} />
                    <BackgroundCurve {...curves.green} />
                </div>
                <div class="line-wrap">
                    <Line
                        path="M30.91 119.09C24.85 59.7 16.97 20 7.27 0"
                        id="1"
                        viewBox="0 0 30 50"
                        width="5%"
                        height="auto"
                    />
                </div>
                <div className="intro-wrapper" />
                <h1 className="main-intro">We are getting married</h1>
                <div class="line-wrap">
                    <Line
                        path="M79.73 206C79.73 190.68 77.63 179.46 73.42 172.35C67.1 161.68 55.13 155.37 31.78 152.8C8.43 150.23 -0.14 133.45 13.55 100.58C27.24 67.7 39.72 23.13 41.84 0"
                        id="2"
                        viewBox="0 0 100 200"
                        width="20%"
                        height="auto"
                    />
                </div>
                <div className="placeholder" />
                <LocationText />
                <GoogleMap />
                <p className="location-text">
                    <strong>Getting there:</strong>Ovy is accessible from three
                    major airports OAK, SFO and SJC.
                </p>
                <p className="location-text">
                    The site is nestled a few miles between the Pacific Ocean to
                    the west and old growth redwoods to the east. It is a Guests
                    not staying at the camp will find many options in the nearby
                    towns of Halfmoon Bay and Pescadero.
                </p>
                <h1>Camp Map</h1>
                <InteractiveMapWrapper />
            </ParallaxProvider>
        </div>
    );
};
