"use client"
import React from 'react'
import { useState , useEffect } from 'react';
import { addReviewServ } from '../services/review.service';

const ReviewPopup = ({onClose}) => {

    const [form, setForm] = useState({
    rating: "",
    review: "",
  });

  const handleRatingChange = (e) => {
    setForm((prev) => ({ ...prev, rating: e.target.value }));
  };

  const handleReviewTextChange = (e) => {
    setForm((prev) => ({ ...prev, review: e.target.value }));
  };

  const [reviewProductId, setReviewProductId] = useState("");

  const handleSubmitReview = async () => {
    console.log("Review Form:", form);

    const payload = {
      rating: form.rating,
      review: form.review,
      userId: loggedUserData?._id,
      productId: reviewProductId,
    };

    try {
    //   const res = await addReviewServ(payload);
    //   console.log(res);

    //   if (res?.statusCode == "200") {
    //     toast.success(res?.message);
    //   }
      onClose();
    } catch (error) {
    //   console.error("Error fetching addresses:", error);
    //   toast.error(error?.response?.data?.message);
    }
  };

  const handleReviewShow = (id) => {
    setReviewPopup(true);
    setReviewProductId(id);
    console.log("product id", reviewProductId);
  };

  useEffect(() => {
    if (reviewProductId) {
      console.log("SET SUCCESSFULLY:", reviewProductId);
    }
  }, [reviewProductId]);

  return (
    <div>
      {/* popup to add review  */}

      
          <div
            className="review-popup position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
            style={{ background: "rgba(0,0,0,0.5)", zIndex: 9999 }}
          >
            <div
              className="bg-white p-sm-4 px-sm-5 p-3 py-4"
              style={{ width: "500px", maxWidth: "90%", borderRadius: "3%" }}
            >
              <div className=" text-center align-items-center mb-3">
                <h4>Write a Review</h4>
                <p class="text-sm text-gray-500 mb-sm-4 mb-2">
                  We value your feedback!
                </p>
              </div>

              <div className="d-flex flex-column ">
                <div class="star-rating mb-3 justify-content-center">
                  <input
                    type="radio"
                    name="rating"
                    id="star5"
                    value="5"
                    onChange={handleRatingChange}
                  />
                  <label for="star5">★</label>

                  <input
                    type="radio"
                    name="rating"
                    id="star4"
                    value="4"
                    onChange={handleRatingChange}
                  />
                  <label for="star4">★</label>

                  <input
                    type="radio"
                    name="rating"
                    id="star3"
                    value="3"
                    onChange={handleRatingChange}
                  />
                  <label for="star3">★</label>

                  <input
                    type="radio"
                    name="rating"
                    id="star2"
                    value="2"
                    onChange={handleRatingChange}
                  />
                  <label for="star2">★</label>

                  <input
                    type="radio"
                    name="rating"
                    id="star1"
                    value="1"
                    onChange={handleRatingChange}
                  />
                  <label for="star1">★</label>
                </div>

                <textarea
                  placeholder="Share your thoughts about the product"
                  rows={4}
                  onChange={handleReviewTextChange}
                  className="w-100 p-2 "
                  style={{ borderRadius: "8px" }}
                />

                {/* <div className="add-review mb-4">
      <h5>Add a photo or video</h5>

      <label htmlFor="imageUpload" className="upload-box w-100 text-center d-flex align-items-center justify-content-center">
        {imagePreview ? (
          <img src={imagePreview} alt="Preview" className="img-preview"  
            style={{ maxWidth: "70px", maxHeight: "70px", objectFit: "contain", borderRadius: "8px", }}/>
        ) : (
          'Drop files here to upload'
        )}
      </label>

      <input
        type="file"
        id="imageUpload"
        accept="image/*"
        onChange={handleImageChange}
        className="form-control d-none"
      />
                  </div> */}

                <div className="d-flex gap-3 w-100 mt-3">
                  <button
                    className="btn border-none  mt-3 mb-2 fw-bold"
                    onClick={() => setReviewPopup(!showReviewPopup)}
                    style={{
                      width: "50%",
                      backgroundColor: "rgb(211 211 211)",
                      borderRadius: "5px",
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn disclaimerBtn border-none text-white mt-3 mb-2 fw-bold"
                    style={{
                      width: "50%",
                      backgroundColor: "#c01212",
                      borderRadius: "5px",
                    }}
                    onClick={handleSubmitReview}
                  >
                    Submit Review
                  </button>
                </div>
              </div>
            </div>
          </div>
       
    </div>
  )
}

export default ReviewPopup
