import React from "react"

import Bio from "../components/bio"
import Liner from "../components/liner"

import slopey from "../images/slopey.png" 
import thecodingwizard from "../images/thecodingwizard.png" 
import jeffkmeng from "../images/jeffkmeng.png" 
import betameta123 from "../images/betameta123.png" 

const slopeyBio = "slopey likes reverse engineering stuff almost as much as he likes hot anime girls. He thinks he knows Python well, but still doesn't really know how to do OOP.";
const codingsBio = "fatty";
const jeffreysBio = "dog";
const betasBio = "lololol";

const About = () => (
  <div className="about">
    <div className="who-we-are">
      <Liner heading="Who We Are" />
      <p>We're a group of sophomores from Monta Vista High School based in Cupertino, California. Actually, I don't think we're allowed to say we're affiliated with Monta Vista for legal reasons, but I don't think anyone knows we exist anyways, so it should be fine. We like coding and doing CTFs. You can contact us at quintuplecs@gmail.com</p>
    </div>
    <div className="bios">
      <Liner heading="Bios" />
      <div className="bio-grid">
        <Bio imageSrc={slopey} bio={slopeyBio} name={"slopey"} />
        <Bio imageSrc={betameta123} bio={betasBio} name={"betameta123"} />
        <Bio imageSrc={jeffkmeng} bio={jeffreysBio} name={"jeffkmeng"} />
        <Bio imageSrc={thecodingwizard} bio={codingsBio} name={"thecodingwizard"} />
      </div>
    </div>
  </div>
)

export default About;
