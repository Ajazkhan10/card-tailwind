import React from "react";
import heloIcon from "../Asserts/Svg/mdi_help-outline.svg";
import bagIcon from "../Asserts/Svg/Icon/Title/ic_outline-work-outline.svg";
import catIcon from "../Asserts/Svg/Icon/Title/material-symbols_social-leaderboard-outline-rounded.svg";
import personIcon from "../Asserts/Svg/fluent-mdl2_party-leader.svg";
import icon4 from "../Asserts/Svg/Icon/Title/Icon/Title/fluent_people-team-16-regular.svg";
import helpingHand from "../Asserts/Svg/Icon/Title/lucide_helping-hand.svg";
const cardList = [
  {
    id: 1,
    head: " We Take Action",
    img: heloIcon,
    para: " Our professional advisors bring perseverance, problem solving and a “get it done attitude to the table.",
  },
  {
    id: 2,
    head: "Our Team Works Hard & Plays Hard",
    img: bagIcon,
    para: "We balance a strong work ethic that brings profitable results to our clients within a culture that celebrates the process.",
  },
  {
    id: 3,
    head: "We’re Leaders In More Ways Than One",
    img: catIcon,
    para: "At True North Mergers & Acquisitions, we’re a leader to our clients, a leader in the marketplace, and leaders to each other.",
  },
  {
    id: 4,
    head: "We Believe in Teamwork",
    img: icon4,
    para: "We bring our whole selves and work as a team to deliver world-class service to our clients.",
  },
  {
    id: 5,
    head: "Help People First & Success Will Follow",
    img: helpingHand,
    para: "We’re devoted to encouraging, equipping, collaborating and uplifting all who come in contact with us.",
  },
  {
    id: 6,
    head: "It’s All About Servant Leadership",
    img: personIcon,
    para: "This is the core purpose of why we exist — placing the needs of others before ourselves. The success will follow.",
  },
];
const Cards = () => {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
      {cardList.map(({ id, para, head, img }) => (
        <div className="w-full flex flex-col items-start  gap-[12px] px-4 py-4 rounded-[8px] backdrop-blur-[10px] bg-[#ffffff33]">
          <img
            src={img}
            alt={id}
            className="w-[25px] h-[25px] text-[#E7EBF7]"
          />
          <h1 className="font-Lato text-[16px] leading-6 font-bold text-[#ffff]">
            {head}
          </h1>
          <div className="h-1 w-[120px] bg-[#fff]"></div>
          <p className="items-stretch font-Roboto text-[16px] leading-6 text-[#F7F7F7]">
            {para}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Cards;
