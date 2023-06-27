// sk_test_51NNMBoG7tgpxAxuR4wyYLDg2lXiW9MPapp6jUbRf2zF10LJclVCNmRuOo66MqEjw2MqHslRFWZDrtb1lB01jnOJe00gLTCYvqY;
// OK computer = price_1NNNJzG7tgpxAxuReHdJ9uLu
// Painting pictures = price_1NNNOiG7tgpxAxuRO0q8ZNd4
// Diamond Eyes = price_1NNNREG7tgpxAxuREz2wWRsl

const express = require("express");
var cors = require("cors"); // allows any IP address to access server
const stripe = require("stripe")(
  "sk_test_51NNMBoG7tgpxAxuR4wyYLDg2lXiW9MPapp6jUbRf2zF10LJclVCNmRuOo66MqEjw2MqHslRFWZDrtb1lB01jnOJe00gLTCYvqY"
);

const app = express();
app.use(cors());
app.use(express.static("public")); // recommended by stripe docs
app.use(express.json);

app.post("/checkout", async (req, res) => {
  console.log(req.body);
  const items = req.body.items;
  let lineItems = []; //properly formatted data to send to stripe
  items.forEach((item) => {
    lineItems.push({
      price: items.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http:localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.send(
    JSON.stringify({
      //allows to show user session stripe created
      url: session.url,
    })
  );
});

app.listen(4000, () => console.log("listening on port 4000"));
