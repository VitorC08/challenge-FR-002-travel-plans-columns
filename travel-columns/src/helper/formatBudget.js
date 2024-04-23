export const formatBudget = (
  budget,
  locale = "pt-BR",
  options = {
    style: "currency",
    currency: "BRL",
  }
) => {
  return new Intl.NumberFormat(locale, options).format(budget);
};