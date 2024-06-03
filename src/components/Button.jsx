
const Button = ({ onClick, children }) => {
    return (
      <button className="bg-pink-600 text-white py-2 px-6 my-10 rounded hover:bg-pink-700"
        onClick={onClick}
      >
        {children}
      </button>
    )
  }
  
  export default Button