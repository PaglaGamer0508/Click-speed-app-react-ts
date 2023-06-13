import snail from "../../images/snail.png";
import turtle from "../../images/turtle.png";
import rabbit from "../../images/rabbit.png";
import cheetah from "../../images/cheetah.png";
import falcon from "../../images/falcon.png";

const speedRanks = [
  {
    name: "Snail",
    image: snail,
    tag: "Seriously? You're slower than a snail! Keep clicking or you might start growing a shell!",
    nextRank: "Turtle"
  },
  {
    name: "Turtle",
    image: turtle,
    tag: "Turtly impressive! You're picking up the pace, but can you outrun your shadow?",
    nextRank: "Rabbit"
  },
  {
    name: "Rabbit",
    image: rabbit,
    tag: "Hopping like a hyperactive rabbit! Don't stop now, you're on fire!",
    nextRank: "Cheetah"
  },
  {
    name: "Cheetah",
    image: cheetah,
    tag: "Whoa, you've got the speed of a cheetah! You're a click ninja!",
    nextRank: "Falcon"
  },
  {
    name: "Falcon",
    image: falcon,
    tag: "Unbelievable! You're soaring like a falcon! You might break the sound barrier soon!",
    nextRank: "You have reached the ultimate clicking speed, you are now a clicking king!"
  }
];

export default speedRanks;
