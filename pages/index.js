import Slide from "./components/Slide";
import valuesjson from "./values.json";
const title = `Slides.js`;

const para = [
  `Automatización del proceso de generación del horario para el departamento de producción de una fabrica de productos alimenticios deshidratados`,
  `grupo4umg.now.sh`
];

const values = valuesjson;

const arrayTitle = values.map(value => value.title);
const arrayContent = values.map(value => value.content);

let initial = 1 / arrayContent.length * 100;

export default () => (
  <Slide
    prev="final"
    post="1"
    title={title}
    para={para}
    titles={arrayTitle}
    content={arrayContent}
    initial={initial}
  />
);
