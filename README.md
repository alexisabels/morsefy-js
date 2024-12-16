# morsefy-js

morsefy-js es una biblioteca que proporciona funciones para convertir texto a código morse y viceversa.

## Instalación

Puedes instalar el paquete usando npm:

```
npm install morsefy-js
```

## Uso

Una vez instalado, puedes importar las funciones `textToMorse` y `morseToText` para realizar las conversiones.

### Convertir texto a morse

```javascript
import { textToMorse } from 'morsefy-js';

const morseCode = textToMorse('Hola');
console.log(morseCode);  // Imprime: ".... --- .-.. .-"
```

### Convertir morse a texto

```javascript
import { morseToText } from 'morsefy-js';

const text = morseToText('.... --- .-.. .-');
console.log(text);  // Imprime: "Hola"
```

## Funciones

### `textToMorse(text: string): string`

Convierte un texto al código morse correspondiente.

**Parámetros:**
- `text` (string): El texto a convertir.

**Retorna:**
- Un string con el código morse correspondiente.

### `morseToText(morse: string): string`

Convierte un código morse al texto correspondiente.

**Parámetros:**
- `morse` (string): El código morse a convertir.

**Retorna:**
- El texto correspondiente al código morse.

## Desarrollo

Este proyecto ha sido desarrollado por Alex Isabel (https://alexisabel.com).

- GitHub: [https://github.com/alexisabels](https://github.com/alexisabels)
- LinkedIn: [https://www.linkedin.com/in/alexisabel](https://www.linkedin.com/in/alexisabel)

## Licencia

Este proyecto está bajo la Licencia ISC. Consulta el archivo LICENSE para más detalles.
