import urbanStyle from "../assets/img-projects/AleskyGym.png";
import Academia from "../assets/img-projects/AcademiaBaile.png";
import imgNote from "../assets/img-projects/note-app.png";

export const proyectos = [
  {
    titulo: "Gestion de Clases Gimnasio",
    descripcion: "Descripción breve del proyecto 1.",
    imagen: urbanStyle.src,
    tecnologias: ["Java", "Spring Boot","Angular","Mysql"],
    codigo: "https://github.com/GVelasquez03/AleskyGym",
  },
  {
    titulo: "Academia de Baile",
    imagen: Academia.src,
    tecnologias: ["Boostrap","Node","Express","Typescript", "Postgresql"],
    codigo: "https://github.com/GVelasquez03/Academia-de-Baile",
  },
  // {
  //   titulo: "App organizacion",
  //   imagen: imgNote.src,
  //   tecnologias: ["React", "Tailwind", "Express", "MongoDB"],
  //   demo: "https://front-react-todo.onrender.com",
  //   codigo: "https://github.com/Lautaro-R-collins/Front-react-todo",
  // },
  // {
  //   titulo: "API REST",
  //   imagen: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
  //   tecnologias: ["Express", "Node.js", "MongoDB", "Mongoose"],
  //   demo: "https://back-express-todo.onrender.com",
  //   codigo: "https://github.com/Lautaro-R-collins/Back-express-todo.git",
  // },
];
