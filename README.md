# Encriptador y Desencriptador de Textos

¡Bienvenidos a mi proyecto de Encriptador y Desencriptador de Textos! Este proyecto permite a los usuarios encriptar y desencriptar mensajes utilizando un conjunto de reglas simples. Este proyecto hace parte  como reto de la formacion ONE de Alura Latam y Oracle, para poner en practica habilidades de JavaScript, HTML y CSS.

## Características

- **Encriptación de textos**: Convierte las vocales de un texto en códigos específicos.
- **Desencriptación de textos**: Restaura el texto encriptado a su forma original.
- **Validación de entrada**: Se asegura de que no se ingresen caracteres especiales.
- **Interfaz interactiva**: Permite copiar el texto encriptado/desencriptado al portapapeles.

## Tecnologías Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**

## Cómo Usar

1. **Clona este repositorio**:
   git clone [GitHub](https://github.com/diazluisdev/encriptador-texto-one)

2. **Navega al directorio del proyecto**:
cd encriptador-desencriptador

3. **Abre el archivo index.html en tu navegador**.
   
## Reglas de Encriptación
Las vocales del texto serán reemplazadas de acuerdo con las siguientes reglas:

- **e -> enter**
- **i -> imes**
- **a -> ai**
- **o -> ober**
- **u -> ufat**

## Ejemplo de Uso
- **Texto Original**: Hola Mundo
- **Texto Encriptado**: hoberlai munderfat
- **Texto Desencriptado**: Hola Mundo

## Funcionalidades Principales
- **Encriptar Texto**:
Al presionar el botón "Encriptar", el texto en el primer campo de texto se encriptará y se mostrará en el segundo campo de texto. El cursor se desactivará hasta que se desencripte el texto.

- **Desencriptar Texto**:
Al presionar el botón "Desencriptar", el texto encriptado se restaurará a su forma original y el cursor se activará.

- **Copiar Texto**:
Puedes copiar el texto encriptado o desencriptado al portapapeles presionando el botón "Copiar". Aparecerá una alerta confirmando que el texto fue copiado.

- **Validación de Texto**:
El texto ingresado se validará automáticamente para asegurarse de que no contenga caracteres especiales. Si se detecta un carácter especial, se eliminará y se notificará al usuario.

## Estructura del Proyecto
- **index.html**: Contiene la estructura HTML del proyecto.
- **css/style.css**: Contiene los estilos CSS para el diseño de la página.
- **js/app.js**: Contiene la lógica de encriptación, desencriptación, validación y copia del texto.

## Contribuciones
Las contribuciones son bienvenidas. Si encuentras un error o tienes una idea para mejorar el proyecto, no dudes en crear un issue o enviar un pull request.

## Autor
Luis Felipe Diaz Cabana 
