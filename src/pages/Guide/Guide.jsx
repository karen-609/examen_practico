import Navbar from "../../components/Navbar/Navbar";
import styles from "./Guide.module.css";

const Guide = () => {
  return (
    <div className={styles.guide}>
      <Navbar />
      <main>
        <h2 className={styles.title}>Guía paso a paso</h2>
        <h3 className={styles.title}>
          Cómo crear un proyecto en React desde cero
          <br />
          <br />
          <img
            src="https://miro.medium.com/v2/resize:fit:725/1*_FmFl_pGT1KAXIisw6KQYQ.jpeg"
            alt="Nuevo proyecto React"
            width={250}
          ></img>
        </h3>
        <div className={styles.content}>
          <p>
            React es una biblioteca popular de JavaScript para construir
            interfaces de usuario interactivas. Si eres nuevo en React y quieres
            crear un proyecto desde cero, este blog te guiará paso a paso a
            través del proceso de configuración de un nuevo proyecto en React y
            te proporcionará una base sólida para comenzar a desarrollar
            aplicaciones React.
          </p>
          <br />

          <h3>Paso 1: Configuración del entorno</h3>
          <p>
            Antes de comenzar, asegúrate de tener Node.js instalado en tu
            sistema. Puedes descargar la última versión desde el sitio web
            oficial de Node.js (https://nodejs.org) e instalarla siguiendo las
            instrucciones adecuadas para tu sistema operativo.
          </p>
          <br />

          <h3>Paso 2: Crear un nuevo proyecto</h3>
          <p>
            <ul className={styles.ul}>
              <li>
                Abre una terminal y navega hasta el directorio donde deseas
                crear tu proyecto en React.
              </li>
              <li>
                Ejecuta el siguiente comando para crear un nuevo proyecto en
                React utilizando Create React App, una herramienta que
                simplifica la configuración inicial:
              </li>
            </ul>
            <code className={styles.code}>
              npx create-react-app mi-proyecto-react
            </code>
            Este comando creará una nueva carpeta llamada mi-proyecto-react con
            la estructura básica de un proyecto React.
          </p>
          <br />

          <h3>Paso 3: Ejecutar el proyecto</h3>
          <p>
            <ul className={styles.ul}>
              <li>Navega al directorio de tu proyecto recién creado:</li>
            </ul>
            <code className={styles.code}>npm start</code>
            <ul className={styles.ul}>
              <li>
                Ejecuta el siguiente comando para iniciar la aplicación en un
                servidor de desarrollo:
              </li>
            </ul>
            <code className={styles.code}>
              npx create-react-app mi-proyecto-react
            </code>
            React iniciará el servidor de desarrollo y abrirá automáticamente tu
            aplicación en el navegador.
          </p>
          <br />

          <h3>Paso 4: Explorar la estructura del proyecto</h3>
          <p>
            Una vez que tu proyecto en React esté en funcionamiento, es
            importante comprender su estructura básica y los archivos
            principales. Aquí hay una descripción general:
            <ul className={styles.ul}>
              <li>
                <code>src/index.js</code>: Este archivo es el punto de entrada
                de tu aplicación React. Aquí se importa el componente raíz y se
                lo renderiza en el DOM.
              </li>
              <li>
                <code>src/App.js</code>: Este archivo contiene el componente
                raíz de tu aplicación. Puedes comenzar a construir tu interfaz
                de usuario en este componente o crear componentes adicionales y
                utilizarlos aquí.
              </li>
              <li>
                <code>src/components/</code>: Esta carpeta es donde puedes
                almacenar tus componentes reutilizables. Puedes crear
                subcarpetas para organizar tus componentes según sea necesario.
              </li>
              <li>
                <code>public/index.html</code>: Este archivo es la plantilla
                HTML base para tu aplicación React. Aquí se incluirá el punto de
                entrada de tu aplicación.
              </li>
            </ul>
          </p>
          <br />

          <h3>Paso 5: Desarrollar tu aplicación</h3>
          <p>
            Ahora que tienes tu proyecto React configurado, puedes comenzar a
            desarrollar tu aplicación. Aquí hay algunas áreas clave que puedes
            explorar:
            <ul className={styles.ul}>
              <li>
                <code>Componentes</code>: Crea componentes reutilizables para
                construir la interfaz de usuario de tu aplicación.
              </li>
              <li>
                <code>Estado</code>:Utiliza el estado de React para manejar y
                actualizar datos en tu aplicación.
              </li>
              <li>
                <code>Enrutamiento</code>: Configura el enrutamiento de tu
                aplicación utilizando React Router para crear una navegación
                basada en rutas.
              </li>
              <li>
                <code>Llamadas a la API</code>: Conéctate a una API backend y
                realiza llamadas HTTP utilizando bibliotecas como Axios o Fetch.
              </li>
              <li>
                <code>Estilos</code>: Agrega estilos a tus componentes
                utilizando CSS, Sass o bibliotecas de estilo en línea como
                styled-components.
              </li>
            </ul>
          </p>

          <h3 className={styles.subtitle}>Resumen y recomendaciones</h3>
          <p>
            En este blog, hemos explorado cómo crear un proyecto en React
            desde cero utilizando Create React App. Aprendiste cómo configurar
            tu entorno, crear un nuevo proyecto, ejecutarlo y comenzar a
            desarrollar tu aplicación React. Ahora tienes una base sólida para
            construir aplicaciones React emocionantes y escalables.
          </p>
          <br/>

          <p>
            Recuerda explorar la documentación oficial de React
            (https://react.dev/) para obtener más información sobre los
            conceptos y características avanzadas de React. Además, te
            recomendamos unirte a la comunidad de React para obtener ayuda,
            compartir conocimientos y descubrir nuevas técnicas y prácticas
            recomendadas.
          </p>
          <br/>

          <p>
            ¡Ahora estás listo para comenzar a desarrollar aplicaciones
            increíbles en React!
          </p>
          <br/>

          <p>¡Gracias por leer!</p>
        </div>
      </main>
    </div>
  );
};

export default Guide;
