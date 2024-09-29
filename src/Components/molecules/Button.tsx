interface ButtonProps {
  children?: any;
}

const Button = (props: ButtonProps) => {
  return (
    <div className="bg-[#200F9E] text-lg px-4 py-2 w-fit text-white mt-5 font-light m-2 hover:bg-[#382d9b] transition-all duration-200">
     <button> {props.children}</button>
    </div>
  );
};

export default Button;
