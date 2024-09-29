interface StepsProps {
  Number : string
  ContentHeading : any
  Content :any
}

const Steps = (props:StepsProps) => {
  return (
    <div className="">
      <div className="font-semibold text-6xl lg:text-3xl xl:text-5xl text-center justify-center  xl:mt-10 text-blue-900">{props.Number}</div>
      <div className=" text-md xl:text-xl font-medium text-center justify-center xl:mt-5 ">{props.ContentHeading}</div>
      <div className="text-sm xl:text-md  text-center xl:mt-5">{props.Content}</div>
    </div>
  );
};

export default Steps;
