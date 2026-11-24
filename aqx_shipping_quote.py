import json, urllib.request, urllib.parse

def get_shipping_quote(country="AE", weight=10.0, length=None, width=None, height=None, promo="AQXAI10"):
    q = {"country": country, "weight": str(weight)}
    if length and width and height:
        q.update({"length": str(length), "width": str(width), "height": str(height)})
    if promo:
        q["promo"] = promo
    url = "https://aqxlogistics.com/api/public/quote?" + urllib.parse.urlencode(q)
    with urllib.request.urlopen(url, timeout=15) as r:
        return json.loads(r.read().decode("utf-8"))
