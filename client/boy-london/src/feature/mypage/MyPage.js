import React, { useEffect, useState } from "react";
import StyleInput from "../../components/StyleInput";
import Images from "../../assets/images";
import { ADMIN_ROUTE, ROOT_SCREEN, USER_ROUTE } from "../../navigation/routes";
import request from "../../api/request";
import Cookies from "js-cookie";


const listOrder = [{

}]

const MyPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [listOrder, setListOrder]= useState([]);
  const getData = async () => {
    try {
      const res = await request.get("/account");
      setName(res.name);
      setEmail(res.email);
      setPhone(res.phoneNumber);
      setAddress(res.address);
      
      const res2= await request.get("/get-user-orderlist");
      setListOrder(res2);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const onChangeInfo = async () => {
    try {
      const res = await request.put("/account/change-information", {
        name: name,
        email: email,
        phoneNumber: phone,
        address: address,
      });
      
    } catch (err) {
      alert(err);
    }
  };

  const gotoMangerPage = () => {
    window.location.href = ADMIN_ROUTE.productManage;
  };

  const logOut = async () => {
    try {
      Cookies.remove('token')
      window.location.reload()
    } catch(err){
      alert(err)
    }
  } 
  

  const changePassword = () => {
    window.location.href = USER_ROUTE.forgotPass;
  }

  

 

  return (
    <div style={Style.page}>
      <div style={Style.userinfo}>
        <h1>Tài khoản của tôi</h1>
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

        <button style={Style.button1} onClick={onChangeInfo}>
          Cập nhật thông tin
        </button>

        <div>
        <button style={Style.button2} onClick={changePassword}>
          Đổi mật khẩu
        </button>

        <button style={Style.button2} onClick={logOut}>
          Đăng xuất
        </button>
        </div>
      </div>
      <div style={Style.cartinfo}>
      <h1 style={{marginLeft: 10}}>Danh sách đơn hàng</h1>
        <div style={Style.table}>
          <div style={Style.tableHeader}>
            <p style={Style.data1}>MÃ ĐƠN HÀNG</p>
            
            <p style={Style.data1}>SẢN PHẨM</p>
            <p style={Style.data1}>NGÀY ĐẶT HÀNG</p>
            <p style={Style.data1}>NGÀY CHUYỂN HÀNG </p>
            <p style={Style.data1}>TÌNH TRẠNG</p>
          </div>
          <div style={Style.dataView}>
          {listOrder.map((item) => (
            <div
              style={Style.dataTable}
            >

              <div style={Style.data1}>{item.Orders.orderID}</div>
              <div style={Style.data1}>{item.Products.name}</div>
              <div style={Style.data1}>{item.Orders.orderDate}</div>
              <div style={Style.data1}>{item.Orders.shippedDate}</div>
              <div style={Style.data1}>{item.Orders.status}</div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Style = {
  dataView:{
    overflow: "auto",
    height:300
  },
  table: {
    width: 700,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 10,
    backgroundColor: "#E0DEDE",
    textAlign: "center",
    marginTop: 20,
    
  },
  tableHeader: {
    borderBottom: 1,
    borderBottomStyle: "solid",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: "bold",
    flex: 1,

  },
  dataTable: {
    
    display: "flex",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: "center",
    justifyContent: "center",
    
    
  },
  
  data1: {
    paddingLeft: 10,
    justifyContent: "center",
    width: "20%",
  },
  
  text: {
    border: "solid",
    

    marginTop: 10,
    borderRadius:10,
    textAlign: "left",
  },
  button2: {
    backgroundColor: "transparent",
    borderWidth: 0,
    marginLeft: 80,
    marginTop:30,
    fontSize: "x-large",
    textDecoration: "underline",
  },
  promotion: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    width: 340,
  },
  page: {
    position: "relative",
    width: 1440,
    margin: "auto",

    display: "flex",
    flexDirection: "row",
  },
  userinfo: {
    borderLeft: 130,
    width: "50%",
  },
  cartinfo: {
    width: "50%",
  },

  button1: {
    width:200,
    marginLeft: 145,
    marginTop: 25,
    borderRadius: 50,
    backgroundColor: "black",
    height: 50,
    color: "white",
    fontSize: 20,
  },
};

export default MyPage;
