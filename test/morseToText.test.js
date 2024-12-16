import { morseToText } from "../src/morseToText.js"

test('Convierte morse a texto correctamente', () => {
expect(morseToText(". ... - --- / . ... / ..- -. .- / .--. .-. ..- . -... .-")).toBe("esto es una prueba")     
})