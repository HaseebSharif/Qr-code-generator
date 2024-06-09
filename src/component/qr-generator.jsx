import React, { useEffect, useRef, useState, forwardRef } from "react";
import QRious from "qrious";

const QRCode = forwardRef(
  ({ elementId, initialText, style, showButtons }, ref) => {
    const [text, setText] = useState(initialText);
    const canvasRef = useRef(null);

    useEffect(() => {
      if (canvasRef.current) {
        new QRious({
          element: canvasRef.current,
          value: text,
          size: 200,
        });
      }
    }, [text]);

    useEffect(() => {
      if (ref) {
        ref.current = canvasRef.current;
      }
    }, [ref]);

    const refreshQRCode = () => {
      const currentUrl = window.location.href;
      const currentTime = new Date().toISOString();
      setText(`${currentUrl}?time=${currentTime}`);
    };

    const printQRCode = () => {
      window.print();
    };

    return (
      <div>
        <canvas id={elementId} ref={canvasRef} style={style}></canvas>
        {showButtons && (
          <div className="buttons">
            <button
              className="btn"
              id={`refresh-${elementId}`}
              onClick={refreshQRCode}
            >
              Refresh &#x21bb;
            </button>
            <button
              className="btn"
              id={`print-${elementId}`}
              onClick={printQRCode}
            >
              Print
            </button>
          </div>
        )}
      </div>
    );
  }
);

QRCode.displayName = "QRCode";

export default QRCode;
