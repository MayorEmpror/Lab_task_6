/* This is atomic component dedicated to creating light effect */
interface LightProps {
  color: string; // The color of the light
  width: number; // The X-Size of the light effect
  height: number; // The Y-Size of the light effect
  blurRadius: number; // The BlurRadius of the light effect
  children?: any; // Optional prop, ONLY USE IF REQUIRED
}

const Light = (props: LightProps) => {
  return (
    <div
      style={{
        filter: `blur(${props.blurRadius}px)`,
        width: `${props.width}px`,
        height: `${props.height}px`,
        background: `${props.color}`,
      }}
      className="absolute z-[-1000] hidden sm:block"
    >
      {props.children}
    </div>
  );
};

export default Light;
