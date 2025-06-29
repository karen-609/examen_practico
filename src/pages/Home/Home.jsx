import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <main>
        <h2 className={styles.title}>Bienvenido a CodeFlux</h2>
        <h3 className={styles.title}>
          Donde creemos que la manera de impulsar tu código es dominando React
          <br />
          <br />
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/1*VLiW4zOLz6lZX9_TUzg0eQ.png"
            alt="Logo de React"
            width={250}
          ></img>
        </h3>
        
        <div className={styles.content}>
          <p>
            React es una de las bibliotecas más utilizadas en el desarrollo web
            moderno. Es la herramienta detrás de muchas de las aplicaciones que
            usamos a diario. Gracias a su enfoque basado en componentes, React
            permite construir interfaces interactivas, escalables y eficientes
            de forma modular y reutilizable.
          </p>
          <br />
          <p>
            Este sitio está diseñado para ayudarte a entender React desde cero o
            perfeccionar tus conocimientos si ya tienes experiencia. Aquí
            encontrarás:
            <ul>
              <li>
                Tips y buenas prácticas que te ayudarán a escribir mejor código.
              </li>
              <li>
                Guía práctica paso a paso sobre como crear un proyecto en React
                desde cero.
              </li>
              <li>Conoce de que trata CodeFlux.</li>
              <li>Acceso directo a la Documentación Oficial de React.</li>
            </ul>
          </p>
        </div>

        <div className={styles.content}>
          <h2 className={styles.subtitle}>
            Tips y buenas prácticas que te ayudarán a escribir un mejor código
            al utilizar React
          </h2>
          <p>
            Trabajar con React es mucho más que saber usar componentes o hooks.
            Se trata de escribir código limpio, organizado y fácil de mantener.
            Adoptar buenas prácticas desde el inicio puede ahorrarte tiempo,
            frustraciones y problemas de escalabilidad en tus proyectos. Aquí te
            comparto algunos principios y tips fundamentales que te ayudarán a
            mejorar tu forma de programar en React:
          </p>
          <br />

          <h3>Piensa en componentes pequeños y reutilizables</h3>
          <p>
            React funciona mejor cuando divides tu interfaz en piezas pequeñas y
            específicas. Evita crear componentes gigantes que hagan demasiadas
            cosas. Cada componente debe tener una responsabilidad clara. Esto no
            solo facilita la lectura, sino también el mantenimiento y la
            reutilización.
          </p>
          <br />

          <h3>Usa hooks de manera adecuada, no abuses de useEffect</h3>
          <p>
            Uno de los errores más comunes es usar <code>useEffect</code> como solución para
            todo. Antes de usarlo, pregúntate si realmente lo necesitas. Muchas
            veces se puede lograr el mismo resultado con lógica dentro del
            componente, sin necesidad de efectos secundarios.
          </p>
          <br />

          <h3>Adopta patrones modernos</h3>
          <p>
            Evita componentes de clase (salvo casos muy específicos) y prefiere
            componentes funcionales con hooks. Son más simples, más limpios y
            representan el presente y el futuro de React.
          </p>
          <br />

          <h3>Documenta lo necesario, no lo obvio</h3>
          <p>
            El código claro y bien escrito se documenta solo. Pero si hay una
            decisión no evidente, patrones específicos o lógica compleja, añade
            comentarios breves que expliquen el "por qué", no el "qué".
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
