interface LeftWobbleImageContentProps {
    children : string,
}
const LeftWobbleImageContent = (props: LeftWobbleImageContentProps) => {
  return (
    <div className="bg-slte-600 h-1/2 w-[90%] flex my-auto">
    <div className=" text-xl leading-loose mt-20 ml-20 ">
  {props.children}
    </div>
  </div>
  );
};

export default LeftWobbleImageContent;