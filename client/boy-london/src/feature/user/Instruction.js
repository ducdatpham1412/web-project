import React from "react";
import Images from "../../assets/images";

const Instruction = () => {
    
        return (
            <div style={styles.page}>
                <h1 style={styles.banner}> HƯỚNG DẪN MUA HÀNG</h1>
                <div style={{textAlign:"center", marginBottom: 30, fontSize: 18,}}>
                    <span>12/12/2021</span>
                </div>
                <img src={Images.backPoli} style={styles.image}/>
                <p style={styles.para}>Quý khách vui lòng tham khảo thông tin chi tiết về từng bước đặt hàng như sau:</p>
                <h4 style={styles.section}>BƯỚC 1: TÌM KIẾM VÀ CHỌN SẢN PHẨM YÊU THÍCH TRÊN WEBSITE</h4>
                <ol style={styles.sectionIn}>
                    <li>Chọn xem sản phẩm ở mục Shop</li>
                    <li>Xem thông tin sản phẩm, hình ảnh chi tiết của sản phẩm bằng cách nhấp vào sản phẩm</li>
                    <li>Chọn màu sắc, size và số lượng sản phẩm muốn mua sau đó Thêm vào giỏ hàng "<strong>"Add to cart"</strong>.
                    Bạn có thể tiếp tục chọn sản phẩm khác <strong>"Mua thêm"</strong> hoặc tiếp tục xử lý đơn hàng 
                    <strong>"Thanh toán"</strong>.</li>
                </ol>
                <h4 style={styles.section} >BƯỚC 2: TIẾN HÀNH ĐẶT HÀNG ONLINE VÀ THANH TOÁN ĐƠN HÀNG</h4>
                <p style={styles.para}>Trên trang thanh toán, khách hàng lưu ý điền đầy đủ thông tin bắt buộc cho đơn hàng và thêm Mã giảm giá (nếu có):</p>
                <h4 style={styles.section} >I. ĐỊA CHỈ NGƯỜI MUA</h4>
                <ol style={styles.sectionIn} >
                    <li>
                    Đối với khách hàng đã có tài khoản, xin vui lòng đăng nhập bằng tài khoản đã có sẵn trước khi đặt hàng.
                    </li>
                    <li>
                    London Boy khuyến khích khách hàng mua sắm bằng cách đăng ký tài khoản tại londonboy.vn. 
                    Với tài khoản này, bạn sẽ dễ dàng đặt mua sản phẩm mà không cần điền lại thông tin mỗi lần mua hàng và nhận những ưu đãi từ thương hiệu.
                    </li>
                </ol>
                <h4 style={styles.section} >II. PHƯƠNG THỨC VẬN CHUYỂN</h4>
                <p style={styles.para} ><strong>Miễn phí vận chuyển</strong> tại với đơn hàng từ <strong>1.000.000 vnđ</strong> trên website chính thức</p>
                <p style={styles.para} >Đối với những đơn hàng có giá trị dưới <strong> 1.000.000 vnđ</strong>, 
                London Boy áp dụng biểu phí giao hàng của hãng vận chuyển GHN theo từng khu vực.</p>
                <h4 style={styles.section} >III. PHƯƠNG THỨC THANH TOÁN</h4>
                <p style={styles.para} >Bạn có thể chọn 1 trong 2 phương thức thanh toán có sẵn</p>
                <ol style={styles.sectionIn} >
                    <li>
                        Thanh toán khi nhận hàng (OCD).
                    </li>
                    <li>
                        Thanh toán qua chuyển khoản InternetBanking vào số tài khoản dưới đây: 
                    </li>
                </ol>
                <p style={styles.para} ><strong>STK: 085348138413</strong></p>
                <p style={styles.para}><strong>Chủ TK: Nguyễn Tùng Dương</strong></p>
                <p style={styles.para}><strong>Tại Vietcombank chi nhánh Hoàn Kiếm</strong></p>
                <h4 style={styles.section} >BƯỚC 3: XÁC NHẬN ĐƠN HÀNG</h4>
                <p style={styles.para} >London Boy sẽ liên hệ xác nhận đơn đặt hàng thành công trực tiếp qua điện thoại hoặc qua email.</p>
                <p style={styles.para}>Sau khi xác nhận đơn hàng, London Boy sẽ tiến hành đóng gói và gửi đơn hàng trong thời gian sớm nhất.</p>
                <div style={styles.contact}>
          <div style={styles.contactblock}>
            <b> Store location</b>
            <p>-111 Trần Quốc Toản, Q. Bắc Từ Liêm,</p>
            <p>-HN145 Hai Bà Trưng, Q. Bắc Từ Liêm, HN</p>
            <p>-951 Đổng Triều, Q. 1, HCM</p>
          </div>
          <div style={styles.contactblock}>
            <b>-Hỗ trợ mua hàng</b>
            <p>-Hướng dẫn mua hàng tại website</p>
          </div>
          <div style={styles.contactblock}>
            <b>-Contact us</b>
            <p>-Hotline tư vấn : 0912981249</p>
            <p>-Hotline khiếu nại: 091237124</p>
          </div>
          <div style={styles.contactblock}>

          </div>
          </div>
            </div>
            
            
        )
    
}
const styles = {
    banner: {
        marginLeft: 100,
        textAlign: "center",
    },
    image: {
        display: "block",
        marginRight: "auto",
        marginLeft: "auto",
        borderRadius: 10,
        width: 650,
        height: 350,
    },
    para: {
        marginTop: 15,
        marginLeft: 75,
        
    },
    section: {
        marginLeft: 75,
    },
    sectionIn: {
        marginLeft: 85,
    },
    page: {
        marginRight:30,
        marginBottom: 20,
    },
    contact: {
        paddingLeft: 10,
        marginTop: 20,
        marginBottom: 10,
        display: "flex",
        flexDirection: "row",
        marginTop: 60,
      },
      contactblock: {
        paddingRight: 10,
        fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
        width: "25%",
        marginLeft: 25,
        marginTop: 15,
      },
}
export default Instruction;