/**Wrapper around the slightly verbose sidebar offered by shadcn UI */
/**
 * Component is used extensively in:
 * Navigator.tsx
 */
import {
  NavigationMenuLink,
} from "@/Components/ui/navigation-menu";

interface NavigationProps {
  children?: any;
  heading?: string;
}

const NavigationItem = (props: NavigationProps) => (
  <NavigationMenuLink className="p-3 hover:bg-gray-100 transition-all px-10 flex flex-col">
    <h1 className="text-md mr-5 whitespace-nowrap mb-2 text-blue-900 font-semibold">
      {props.heading}
    </h1>
    <p className="text-sm text-gray-500 mb-2">{props.children}</p>
  </NavigationMenuLink>
);

export default NavigationItem;
