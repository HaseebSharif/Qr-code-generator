import { useRef } from "react";
import "./App.css";
import QRCode from "./component/qr-generator";
import ProductCard from "./component/product-card";
import { products } from "../products-data";

function App() {
  const qrCanvas2Ref = useRef(null);

  const downloadQRCode = (canvasRef, filename) => {
    const canvas = canvasRef.current;
    console.log(canvas);
    if (canvas) {
      const dataURL = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = filename;
      link.click();
    }
  };

  return (
    <>
      <div className="background-video">
        <video autoPlay muted loop>
          <source src="src/assets/background-video.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
      <div className="container">
        <header className="header">
          <div className="logo">
            <a href="/">
              <img src="src/assets/logo.png" alt="Logo" />
            </a>
          </div>
          <div>
            <h1>speeqr</h1>
            <p>today speakerphone</p>
          </div>
        </header>
        <div className="content">
          <div className="box">
            <div className="box-header">Products</div>
            <div className="product-card-body">
              <div className="scroller">
                <div className="product-container">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="box qr-box">
            <div className="box-header">Print a SpeeQR</div>
            <div className="card-body">
              <div className="qr-boxs">
                <QRCode
                  elementId="qrCanvas1"
                  initialText="https://www.speeqr.com/qr1"
                  style={{ width: "100px", height: "100px" }}
                  showButtons={false}
                />
              </div>
            </div>
            <div className="buttons">
              <button className="btn">Create</button>
            </div>
          </div>
          <div className="box qr-box">
            <div className="box-header">Download</div>
            <div className="card-body">
              <div className="qr-boxs">
                <QRCode
                  elementId="qrCanvas2"
                  initialText="https://www.speeqr.com/qr2"
                  style={{ width: "100px", height: "100px" }}
                  showButtons={false}
                  ref={qrCanvas2Ref}
                />
              </div>
            </div>
            <div className="buttons">
              <button
                onClick={() => downloadQRCode(qrCanvas2Ref, "QRCode.png")}
              >
                Download &#x1f4e5;
              </button>
            </div>
          </div>
          <div className="box qr-box">
            <div className="box-header">Share your Screen</div>
            <div className="card-body">
              <div className="qr-boxs">
                <QRCode
                  elementId="qrCanvas3"
                  initialText="https://www.speeqr.com/qr3"
                  style={{ width: "100px", height: "100px" }}
                  showButtons={true}
                />
              </div>
            </div>
            <div className="buttons"></div>
          </div>
        </div>
      </div>
      <footer>
        <div>
          <h2>How it works</h2>
        </div>
        <div className="foter-right">
          <h4>Legal</h4>
          <h4>Contact Us</h4>
          <h4>@2024 speeqr ltd</h4>
        </div>
      </footer>
    </>
  );
}

export default App;
