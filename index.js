function isPrime(num) {
  // Los números menores o iguales a 1 (incluyendo negativos y el 0) no son primos
  if (num <= 1) {
    return false;
  }

  // Buscamos si algún número desde el 2 hasta la raíz cuadrada de 'num' lo divide exactamente
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // Si el residuo es 0, tiene otro divisor y NO es primo
    }
  }

  return true; // Si no encontró divisores, SÍ es primo
}

module.exports = { isPrime };
