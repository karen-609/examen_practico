import Navbar from "../../components/Navbar/Navbar";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <Navbar />
      <main>
        <h2 className={styles.title}>¿Qué encontrarás en CodeFlux?</h2>
        <h3 className={styles.title}>
          Tu punto de partida para escribir mejor código, todos los días.
          <br />
          <br />
          <img
            src="https://railsware.com/blog/wp-content/uploads/2019/07/Why-we-use-ReactJS-for-our-projects-Illustration.jpg"
            alt="Acerca de React"
            width={250}
          ></img>
        </h3>
        <div className={styles.content}>
          <p>
            Creemos que el conocimiento tiene el poder de transformar vidas.
            Este proyecto nace con la misión de hacer que aprender React sea una
            experiencia accesible, clara y, sobre todo, motivadora.
          </p>
          <br />
          <p>
            Sabemos que empezar en el mundo del desarrollo web puede parecer
            abrumador, pero estamos convencidos de que, con los recursos
            adecuados, cualquiera puede dominar herramientas como React y dar
            pasos firmes hacia su crecimiento profesional y personal.
          </p>
          <br />
          <p>
            Aquí encontrarás tips y buenas prácticas que te ayudarán a escribir
            un mejor código al utilizar React, una guía práctica paso a paso
            sobre cómo crear un proyecto en React desde cero e información de
            interés que no solo te ayudarán a entender cómo funciona React,
            sino también a desarrollar la confianza para crear tus propios
            proyectos y enfrentar nuevos desafíos.
          </p>
          <br />
          <p>
            Este espacio es más que un blog; es un lugar para aprender, para
            equivocarse, para crecer y para recordar que cada línea de código
            que escribes es un paso más hacia tus metas.
          </p>
          <br />
          <p>
            Porque aprender nunca es un destino, sino un camino que se recorre
            un proyecto a la vez.
          </p>
          <br />
        </div>
      </main>
    </div>
  );
};

export default About;
