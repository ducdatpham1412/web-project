import React, { useState } from "react";
import { apiRegister } from "../../api/modules";
import Images from "../../assets/images";
import StyleInput from "../../components/StyleInput";
import Toastify from "../../utilities/useToastify";
import { checkEmail, checkPhone } from '../../utilities/format'

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const onRegister = async () => {
    try {
      if (!name || !email || !phone || !address || !password) {
        Toastify.error("Các trường không được bỏ trống !");
        return;
      }
      if (!checkPhone(phone)) {
        Toastify.error("Số điện thoại không hợp lệ !");
        return;
      }
      if (!checkEmail(email)) {
        Toastify.error("Email không hợp lệ !");
        return;
      }

      await apiRegister({
        email,
        name,
        phoneNumber: phone,
        password,
        address,
      });

      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setPassword("");
      Toastify.alert("Đăng ký thành công!");
    } catch (err) {
      Toastify.error('Email hcjfdfsdf');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.textBanner}>ĐĂNG KÝ</h1>

      <div style={styles.inputView}>
        <StyleInput
          icon={Images.userText}
          placeholder="Họ và tên"
          value={name}
          setValue={setName}
        />

        <div style={{ marginTop: 40 }}></div>
        <StyleInput
          icon={Images.mail}
          placeholder="Email"
          value={email}
          setValue={setEmail}
        />

        <div style={{ marginTop: 40 }}></div>
        <StyleInput
          icon={Images.phone}
          placeholder="Phone"
          value={phone}
          setValue={setPhone}
        />

        <div style={{ marginTop: 40 }}></div>
        <StyleInput
          icon={Images.home}
          placeholder="Địa chỉ"
          value={address}
          setValue={setAddress}
        />

        <div style={{ marginTop: 40 }}></div>
        <StyleInput
          icon={Images.lock}
          placeholder="Mật khẩu"
          type="password"
          value={password}
          setValue={setPassword}
        />

        <button style={styles.btnLogin} onClick={onRegister} className="cursorPointer" >
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

export default RegisterScreen;
