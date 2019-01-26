import React from "react";
import { InteractiveMapWrapper } from "./InteractiveMap";
import { ParallaxBanner, ParallaxProvider, Parallax } from "react-scroll-parallax";
import { GoogleMap } from "./GoogleMap";

const WelcomText = () => {
    return <p className="welcom-text">Where: OVY Camp</p>;
};

const LocationText = () => {
    return (    
    <p className="location-text"><strong>Location:</strong> Ovy Camp, 5360 La Honda Rd. San Gregorio, CA 94074</p>
    );
};

const ParallaxCampMap = () => (
    <Parallax
        className="camp-map-outer"
        offsetXMin="-100px"
        offsetXMax="100px"
        slowerScrollRate={true}
        tag="figure"
    >
        <InteractiveMapWrapper />
    </Parallax>
);

export const LandingPage = () => {
    return (
        <ParallaxProvider>
            <ParallaxBanner
                className="your-class"
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
                            <h1 className="title main-title">
                                Jaclyn & Morgan
                            </h1>
                        )
                    },
                    {
                        amount: 0.4,
                        expanded: true,
                        slowerScrollRate: false,
                        children: <h2 className="date">May 30, 2020</h2>
                    }
                ]}
                style={{
                    height: window.innerHeight
                }}
            >
                <div className="down-arrow">⟶</div>
            </ParallaxBanner>
            <img className="intro-image" src="/assets/images/placeholder_image.jpg"/>
            <div className="placeholder" />
            <LocationText />
            <GoogleMap />
             <p className="location-text"><strong>Getting there:</strong> Ovy is located directly between two major airports SFO and SJC.</p>
             <p className="location-text">The site is nestled between old growth redwoods to the east and the Pacific coast to the west. 
            Guests not staying at the camp will find many options in the nearby towns of Halfmoon Bay and Pescadero.</p>
            <h1>Camp Map</h1>
            <ParallaxCampMap />
        </ParallaxProvider>
    );
};
