import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./sidebar";

type Props = {};
const MobileSidebar = (props: Props) => {
  if (!true) return;
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className='text-white' />
      </SheetTrigger>
      <SheetContent className='z-[100] p-0' side={"left"}>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
export default MobileSidebar;
