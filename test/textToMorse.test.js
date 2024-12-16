import { textToMorse } from "../src/textToMorse.js"

test('Convierte texto a morse correctamente', () => {
expect(textToMorse("Esto es una prueba")).toBe(". ... - --- / . ... / ..- -. .- / .--. .-. ..- . -... .-")     
})