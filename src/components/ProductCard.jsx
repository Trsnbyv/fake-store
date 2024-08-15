const ProductCard = ({ product }) => {
    const truncateDescription = (description) => {
        return description.length > 100 ? `${description.substring(0, 100)}...` : description;
    };

    return (
        <div className="bg-white h-[450px] rounded-lg hover:shadow-2xl duration-300 shadow-md min-h-[300px] flex flex-col justify-between">
            <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-48 object-cover rounded-t-lg mb-4"
            />

            <div className=" flex flex-col justify-between p-4" >
                
            <div>
                <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                <p className="text-gray-600 text-sm">{truncateDescription(product.description)}</p>
            </div>

            <div className="mt-4 flex justify-between items-center">
                <div className="text-yellow-500 flex items-center">
                    <span className="mr-2">{product.rating.rate}</span>
                    <span>({product.rating.count} reviews)</span>
                </div>
                <div className="text-lg font-bold">${product.price}</div>
            </div>
            </div>
        </div>
    );
};

export default ProductCard;
