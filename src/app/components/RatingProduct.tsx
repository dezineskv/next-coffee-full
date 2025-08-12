import ReactStars from "react-stars";

function RatingProduct () {
    return (
   <div className="flex flex-col justify-center mx-auto text-center mt-8">
          <p className="font-bold">Rate this product</p>
          <ReactStars
            className="ml-4"
            count={5}
            // onChange={ratingChanged}
            size={24}
            color2={"#ffd700"}
          />
        </div>
        )
    }
    export default RatingProduct;