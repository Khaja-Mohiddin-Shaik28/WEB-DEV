import React, { useState } from "react";
import { useEffect } from "react";
import { useGetAllReviewsQuery } from "../services/apiFetching";
import { storeAllReviews, sortReviews } from "../services/reviewsSlice";
import { useSelector, useDispatch } from "react-redux";
function Home() {
  const { data, isLoading, refetch } = useGetAllReviewsQuery();
  const reviews = useSelector((state) => state.reviews.reviews);
  const [filterState, filterToggler] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(storeAllReviews(data));
    }
  }, [data, dispatch]);
  useEffect(() => {
    refetch();
  }, [refetch]);
 
  if (isLoading) {
    return <h1>Loading</h1>;
  }
 
  function filterTogglerFunction(){
    filterToggler(!filterState);
  }
  function handleFilterSelect(filterType){
    dispatch(sortReviews(filterType));
  }
  return(
     <div className="bg-gray-200 min-h-[100vh] min-w-full container">
      {/* Filter */}
      <div className="filter flex  justify-end w-full h-[10%]">
        <button className="pt-4 pr-14 filter " onClick={filterTogglerFunction}>
      <i className="fa-solid fa-filter fa-xl" style={{color: "#202020"}}></i>
      </button>
      {filterState && (
        <div className="absolute p-2 bg-white z-10 rounded-lg right-8 top-[2.8rem] filter-dropdown drop-shadow-lg">
          <ul className="w-16">
            <li onClick={() => handleFilterSelect("views")} className="pl-2 mt-1 rounded-md text-md hover:text-white hover:bg-blue-400 hover:cursor-pointer">Popular</li>
            <li onClick={() => handleFilterSelect("likes")} className="pl-2 mt-1 rounded-md text-md hover:text-white hover:bg-blue-400 hover:cursor-pointer">Rating</li>
          </ul>
        </div>
      )}
      </div>
      {/* Reviews */}
      <div className="w-full h-[90%] p-2 reviews">
        {reviews && reviews.map((review)=>(
          <div className="w-11/12 p-4 mt-2 mb-4 ml-4 mr-4 bg-white rounded-lg drop-shadow-lg review" key={review._id} >
            <h1 className="mb-2 text-2xl font-bold">{review.title}</h1>
            <p className="mb-2 font-semibold ">{review.body}</p>
            <div className="tags">
              <ul className="flex">
               {review.tags && review.tags.map((tag)=>(
                <li className="p-1 mb-3 mr-4 text-sm bg-gray-200 rounded-lg drop-shadow-lg" > <i className="fa-solid fa-circle fa-xs"></i> {tag}</li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between w-[13%] analytics">
            <p><i className="fa-solid fa-eye" style={{color: "#74C0FC"}}></i> {review.views}</p>
            <p><i className="fa-solid fa-thumbs-up" style={{color: "#2095ee"}}></i> {review.reactions.likes}</p>
            <p><i className="fa-solid fa-thumbs-down" style={{color: "#e91c1c"}}></i> {review.reactions.dislikes}</p>
            </div>
          </div>
        ))}
      </div>
  </div>
  );
}


export default Home;
