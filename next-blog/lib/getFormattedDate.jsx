export default function getFormattedDate(dateString) {
  return new Intl.DateTimeFormat("pt-BR", { dateStyle: "long" }).format(
    new Date(dateString)
  );
}
