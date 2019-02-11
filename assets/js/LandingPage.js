import React, { Component } from "react";
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
        <p className="location-text text-block">
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

class ImageCard extends Component {
    constructor(props) {
        super(props);
        this.handleLoad = this.handleLoad.bind(this);
        this.state = {
            loaded: false
        };
    }
    handleLoad() {
        this.setState(() => ({
            loaded: true
        }));
    }
    render() {
        const width = window.innerWidth;
        return (
            <div className="card" style={{ minHeight: this.state.loaded ? 0 : width * 0.347 }}>
                <div
                    className="placeholder"
                    style={{
                        width: width * 0.3,
                        height: width * 0.337,
                        display: this.state.loaded ? 'none' : 'block',
                        position: "absolute",
                        background: "#d0d0d0",
                        transition: "opacity 1s ease-in",
                        opacity: this.state.loaded ? 0 : 1
                    }}
                />
                <img onLoad={this.handleLoad} src={this.props.src} />
            </div>
        );
    }
}

export const LandingPage = () => {
    return (
        <div>
            
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
            </ParallaxProvider>
            <div className="curve-wrappers">
                <BackgroundCurve {...curves.tan} />
                <BackgroundCurve {...curves.green} />
            </div>
        </div>
    );
};
