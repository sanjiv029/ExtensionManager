import { Badge } from "./ui/badge";
import { Switch } from "./ui/switch";

interface ButtonProps {
  value: boolean;
  onRemove: () => void;
  }

function Button({ value, onRemove }: ButtonProps) {
  return (
    <>
      <Badge variant={'secondary'} className='text-sm hover:bg-black hover:text-white' onClick={onRemove}>Remove</Badge>
      <Switch
        checked={value} 
        />
    </>
  );
}

export default Button;
