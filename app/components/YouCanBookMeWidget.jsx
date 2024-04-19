"use client"
import { useEffect } from 'react';

const YouCanBookMeWidget = () => {
  useEffect(() => {
    // Add an event listener for the "message" event
    const handleMessage = (event) => {
      if (event.origin === "https://scalifycommerce-call.youcanbook.me") {
        const iframe = document.getElementById("ycbm");
        if (iframe) {
          iframe.style.height = event.data + "px";
        }
      }
    };

    window.addEventListener("message", handleMessage, false);

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("message", handleMessage, false);
    };
  }, []);

  return (
    <iframe
      src="https://scalifycommerce-call.youcanbook.me/?embed=true"
      id="ycbm"
      style={{
<<<<<<< HEAD
        margin:'auto',
        marginTop:'10px',
        width: '70%',
        height: '900px',
=======
        marginTop:'10px',
        width: '100%',
        height: '100vh',
>>>>>>> origin/main
        border: '0px',
        backgroundColor: 'transparent'
      }}
      frameborder="0"
      allowtransparency="true"
      title="YouCanBookMe Widget"
    />
  );
};

export default YouCanBookMeWidget;
