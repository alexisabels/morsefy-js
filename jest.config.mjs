
export default {
    transform: {
      '^.+\\.js$': 'babel-jest',  // Usamos babel-jest para transformar archivos JS
    },
    testEnvironment: 'node',  // Establecer el entorno de pruebas a node
  };
  