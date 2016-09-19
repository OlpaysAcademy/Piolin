# Piolin

![Piolin gordo](https://failingtherorschachtest.files.wordpress.com/2011/04/tweety-monster.jpg)

#Mini Twitter

##Funcionalidades:

* Listar tweets (/tweets)
* Crear tweets (/tweets/create)
* Autenticacion (/login)
* Listar followers (/followers)
* Listar following (/following)
* Reutilizar lógica entre listado de tweets, listado de followers y listado de following

##Tecnologías:

* React
* Redux
* [Redux little router](https://github.com/FormidableLabs/redux-little-router)
* [Redux actions](https://github.com/acdlite/redux-actions)
* [Redux promise](https://github.com/acdlite/redux-promise)
* [React toolbox](https://www.youtube.com/watch?v=EP2GMyQdw78)
* [CSS Modules](https://www.youtube.com/watch?v=vkJ5Lc0WwVw)

## Para consumir la API desde el browser

Para obtener las credenciales ver: [Twitter Docs](https://dev.twitter.com/oauth/overview) la parte que dice: *Just want to access the API from your own account…*

Hay que usar una librería que resuelva el CORS, una bastante piolin es [Codebird](https://github.com/jublonet/codebird-js)

Si están usando webpack, se necesita un commit especial:
```
npm install --save https://github.com/jublonet/codebird-js#6bf3dcfec6538ea3881c7b7d55bc6eef1e69981b
```
