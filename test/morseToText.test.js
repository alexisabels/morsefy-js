import { morseToText } from "../src/morseToText.js"

test('Convierte morse a texto correctamente', () => {
expect(morseToText(". ... - --- / . ... / ..- -. .- / .--. .-. ..- . -... .-")).toBe("esto es una prueba")     
})
test('Convierte morse a texto correctamente', () => {
    expect(morseToText(". ... - --- / . ... / ..- -. .- / .--. .-. ..- . -... .-")).toBe("esto es una prueba")
})

test('Convierte morse a texto con números correctamente', () => {
    expect(morseToText(".---- / ..--- / ...-- / ....- / ..... / -.... / --... / ---.. / ----. / -----")).toBe("1 2 3 4 5 6 7 8 9 0")
})

test('Convierte morse a texto con caracteres desconocidos', () => {
    expect(morseToText(".-.-.- / -.-.--")).toBe(" ")
})

test('Convierte morse a texto con espacios adicionales', () => {
    expect(morseToText(". ... - ---  /  . ...  /  ..- -. .-  /  .--. .-. ..- . -... .-")).toBe("esto es una prueba")
})

test('Convierte morse a texto con cadena vacía', () => {
    expect(morseToText("")).toBe("")
})
