export function CurrentTime() {
  const today = new Date();

  const horasNumber = today.getHours();
  const minutosNumber = today.getMinutes();

  const horasString = horasNumber.toString().padStart(2, "0");
  const minutosString = minutosNumber.toString().padStart(2, "0");

  return { horasNumber, minutosNumber, horasString, minutosString };
}
