import React, { useState } from "react";
import Images from "../../assets/images";
import StyleInput from "../../components/StyleInput";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const onRegister = async () => {
    try {
      console.log("register");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.textBanner}>ĐĂNG KÝ</h1>

      <div style={styles.inputView}>
        <StyleInput icon={Images.userText} placeholder="Họ và tên" />

        <div style={{ marginTop: 40 }}></div>
        <StyleInput icon={Images.mail} placeholder="Email" />

        <div style={{ marginTop: 40 }}></div>
        <StyleInput icon={Images.phone} placeholder="Phone" />

        <div style={{ marginTop: 40 }}></div>
        <StyleInput icon={Images.home} placeholder="Địa chỉ" />

        <div style={{ marginTop: 40 }}></div>
        <StyleInput icon={Images.lock} placeholder="Mật khẩu" type="password" />

        <button style={styles.btnLogin} onClick={onRegister}>
          ĐĂNG KÝ
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: 1440,
    position: "relative",
    display: "flex",
    flexDirection: "row",
    display: "flex",
    flexDirection: "row",
  },
  inputView: {
    width: 50,
    margin: "auto",
    marginTop: 100,
    marginRight: 100,
    marginLeft: 280,
  },
  textBanner: {
    margin: "auto",
    marginTop: 180,
    marginLeft: 48,
    marginRight: 60,
    fontFamily: "Nunito",
    fontSize: 88,
    fontStyle: "bold",
    borderBottomStyle: "solid",
    borderBottomWidth: 7,
    borderSize: 100,
  },
  btnLogin: {
    width: 280,
    height: 50,
    marginTop: 70,
    marginLeft: 100,
    borderRadius: 25,
    color: "white",
    backgroundColor: "black",
  },
};

export default Register;
