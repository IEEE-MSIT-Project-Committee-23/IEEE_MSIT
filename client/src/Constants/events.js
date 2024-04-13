function importAllCover(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const coverImages = importAllCover(
  require.context("../Assets/Events/Cover", false, /\.(png|jpe?g|svg)$/)
);
const coverImage = Object.values(coverImages);

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const images = importAll(
  require.context("../Assets/Events/Main", false, /\.(png|jpe?g|svg)$/)
);
const image = Object.values(images);

const data = [
  {
    id: 1,
    name: "Love Babbar",
    coverImage: coverImage.filter((img) => img.includes("LoveBabbar")),
    image: image.filter((img) => img.includes("LoveBabbar")),
    desc: "The IEEE MSIT's Tech Day event on March 27 was a successful affair, with Love Babbar and Lakshay Kumar serving as keynote speakers. Love Babbar's presentation focused on Ace Your Placements and Become a Great Programmer and Engineer, while Lakshay Kumar discussed Building Efficient Software Products",
    designation: " Founder of CodeHelp | Amazon | Microsoft",
    date: "27 March 2023",
  },
  {
    id: 2,
    name: "Lakshay Kumar",
    coverImage: coverImage.filter((img) => img.includes("LakshayKumar")),
    image: image.filter((img) => img.includes("LakshayKumar")),
    desc: "The IEEE MSIT's Tech Day event on March 27 was a successful affair, with Love Babbar and Lakshay Kumar serving as keynote speakers. Love Babbar's presentation focused on Ace Your Placements and Become a Great Programmer and Engineer, while Lakshay Kumar discussed Building Efficient Software Products",
    designation: "Computer Scientist @ Adobe",
    date: "27 March 2023",
  },
  {
    id: 3,
    name: "Mohammad Fraz",
    coverImage: coverImage.filter((img) => img.includes("Fraz")),
    image: image.filter((img) => img.includes("Fraz")),
    desc: "IEEE MSIT hosted an event on April 19 with Mohammad Fraz, founder of Lead Coding and software developer at Google, as the speaker. The purpose of the event was to teach attendees how to become great engineers, learn software development, and use online resources like YouTube and Leetcode to enhance their abilities.",
    designation: "SDE2 at Google || Founder Lead Code",
    date: "27 March 2023",
  },
  {
    id: 3,
    name: "Mohammad Fraz",
    coverImage: coverImage.filter((img) => img.includes("Fraz")),
    image: image.filter((img) => img.includes("Fraz")),
    desc: "IEEE MSIT hosted an event on April 19 with Mohammad Fraz, founder of Lead Coding and software developer at Google, as the speaker. The purpose of the event was to teach attendees how to become great engineers, learn software development, and use online resources like YouTube and Leetcode to enhance their abilities.",
    designation: "SDE2 at Google || Founder Lead Code",
    date: "27 March 2023",
  },
];

export default data;
