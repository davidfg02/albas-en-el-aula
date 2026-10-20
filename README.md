# 👩‍🏫 Albas en el Aula

Plataforma web y app para la venta de materiales de oposición de **Educación Infantil**, con tests de práctica incluidos.

![Estado](https://img.shields.io/badge/estado-en%20desarrollo-orange)
![Versión](https://img.shields.io/badge/versión-0.1.0-blue)
![Ionic](https://img.shields.io/badge/Ionic-3880FF?logo=ionic&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)

<!-- Sustituye TU_USUARIO por tu usuario de GitHub para activar estos badges -->
![Último commit](https://img.shields.io/github/last-commit/davidfg02/albas-en-el-aula)
![Issues abiertas](https://img.shields.io/github/issues/davidfg02/albas-en-el-aula)
![Pull requests](https://img.shields.io/github/issues-pr/davidfg02/albas-en-el-aula)

> ⚠️ **Proyecto en desarrollo.** Las funcionalidades, la estructura y la documentación pueden cambiar sin previo aviso. Todavía no hay una versión estable.

## Descripción

Albas en el Aula es una aplicación multiplataforma (web y móvil) pensada para opositoras y opositores de Educación Infantil. Permite:

- Comprar materiales de estudio y temarios.
- Practicar con tests de oposición.
- Acceder a los contenidos adquiridos desde cualquier dispositivo.

## Estado del proyecto

| Funcionalidad | Estado |
|---|---|
| Estructura base del proyecto (Ionic + Angular) | ✅ Hecho |
| Componente Header | ✅ Hecho |
| Componente Footer | ✅ Hecho |
| Páginas legales (aviso legal, privacidad, cookies, condiciones) | 🚧 Pendiente |
| Banner de cookies | 🚧 Pendiente |
| Catálogo de materiales | 🚧 Pendiente |
| Tests de práctica | 🚧 Pendiente |
| Registro e inicio de sesión | 🚧 Pendiente |
| Pasarela de pago | 🚧 Pendiente |
| Despliegue (web y tiendas de apps) | 🚧 Pendiente |

## 🛠️ Tecnologías

- [Ionic](https://ionicframework.com/) – interfaz y componentes móviles
- [Angular](https://angular.dev/) – framework principal (componentes standalone)
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/) y npm

## ✏️ Requisitos previos

- [Node.js](https://nodejs.org/) (versión LTS recomendada)
- Ionic CLI:
  ```bash
  npm install -g @ionic/cli
  ```

## ⚙️ Instalación y ejecución

```bash
# Clonar el repositorio
git clone https://github.com/davidfg02/albas-en-el-aula.git
cd albas-en-el-aula

# Instalar dependencias
npm install

# Arrancar en modo desarrollo
ionic serve
```

La aplicación se abrirá en `http://localhost:8100`.

## 📦 Estructura del proyecto

```
src/
├── app/
│   ├── components/     # Componentes reutilizables (header, footer...)
│   ├── home/           # Página de inicio
│   └── pages/          # Resto de páginas (según avance el proyecto)
├── assets/             # Imágenes y recursos estáticos
├── theme/              # Variables de estilo de Ionic
└── global.scss
```

## 🚀 Flujo de trabajo

- `main` contiene siempre código estable.
- Cada tarea se desarrolla en su propia rama (`feature/...`, `fix/...`, `docs/...`) y se integra mediante Pull Request.
- Los commits siguen la convención [Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/) (`feat:`, `fix:`, `docs:`, `chore:`...).

## 📒 Hoja de ruta

- [ ] Páginas legales y banner de cookies
- [ ] Catálogo y ficha de producto
- [ ] Sistema de tests con corrección y resultados
- [ ] Autenticación de usuarios
- [ ] Pasarela de pago y entrega de materiales digitales
- [ ] Publicación de la versión 1.0

## 📄 Licencia

Todos los derechos reservados. Los materiales, tests y contenidos de este proyecto son propiedad de sus autores y no pueden copiarse, distribuirse ni revenderse sin autorización expresa.

## ✉️ Contacto

Para dudas o sugerencias, abre una [issue](https://github.com/TU_USUARIO/albas-en-el-aula/issues) o escribe a `davidfrgarcia@gmail.com`.