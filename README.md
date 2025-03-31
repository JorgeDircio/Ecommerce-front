# Frontend Next.js con Docker y Docker Compose (Principios de Arquitectura Hexagonal)

Este proyecto es un frontend desarrollado con Next.js, utilizando Docker y Docker Compose para la contenerización. Se han aplicado **principios de arquitectura hexagonal** para estructurar el frontend, buscando una mayor separación de responsabilidades, modularidad y adaptabilidad.

## Aplicación de Principios Hexagonales en el Frontend

Si bien la arquitectura hexagonal se aplica principalmente en backends, se han tomado sus conceptos clave para organizar el frontend:

* **Núcleo de la Aplicación:** La lógica de la interfaz de usuario y la gestión del estado se mantienen independientes de las dependencias externas.
* **Adaptadores de Interfaz de Usuario:** Los componentes y las páginas actúan como adaptadores que interactúan con el núcleo de la aplicación.
* **Adaptadores de API:** Los servicios que realizan llamadas a la API funcionan como adaptadores que se conectan con el backend.
* **Puertos:** Se definen interfaces claras para la comunicación entre el núcleo de la aplicación y los adaptadores.

## Prerrequisitos

Asegúrate de tener instalados los siguientes programas:

-   Docker: [Instalación de Docker](https://docs.docker.com/get-docker/)
-   Docker Compose: [Instalación de Docker Compose](https://docs.docker.com/compose/install/)

## Configuración

1.  **Clona el repositorio:**

    ```bash
    git clone git@github.com:JorgeDircio/Ecommerce-front.git
    cd Ecommerce-front
    ```

2.  **Configura las variables de entorno:**
    * Crea un archivo `.env.local` en la raíz del proyecto (si no existe).
    * Añade la siguiente variable de entorno (ajusta el valor según sea necesario):

        ```dotenv
        NEXT_PUBLIC_API_URL=http://<backend-api-url>
        ```

## Ejecución

### Usando Docker Compose

* **Levantar los contenedores:**

    ```bash
    docker-compose up
    ```

    Este comando levanta el contenedor del frontend, según lo definido en `docker-compose.yml`.

* **Bajar los contenedores:**

    ```bash
    docker-compose down
    ```

    Este comando detiene y elimina los contenedores.

* **Reconstruir la imagen y levantar el contenedor:**

    ```bash
    docker-compose up --build
    ```

    Este comando reconstruye la imagen de docker y levanta el contenedor.

### Sin Docker Compose (Desarrollo Local)

Si prefieres ejecutar el frontend localmente sin Docker, puedes usar los scripts de `npm`:

1.  **Instala las dependencias:**

    ```bash
    npm install
    ```

2.  **Ejecuta el servidor de desarrollo:**

    ```bash
    npm run dev
    ```

    Esto iniciará el servidor de desarrollo de Next.js.

3.  **Construye la aplicación para producción:**

    ```bash
    npm run build
    ```

    Esto construye la aplicación optimizada para producción.

4.  **Ejecuta la aplicación en modo de producción:**

    ```bash
    npm run start
    ```

    Esto inicia el servidor de producción de Next.js.
