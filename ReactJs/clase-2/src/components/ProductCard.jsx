/* eslint-disable react/prop-types */

const ProductCard = ({ imageURL, category, description, price }) => {
    return (
        <>
            {/* <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img
                            className="h-48 w-full object-cover md:w-48"
                            src={imageURL}
                            alt=''
                        />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                            {category}
                        </div>
                        <p className="mt-2 text-gray-500">{description}</p>
                        <div className="mt-4">
                            <span className="text-gray-500">Price:</span>{' '}
                            <span className="font-semibold">${price}</span>
                        </div>
                        <button className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-md">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div> */

                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                            <div className="group relative">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img
                                        src={imageURL}
                                        alt=''
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {description}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{category}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">{price}</p>
                                </div>
                                <button style={{ border: '1px solid black', borderRadius: '1rem', padding: '1rem' }}>Add to bag</button>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    )
}

export default ProductCard