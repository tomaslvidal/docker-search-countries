<br/>
<p align="center">
  <h3 align="center">Search Countries</h3>

</p>

![Contributors](https://img.shields.io/github/contributors/tomaslvidal/desafio_tecnico?color=dark-green) ![License](https://img.shields.io/github/license/tomaslvidal/desafio_tecnico) 

## Table Of Contents

* [About the Project](#about-the-project)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
* [Usage](#usage)
* [License](#license)

## About The Project

![Screen Shot](https://github.com/tomaslvidal/search_table/blob/main/images/search_table.PNG?raw=true)

Este proyecto consiste en un servicio de búsqueda de países hecho en NestJS y un front de usuario hecho en Next.js.

El servicio de búsqueda recibe un parámetro de busqueda donde retorna un listado con los primeros 5 países que contengan en el nombre el valor enviado. El valor debe ser mayor o igual a 3 caracteres, en caso contrario la api retornara un código 204.

El front de usuario permite realizar una búsqueda de países. Si el servicio retorna resultados, los muestra en una tabla. En caso contrario, muestra un mensaje de "No se encontraron resultados". La tabla tiene las columnas "País", "Población" y "% Con Población Total".


## Getting Started

Para instalar el proyecto, clona el repositorio de GitHub y luego ejecuta los siguientes comandos sobre el repositorio:

docker compose up -d

Abrir una pestaña para el Frontend y escribir:
docker exec -it search-countries-frontend-1 bash
cd /home/documents/front && npm run dev

Abrir una pestaña para el Backend y escribir:
docker exec -it search-countries-frontend-1 bash
cd /home/documents/server && npm run start:dev

npm run start:dev

### Prerequisites

Requisitos para Docker, distribuciones Ubuntu/Debian en lo posible

## Usage

Una vez ejecutado los comandos, correr la url: http://localhost:4001

## License

Distributed under the MIT License. See [LICENSE](https://github.com/tomaslvidal/desafio_tecnico/blob/main/LICENSE.md) for more information.
