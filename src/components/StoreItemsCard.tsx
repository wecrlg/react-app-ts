import { StoreItemCardType } from "../Types/Type";
import { Card, Button } from "react-bootstrap";
import formatCurrency from "../utils/FormatCurrency";
import { useShoppingContext } from "../context/ShoppingCartContext";

export default function StoreItemsCard({
  id,
  name,
  price,
  image,
}: StoreItemCardType) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingContext();
  const quantity = getItemQuantity(id);
  console.log(quantity);

  return (
    <Card className="h-100" style={{ borderRadius: "10px" }}>
      <Card.Img
        variant="top"
        src={image}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <p className="fs-3 text-dark">{name}</p>
          <p className="ms-2 fs-5 text-muted">{formatCurrency(price)}</p>
        </Card.Title>
        <div className="mt-auto">
          {quantity <= 0 ? (
            <Button
              className="w-100"
              variant="primary"
              onClick={() => increaseCartQuantity(id)}
            >
              + Add to Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "0.6rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "0.6rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-4">{quantity}</span>{" "}
                  {quantity < 2 ? "item" : "items"} in cart
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
