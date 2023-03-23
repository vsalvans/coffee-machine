export const formatPrice = (
    price: number,
    currency: string = 'EUR',
    locale: string = 'de-DE'
) =>
    new Intl.NumberFormat(locale, { style: 'currency', currency }).format(price)
