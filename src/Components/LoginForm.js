import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectorBar from './SelectorBar';

export default function HomePage() {
   const [phoneNumber, setPhoneNumber] = useState("");
   const [softwareCode, setSoftwareCode] = useState("");
   const [position, setPosition] = useState(null);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(
            (position) => {
               setPosition({
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude
               });
            },
            (error) => {
               console.error('Error getting geolocation:', error);
            }
         );
      } else {
         console.error('Geolocation is not supported by this browser.');
      }
   }, []);

   const onSubmitForm = (e) => {
      e.preventDefault();

      localStorage.setItem('softwareCode', softwareCode);
      localStorage.setItem('phoneNumber', phoneNumber);
      localStorage.setItem('position', JSON.stringify(position));
      if (localStorage.getItem('softwareCode') === "12345") {
         setLoading(true);

      } else {
         alert('Mã không tồn tại !!!');
      }

      setTimeout(() => {
         setLoading(false);
         // Handle form submission
      }, 2000);
   }


   return (
      <div className="App-background d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
         <div className="text-center">
            <h1 className="text-white">UY TÍN - NHANH CHÓNG - BẢO MẬT</h1>
            <SelectorBar/>
            <div className="p-4 bg-white rounded shadow" style={{ maxWidth: '750px', width: '100%' }}>              
               <h3 className="text-center mb-4 text-black">ĐĂNG NHẬP HỆ THỐNG</h3>
               <Form onSubmit={onSubmitForm}>
                  <Form.Group className="mb-3" controlId="phoneNumber">
                     <Form.Label className="text-danger strong">SỐ ĐIỆN THOẠI CẦN THEO DÕI:</Form.Label>
                     <Form.Control as="select">
                        <option value="54">Argentina(+54)</option>
                        <option value="61">Australia(+61)</option>
                        <option value="43">Austria(+43)</option>
                        <option value="32">Belgium(+32)</option>
                        <option value="55">Brazil(+55)</option>
                        <option value="1">Canada(+1)</option>
                        <option value="86">China(+86)</option>
                        <option value="357">Cyprus(+357)</option>
                        <option value="45">Denmark(+45)</option>
                        <option value="358">Finland(+358)</option>
                        <option value="33">France(+33)</option>
                        <option value="49">Germany(+49)</option>
                        <option value="30">Greece(+30)</option>
                        <option value="353">Ireland(+353)</option>
                        <option value="39">Italy(+39)</option>
                        <option value="81">Japan(+81)</option>
                        <option value="82">South Korea(+82)</option>
                        <option value="60">Malaysia(+60)</option>
                        <option value="52">Mexico(+52)</option>
                        <option value="31">Netherlands(+31)</option>
                        <option value="64">New Zealand(+64)</option>
                        <option value="47">Norway(+47)</option>
                        <option value="351">Portugal(+351)</option>
                        <option value="7">Russia(+7)</option>
                        <option value="65">Singapore(+65)</option>
                        <option value="34">Spain(+34)</option>
                        <option value="46">Sweden(+46)</option>
                        <option value="41">Switzerland(+41)</option>
                        <option value="44">United Kingdom(+44)</option>
                        <option value="1">United States(+1)</option>
                        <option value="84" selected>Vietnam(+84)</option>
                     </Form.Control>
                     <Form.Control type="text" placeholder="Nhập số điện thoại" className="mt-2" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="softwareCode">
                     <Form.Label className="text-danger strong">MÃ PHẦN MỀM - NHẬN TẠI HOTLINE/ZALO: ADMIN</Form.Label>
                     <Form.Control type="text" placeholder="Nhập mã phần mềm" value={softwareCode} onChange={(e) => setSoftwareCode(e.target.value)} />
                  </Form.Group>
                  {loading && (
                     <div className="loading-bar-container">
                        <div className="loading-bar"></div>
                     </div>
                  )}
                  <Button variant="primary" type="submit" className="w-100">ĐĂNG NHẬP</Button>
               </Form>



               <div className="scroll-text mt-3 text-center">
                  <p className="text-success mb-1">Tài khoản: 0911.340.xxx Đã Kích Hoạt Thành Công</p>
                  <p className="text-success mb-1">Tài khoản: 0912.757.xxx Đã Kích Hoạt Thành Công</p>
                  <p className="text-success mb-1">Tài khoản: 0913.825.xxx Đã Kích Hoạt Thành Công</p>
                  <p className="text-success mb-1">Tài khoản: 0824.175.xxx Đã Kích Hoạt Thành Công</p>
                  <p className="text-success mb-1">Tài khoản: 0967.785.xxx Đã Kích Hoạt Thành Công</p>
                  <p className="text-success mb-1">Tài khoản: 0916.145.xxx Đã Kích Hoạt Thành Công</p>
                  <p className="text-success mb-1">Tài khoản: 0967.785.xxx Đã Kích Hoạt Thành Công</p>
                  <p className="text-success mb-1">Tài khoản: 0916.145.xxx Đã Kích Hoạt Thành Công</p>
                  <p className="text-success mb-1">Tài khoản: 0967.785.xxx Đã Kích Hoạt Thành Công</p>
                  <p className="text-success mb-1">Tài khoản: 0916.145.xxx Đã Kích Hoạt Thành Công</p>
                  <p className="text-success mb-1">Tài khoản: 0967.785.xxx Đã Kích Hoạt Thành Công</p>
                  <p className="text-success mb-1">Tài khoản: 0916.145.xxx Đã Kích Hoạt Thành Công</p>
                  <p className="text-success mb-1">Tài khoản: 0967.785.xxx Đã Kích Hoạt Thành Công</p>
                  <p className="text-success mb-1">Tài khoản: 0916.145.xxx Đã Kích Hoạt Thành Công</p>
               </div>
            </div>
         </div>
      </div>
   );
}
