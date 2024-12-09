import toast from "react-hot-toast";

namespace Toast{
    export const success = (message: string) => {
        toast.custom((t) => (
            <div className="bg-[#fff] text-[#753F21] px-16 py-4 border
                border-[#753F21] rounded-lg relative shadow-lg" role="alert">
                <span className="block sm:inline font-bold">{message}</span>
            </div>
        ));
    }

    export const error = (message: string) => {
        toast.custom((t) => (
            <div className="bg-[#fff] text-[#753F21] px-16 py-4 border
                border-[#753F21] rounded-lg relative shadow-lg" role="alert">
                <span className="block sm:inline font-bold">{message}</span>
            </div>
        ));
    }
}

export default Toast;