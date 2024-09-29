/**Utility componenet for centreing JSX elements without too much CSS */
/**
 * These components are used in the following files:
 * pages/Transition.tsx
 * templates/Contact.tsx
 * templates/Hero.tsx
 * templates/Infobar.tsx
 * Navigator.tsx
 * Reasons.tsx
 */
interface FlexCenterProps {
  children?: any;
  className?: string;
}
const FlexCenterRow = (props: FlexCenterProps) => {
  return (
    <div
      className={`flex flex-row items-center justify-center ${props.className}`}
    >
      {props.children}
    </div>
  );
};

const FlexCenterColumn = (props: FlexCenterProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center ${props.className}`}
    >
      {props.children}
    </div>
  );
};

const FixedFlexCenter = (props: FlexCenterProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center ${props.className} w-full h-2/3 fixed -z-10`}
    >
      {props.children}
    </div>
  );
};

export { FlexCenterRow, FlexCenterColumn, FixedFlexCenter };
