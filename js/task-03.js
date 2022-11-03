const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galleryList = document.querySelector("ul");
const element = images.map(({ url, alt }) => {
    return `<li><img src = '${url}' alt = '${alt}' width=100% hight:100% ></li>`;
  })
  .join("");
galleryList.insertAdjacentHTML("beforeend", element);

document.body.style.margin = "0px";

galleryList.style.cssText = `display: flex;
justify-content: space-evenly;
  list-style-type: none;
 flex-wrap:wrap;`;
