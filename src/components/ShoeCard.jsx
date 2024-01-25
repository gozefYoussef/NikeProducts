import { bigShoe2 } from "../assets/images"

const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImage}) => {
    const handleClick = ()=> {
        if(bigShoeImage !== imgURL.bigShoe){
            changeBigShoeImage(imgURL.bigShoe)
        }
    }
  return (
    <div 
    onClick={handleClick}
    className={`border-2 rounded-xl ${bigShoeImage === imgURL ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1`}>
        <div>
            <img src={imgURL.thumbnail} />
        </div>
    </div>
  )
}

export default ShoeCard