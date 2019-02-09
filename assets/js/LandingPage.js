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
            </ParallaxProvider>
            <div className="curve-wrappers">
                <BackgroundCurve {...curves.tan} />
                <BackgroundCurve {...curves.green} />
            </div>
            <div className="line-wrap">
                <Line
                    path="M30.91 119.09C24.85 59.7 16.97 20 7.27 0"
                    id="1"
                    viewBox="0 0 30 70"
                    width="5%"
                    height="5%"
                />
            </div>
            <div className="card-wrap">
                <ImageCard src="/assets/images/placeholder_image.jpg" />
            </div>
            <h1 className="main-intro">We are getting married</h1>
            <p className="text-block first-text">
                Pack your sleeping bag and dancin’ shoes and join us for a
                weekend of celebrations under the stars!
            </p>

            <h2 className="title-block first-title">
                Camp jacamo (aka ovy camp)
                <br />
                san gregorio, ca
            </h2>
            <p className="text-block">
                OVY is located halfway up the San Francisco peninsula, nestled
                between the Pacific Ocean to the west and old growth redwoods to
                the east. The camp consists of 100 acres of beautiful land,
                including a creek, hilltops with amazing views, and hiking
                trails.
            </p>
            <div className="line-wrap">
                <Line
                    path="M79.73 206C79.73 190.68 77.63 179.46 73.42 172.35C67.1 161.68 55.13 155.37 31.78 152.8C8.43 150.23 -0.14 133.45 13.55 100.58C27.24 67.7 39.72 23.13 41.84 0"
                    id="2"
                    viewBox="0 0 100 200"
                    width="20%"
                    height="10%"
                />
            </div>
            <h1 id="JACAMO" className="main-intro">
                Jacamo
            </h1>
            <div className="text-block">
                Morgan and Jaclyn first met the way many modern couples do - on
                the internet!
            </div>
            <h2 className="title-block second-title">
                We both swiped left on a little app called hinge.
            </h2>
            <div className="line-wrap">
                <Line
                    path="M2.48 68.92L2.48 0"
                    id="3"
                    viewBox="0 0 30 70"
                    width="5%"
                    height="5%"
                />
            </div>
            <div className="card-wrap">
                <ImageCard src="/assets/images/download-6.jpg" />
            </div>
             <div className="line-wrap">
                <Line
                    path="M2.48 68.92L2.48 0"
                    id="4"
                    viewBox="0 0 30 70"
                    width="5%"
                    height="5%"
                />
            </div>
            <div className="text-block bios">
                <p>
                    Morgan grew up in beautiful Laguna Beach with his older
                    brother, Henry; twin brother, Nolan; older sister, Erica;
                    and wonderful parents and generous hosts to many
                    get-togethers, Cindy and Robert. Growing up in Orange County
                    is where Morgan developed his love for the ocean and the
                    outdoors. Morgan went to college at UC Santa Cruz (not too
                    far from our venue!) where he studied Latin American
                    History, continued to surf, delivered pizzas, and drank lots
                    of beers with his rowdy friends. From there, Morgan moved
                    out to Maui for a bit to lifeguard, and also spent some time
                    in New Zealand cruising around in a stinky campervan with
                    Nolan and his good pal Neal (our officiant!). Morgan landed
                    back in Orange County for a few years, and began to
                    reconsider his career and also broke his ankle giving him
                    lots of time to think and study. Morgan was accepted into a
                    competitive coding bootcamp in San Francisco called Hack
                    Reactor. He moved up to San Francisco in August of 2014
                    (with the broken ankle!) with the intention to move back to
                    Orange County once the program was completed. Plans changed
                    toward the end of his program when he was offered a job in
                    San Francisco and first met his future bride, the amazing
                    and charming and hilarious and (dance floor) talented Jaclyn
                    Vickery.
                </p>
                <p>
                    Jaclyn grew up in Keene, NH (where Jumanji was filmed!!!)
                    along with her younger/twin brother, Chris; baby sister,
                    Kate; and the funnest parents ever Scott and Kim! Jaclyn
                    spent summers visiting Cape Cod, at camp, visiting Grandma
                    Sue in San Francisco, and attending the biggest Vickery
                    event of the year - Grey Fox Bluegrass festival! Jaclyn grew
                    up loving music and dancing and the outdoors and doing
                    whatever it took to make her friends laugh (qualities she
                    attributes to the funnest parents ever). As High School came
                    to an end, Jaclyn decided to step outside her comfort zone
                    by going to a college where she didn’t know anyone but
                    wasn’t too far from home, and landed on the University of
                    Rhode Island. Jaclyn double-majored in Psychology and
                    Elementary Education which she loved, but to this day
                    doesn’t know what she wants to do with her life (other than
                    marry Morgan). After college, Jaclyn opted for yet another
                    change of scenery and spent a few years living in Hilton
                    Head, SC. After deciding that wasn’t the place for her, she
                    moved back to NH, saved up all her money waitressing, took
                    an epic European couch surfing trip with her good friend
                    Gretchen, and then decided it was time to make a big move.
                    Jaclyn’s friend Josh had been living out in San Francisco
                    for a few years, and told her he had an open room in his
                    apartment. That (along with the fond memories of visiting
                    Grandma Sue!) was all she needed to purchase a one-way
                    ticket. Jaclyn fell in love with San Francisco instantly.
                    And after about three years, Jaclyn fell in love almost
                    instantly again - with her future husband, the most handsome
                    man in the world, the endlessly talented, and the love of
                    her life - Morgan Plant!
                </p>
                  <p>
                    Jaclyn and Morgan have spent the last five years completely
                    inseparable and head-over-heels in love! They moved in
                    together after 8 months, and haven’t looked back since. They
                    currently live near Ocean Beach so Morgan can get in all the
                    surfing he wants, and spend many weekends out camping or
                    traveling or spending time with their wonderful friends
                    (including the same rowdy crew Morgan was drinking all the
                    beers with at UCSC). “Jacamo” is what Jaclyn’s brother Chris
                    and wife Kayla call the couple, and it seems to be trending
                    so we’re going with that as the theme for this wedding.
                </p>
                <p>
                    “Jacamo” is what Jaclyn’s brother Chris and wife Kayla call
                    the couple, and it seems to be trending so we’re going with
                    that as the theme for this wedding.
                </p>
                <p>We can’t wait to get married!!!!!!!</p>
            </div>
             <div className="line-wrap">
                <Line
                    path="M187.26 275.76C174.76 264.76 172.53 262.41 152.26 259.44C145.77 258.49 132.49 260.27 127.73 260.78C117.62 261.86 108.7 263.18 99.18 263.86C89.67 264.53 86.51 263.41 80.86 259.44C75.21 255.47 72.19 253.56 68.25 241.28C64.31 229 65.44 197.83 72.98 180.7C80.52 163.57 74.83 152.14 69.16 148.56C67.65 147.61 65.58 147.08 64.94 146.98C61.87 146.54 59.94 145.29 33.4 148.64C15.71 150.88 7 141.21 7.27 119.64C7.67 79.27 8.69 52.31 10.35 38.76C12.01 25.2 18.09 12.73 28.59 1.34"
                    id="5"
                    viewBox="0 0 200 300"
                    width="40%"
                    height="30%"
                />
            </div>
            <h1 id="LOCATION" className="main-intro">Location</h1>
            <LocationText />
            <div className="card-wrap">
            <div className="card">
            <GoogleMap />
            </div>
            </div>
            <p className="location-text text-block">
                <strong>Getting there:</strong>Ovy is accessible from three
                major airports OAK, SFO and SJC.
            </p>
            <p className="location-text text-block">
                The site is nestled a few miles between the Pacific Ocean to the
                west and old growth redwoods to the east. It is a Guests not
                staying at the camp will find many options in the nearby towns
                of Halfmoon Bay and Pescadero.
            </p>
            <h1>Camp Map</h1>
            <InteractiveMapWrapper />
        </div>
    );
};
