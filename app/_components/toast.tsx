import toast from "react-hot-toast";

export const Toast = {
    async success (message: string) {
        toast.custom(() => (
            <div className="bg-[#fff] text-[#753F21] px-16 py-4 border
                border-[#753F21] rounded-lg relative shadow-lg" role="alert">
                <span className="block sm:inline font-bold">{message}</span>
            </div>
        ));
    },

    async error (message: string){
        toast.custom(() => (
            <div className="bg-[#fff] text-[#753F21] px-16 py-4 border
                border-[#753F21] rounded-lg relative shadow-lg" role="alert">
                <span className="block sm:inline font-bold">{message}</span>
            </div>
        ));
    }
}
