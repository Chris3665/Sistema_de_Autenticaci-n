# Sistema de Autenticación - Microservicio de Identidades

## Requisitos cumplidos
- Registro con bcryptjs
- Login con JWT (expiración configurable)
-  Middleware isAuth para rutas protegidas

## Instalación
1. `npm install`
2. Copia `.env.example` → `.env` y configura las variables
3. `npm run dev`

## Endpoints
| Método | Endpoint                    | Descripción                  |
|--------|-----------------------------|------------------------------|
| POST   | `/api/auth/register`        | Registro de usuario          |
| POST   | `/api/auth/login`           | Login y obtención de token   |
| GET    | `/api/auth/protected`       | Ruta protegida (requiere token) |

## Colección Bruno
Importa el archivo `coleccion-bruno.json` en Bruno.