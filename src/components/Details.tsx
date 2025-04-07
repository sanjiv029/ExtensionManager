interface DescProps{
    desc:string;
}
function Details({desc}: DescProps){
  return (
    <div className="text-sm">
        {desc}
    </div>
  )
}

export default Details