import React from "react";
import Person from "./Person";
import khan from "../assets/images/khan.jpg";
import curie from "../assets/images/curie.jpg";
import napoleon from "../assets/images/napoleon.jpg";
import galileo from "../assets/images/galileo.jpg";
import aristotle from "../assets/images/aristotle.jpeg";

const historicalFiguresList = [
  {
    name: "Genghis Khan",
    years: [1162, 1227],
    bio: "Great Khan of the Mongol Empire",
    fullbio:
      "Genghis Khan was the founder and first Great Khan of the Mongol Empire, which became the largest contiguous empire in history after his death. He came to power by uniting many of the nomadic tribes of Northeast Asia",
    img: khan
  },
  {
    name: "Madame Curie",
    years: [1867, 1934],
    bio: "Polish-French Physicist/Chemist",
    fullbio:
      "Marie Skłodowska Curie was a Polish and naturalized-French physicist and chemist who conducted pioneering research on radioactivity. She was the first woman to win a Nobel Prize, the first person and only woman to win twice, and the only person to win a Nobel Prize in two different sciences.",
    img: curie
  },
  {
    name: "Napoléon Bonaparte ",
    years: [1769, 1821],
    bio: "Emperor of the French",
    fullbio:
      "Napoléon Bonaparte was a French statesman and military leader who rose to prominence during the French Revolution and led several successful campaigns during the French Revolutionary Wars. He was Emperor of the French from 1804 until 1814 and again briefly in 1815 during the Hundred Days.",
    img: napoleon
  },
  {
    name: "Galileo Galilei ",
    years: [1564, 1642],
    bio: "Father of Observational Astronomy",
    fullbio:
      "Galileo Galilei was an Italian astronomer, physicist and engineer, sometimes described as a polymath. Galileo has been called the 'father of observational astronomy', the 'father of modern physics', the 'father of the scientific method', and the 'father of modern science.' ",
    img: galileo
  },
  {
    name: "Aristotle",
    years: [-384, -322],
    bio: "Father of Western Philosophy",
    fullbio:
      "Aristotle was an ancient Greek philosopher and scientist born in the city of Stagira, Chalkidiki, Greece. Along with Plato, he is considered the 'Father of Western Philosophy'.",
    img: aristotle
  }
];
function HistoricalFigures() {
  return (
    <div>
      {historicalFiguresList.map((person, index) => (
        <Person
          name={person.name}
          years={person.years}
          bio={person.bio}
          fullbio={person.fullbio}
          img={person.img}
          key={index}
        />
      ))}
    </div>
  );
}

export default HistoricalFigures;
