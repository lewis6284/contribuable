
const PopReusable = ({
    isPopReuseOpen,
    onPopReuseClose,
    title = '',
    children,
    showPopReuseClose = true,
    // setIsPopReuseOpen,
    width = 'w-[400px]',
    className = '',
}) => {
    
    if (!isPopReuseOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-[1000]">
            <div
                className={`bg-white rounded-lg shadow-lg max-w-[90vw] p-6 relative ${width}`}
            >
                {showPopReuseClose && (
                    <button
                        onClick={onPopReuseClose}
                        className="absolute top-3 right-3 text-2xl text-gray-500 hover:text-gray-700 focus:outline-none"
                        aria-label="Close"
                    >
                        &times;
                    </button>
                )}
                {title && <h2 className={`mt-0 mb-4 text-xl font-semibold  ${className}`}>{title}</h2>}
                <div>{children}</div>
            </div>
        </div>
    );
};

export default PopReusable;
