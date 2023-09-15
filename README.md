<br/>
<p align="center">
  <h3 align="center">Search Countries</h3>
</p>

![Contributors](https://img.shields.io/github/contributors/tomaslvidal/desafio_tecnico?color=dark-green) ![License](https://img.shields.io/github/license/tomaslvidal/desafio_tecnico) 

## Indice

* [Sobre Search Countries](#sobre-search-countries)
* [Iniciar Proyecto](#iniciar-proyecto)
  * [Requisitos](#requisitos)
* [Como Usarlo](#como-usarlo)
* [Licencia](#licencia)

## Sobre Search Countries

![Screen Shot](https://github.com/tomaslvidal/search_table/blob/main/images/search_table.PNG?raw=true)

Servicio de búsqueda de países hecho en NestJS y un front de usuario hecho en Next.js.

El servicio de búsqueda recibe un input de busqueda donde retorna un listado con los primeros 5 países que contengan en el nombre el valor enviado. El valor debe ser mayor o igual a 3 caracteres, en caso contrario la api retornara un código 204.

El front de usuario permite realizar una búsqueda de países. Si el servicio retorna resultados, los muestra en una tabla. En caso contrario, muestra un mensaje de "No se encontraron resultados". La tabla tiene las columnas "País", "Población" y "% Con Población Total".


## Iniciar Proyecto

Para instalar el proyecto, clona el repositorio de GitHub y luego ejecuta los siguientes comandos sobre el repositorio:

* docker compose up -d <br>

Abrir una pestaña para el Frontend y escribir:
<br>
* docker exec -it search-countries-frontend-1 bash
<br>
* cd /home/documents/front && npm run dev

Abrir una pestaña para el Backend y escribir:
<br>
* docker exec -it search-countries-backend-1 bash
<br>
* cd /home/documents/server && npm run start:dev

### Requisitos

Requisitos para Docker, usar con distribuciones Ubuntu/Debian

## Como Usarlo

Una vez ejecutado los comandos, ingresar a la url: http://localhost:4001

## Licencia

Distributed under the MIT License. See [LICENSE](https://github.com/tomaslvidal/desafio_tecnico/blob/main/LICENSE.md) for more information.
