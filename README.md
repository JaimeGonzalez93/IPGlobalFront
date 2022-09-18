Front realizado con react ts el cual se encarga de renderizar la api creada con symfony 6 que accede a los datos de TMDB.
Este Front emplea el uso de los hooks UseState y UseEffect para la correcta renderización de los componentes. Los datos se traen desde la API mediante el uso de Fetch con el uso del método cors en las cabeceras.

Se ha implementado el uso de React-Router-Dom para utilizar algo de paginación, la página home muestra el listado de películas y al clicar sobre ellas se abre una nueva
página con detalles sobre la pelicula en concreto.

En la pagina de detalles se ha implementado una funcion para recoger una valoración por parte del usuario, la cual hace POST a la API creada en symfony, la cual a su vez hace un post a la API de TMDB.

Los estilos de la web están creados mediante el uso de Tailwind.

Se ha intentado implementar algo de testing mediante el uso de React Testing Library.

Para probar el front es necesario haber iniciado el back para que se puedan recuperar los datos. Una vez iniciado el back, basta con clonar el repositorio, instalar dependencias y ejecutar el comando npm run start.
