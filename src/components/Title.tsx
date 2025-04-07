interface TitleProps{
  name: string;
}

function Title({name}: TitleProps) {
  return (
    <div className="font-semibold text-md">
        {name}
    </div>
  )
}

export default Title;