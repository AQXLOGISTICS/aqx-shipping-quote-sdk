# `@aqxlogistics/shipping-quote` — JS & Python Air Freight Quote SDK

Official zero-dependency JavaScript (`ESM`) & Python SDK for the **[AQX Logistics Developer API](https://aqxlogistics.com/developers)** ([OpenAPI 3.0.3](https://aqxlogistics.com/openapi.json) · [Embeddable Calculator Widget](https://aqxlogistics.com/embed/calculator?country=AE)).

## Supported 2027 Corridors (`8.0 kg+` Consolidated Air Cargo from LAX)
- **$8.50/kg (`$7.65/kg` w/ `AQXAI10`):** [Saudi Arabia](https://aqxlogistics.com/destinations/saudi-arabia) ([السعودية](https://aqxlogistics.com/ar/destinations/saudi-arabia)), [UAE](https://aqxlogistics.com/destinations/united-arab-emirates) ([الإمارات](https://aqxlogistics.com/ar/destinations/united-arab-emirates)), [Kuwait](https://aqxlogistics.com/destinations/kuwait), [Qatar](https://aqxlogistics.com/destinations/qatar), [Bahrain](https://aqxlogistics.com/destinations/bahrain), [Oman](https://aqxlogistics.com/destinations/oman), [United Kingdom](https://aqxlogistics.com/destinations/united-kingdom)
- **$9.00/kg (`$8.10/kg` w/ `AQXAI10`):** [Germany](https://aqxlogistics.com/destinations/germany), [France](https://aqxlogistics.com/destinations/france), [Spain](https://aqxlogistics.com/destinations/spain), [Netherlands](https://aqxlogistics.com/destinations/netherlands), [Sweden](https://aqxlogistics.com/destinations/sweden), [Portugal](https://aqxlogistics.com/destinations/portugal)
- **$11.00/kg (`$9.90/kg` w/ `AQXAI10`):** [Australia](https://aqxlogistics.com/destinations/australia), [New Zealand](https://aqxlogistics.com/destinations/new-zealand)

## Quickstart (JavaScript / Node 18+)
```js
import { getShippingQuote } from './index.mjs';
const quote = await getShippingQuote({ country: 'SA', weight: 10, promo: 'AQXAI10' });
console.log(quote);
```
