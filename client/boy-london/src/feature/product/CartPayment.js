import React, { useState, useEffect } from "react";
import "./index.css";
import Images from "../../assets/images";
import StyleInput from "../../components/StyleInput";
import request from "../../api/request";

const fakeData = [
  {
    productID: 1,
  name: "Teach wear hoodie",
  image1 :
    "https://media.vov.vn/sites/default/files/styles/large/public/2021-02/p21_0055_a5_rgb.jpg",
  price: 720000,
  quantityOrdered: 2
},
{
  productID: 1,
  name: "Teach wear hoodie",
  image1 :
    "https://media.vov.vn/sites/default/files/styles/large/public/2021-02/p21_0055_a5_rgb.jpg",
  price: 720000,
  quantityOrdered: 2
},
{
  productID: 1,
  name: "Teach wear hoodie",
  image1 :
    "https://media.vov.vn/sites/default/files/styles/large/public/2021-02/p21_0055_a5_rgb.jpg",
  price: 720000,
  quantityOrdered: 2
},
{
  productID: 1,
  name: "Teach wear hoodie",
  image1 :
    "https://media.vov.vn/sites/default/files/styles/large/public/2021-02/p21_0055_a5_rgb.jpg",
  price: 720000,
  quantityOrdered: 2
},
]

const InformationComponent = ({ title, value, fontSize }) => {
  return (
    <div style={styles.informationBetweenBox}>
      <p style={{ fontSize: fontSize || 13 }}>{title}</p>
      <p style={{ fontSize: fontSize || 13 }}>{value}</p>
    </div>
  );
};

const CartPayment = () => {
  
  const [discountInput, setDiscountInput] = useState("");
  const [listCart, setListCart] = useState([]);
  const [value, setValue] = useState(0);
  const getData = async () => {
    try {
      const res = await request.get("/product/get-list-cart");
      setListCart(res);
      //setListCart(fakeData)
      orderValue();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
    
  }, []);
  const onFinishPayment = () => {
    console.log("finish payment");
  };
  
  const orderValue = () => {
    var a=0;
    listCart.map((item)=> (
      a = a+ item.Products.price*item.Cart.quantityOrdered
    ))
    setValue(a);
    
  }
  const deleteFromCart = async (productID) => {
    try {
      const res1 = await request.delete("/delete-cart/", {
        productID
      })
      const res = await request.get("/product/get-list-cart");
    setListCart(res);
    orderValue();
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div style={styles.container}>
      <div style={styles.logoView}>
        <img src={Images.shoppingCart} style={styles.logo} />
        <h1>Giỏ hàng</h1>
      </div>

      <div style={styles.contentView}>
        {listCart.map((item) => (
            <div style={styles.productBox}>
            <img src={item.Products.image1} style={styles.imageProduct} />
            <p>{item.Products.name}</p>
            <p style={styles.textPrice}>{item.Products.price} x {item.Cart.quantityOrdered}</p>
            <button style={styles.button} onClick={deleteFromCart(item.productID)}>X</button>
          </div>
        ))}

        <div style={styles.lineDivide}></div>

        <div style={styles.inputDiscountBox}>
          
            <StyleInput
              icon={Images.discount}
              value={discountInput}
              type="text"
              style={styles.input}
              placeholder="Discount code"
              onChange={(evt) => {
                setDiscountInput(evt.target.value);
              }}
            />
          

          <button style={styles.buttonUseBox} className="buttonUseDiscount">
            <p style={{ color: "white" }}>Use</p>
          </button>
        </div>

        <div style={styles.lineDivide}></div>

        <InformationComponent title="Tạm tính" value={value} />
        <InformationComponent
          title="Phí vận chuyển"
          value={20000}
        />

        <div style={styles.lineDivide}></div>

        <InformationComponent
          title="Tổng cộng"
          value={
            value + 20000
          }
          fontSize={17}
        />

        <button
          style={styles.buttonFinishBox}
          className="buttonFinishBox"
          onClick={onFinishPayment}
        >
          <p style={styles.textFinish}>Hoàn tất đơn hàng</p>
        </button>
        
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: 1400,
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
  },
  lineDivide: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    borderBottomStyle: "solid",
    marginTop: 20,
    marginBottom: 20,
  },
  logoView: {

    marginTop: 20,
    flex: 1,
    textAlign: "center",
    fontSize: 50,
    
  },
  logo: {
    width: 200,
    height: 200,
  },
  contentView: {
    flex: 1,
    backgroundColor: "rgba(248, 248, 248)",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
  },
  productBox: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  imageProduct: {
    width: 80,
    height: 80,
    marginRight: 20,
  },
  textPrice: {
    position: "absolute",
    right:40,
  },
  button: {
    backgroundColor: "red",
    position: "absolute",
    right:0,
  },
  inputDiscountBox: {
    width: "100%",
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputTouch: {
    width: "60%",
    height: "100%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  input: {
    display: "flex",
    flex: 1,
    borderWidth: 0,
    outline: "none",
  },
  buttonUseBox: {
    width: "25%",
    height: "100%",
    backgroundColor: "grey",
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0,
  },
  buttonFinishBox: {
    width: "45%",
    height: 50,
    borderWidth: 0,
    backgroundColor: "black",
    margin: "auto",
    display: "flex",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  textFinish: {
    color: "white",
    fontWeight: "bold",
  },
  informationBetweenBox: {
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
};

export default CartPayment;
