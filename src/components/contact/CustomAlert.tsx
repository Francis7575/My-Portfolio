import { useEffect } from "react";
import IconCheck from "/assets/icon-success-check.svg"

type CustomAlertProps = {
  message: string
  onClose: () => void
}
const CustomAlert = ({ message, onClose }: CustomAlertProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 60000); // Alert will disappear after 3 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-loading text-white px-4 py-6 rounded-lg shadow max-w-[300px] md:max-w-[400px] w-full">
      <div className="flex items-center gap-2 mb-4">
        <img src={IconCheck} alt="Success" />
        <p>Message Sent</p>
      </div>
      <p>{message} </p>
    </div>
  );
};

export default CustomAlert