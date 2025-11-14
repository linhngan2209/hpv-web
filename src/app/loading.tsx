import React from "react";

export const LoadingOverlay: React.FC = () => {
    return (
        <div className="fixed inset-0 z-50 bg-opacity-30 flex items-center justify-center">
            <div className="relative">
                <div
                    className="w-12 h-12 border-4 border-gray-300 rounded-full animate-spin"
                    style={{
                        borderTopColor: "#2D5E4F",
                        borderRightColor: "#3d7e6a",
                        borderBottomColor: "#5196db",
                        borderLeftColor: "#3d7e6a"
                    }}
                />

                <div
                    className="absolute inset-0 w-12 h-12 rounded-full opacity-20 animate-ping"
                    style={{
                        background: "linear-gradient(135deg, #2D5E4F, #5196db)"
                    }}
                />
            </div>
        </div>
    );
};

export default LoadingOverlay;
