export async function getShippingQuote({ country = 'AE', weight = 10, length, width, height, promo = 'AQXAI10' } = {}) {
  const params = new URLSearchParams({ country, weight: String(weight) });
  if (length && width && height) {
    params.set('length', String(length));
    params.set('width', String(width));
    params.set('height', String(height));
  }
  if (promo) params.set('promo', promo);
  const res = await fetch(`https://aqxlogistics.com/api/public/quote?${params.toString()}`);
  if (!res.ok) throw new Error(`AQX Quote API HTTP ${res.status}`);
  return res.json();
}

export async function listCorridors() {
  const res = await fetch('https://aqxlogistics.com/api/public/quote?mode=corridors');
  if (!res.ok) throw new Error(`AQX Corridors API HTTP ${res.status}`);
  return res.json();
}
