"use client";
import { ITeamMember } from "@/interfaces/teamMember.interface";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import React, { useRef, useState } from "react";

const PartnerCard = ({ data }: { data: ITeamMember }) => {
  const [reviewIndex, setReviewIndex] = useState(0);
  const [feedbackPage, setFeedbackPage] = useState(0);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const reviews = data?.personReviews ?? [];
  const currentReview = reviews[reviewIndex];
  const feedbacks = currentReview?.feedbacks ?? [];

  const feedbacksPerPage = 4;
  const totalFeedbackPages = Math.ceil(feedbacks.length / feedbacksPerPage);

  const currentFeedbacks = feedbacks.slice(
    feedbackPage * feedbacksPerPage,
    feedbackPage * feedbacksPerPage + feedbacksPerPage
  );
  const scrollToTop = () => {
    if (cardRef.current) {
      cardRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleNext = () => {
    if (feedbackPage + 1 < totalFeedbackPages) {
      scrollToTop();

      setFeedbackPage((prev) => prev + 1);
    } else {
      scrollToTop();
      setReviewIndex((prev) => (prev + 1) % reviews.length);
      setFeedbackPage(0);
    }
  };

  const handlePrev = () => {
    if (feedbackPage > 0) {
      setFeedbackPage((prev) => prev - 1);
      scrollToTop();
    } else {
      const prevReviewIndex =
        (reviewIndex - 1 + reviews.length) % reviews.length;
      const prevReview = reviews[prevReviewIndex];
      const totalPrevPages = Math.ceil(
        (prevReview?.feedbacks?.length ?? 0) / feedbacksPerPage
      );
      setReviewIndex(prevReviewIndex);
      setFeedbackPage(totalPrevPages - 1);
      scrollToTop();
    }
  };

  return (
    <div className="bg-white p-5 rounded-[20px] space-y-4 scroll-mt-10">
      {/* Profile Section */}
      <div className="w-full space-y-4 text-center">
        <div className="w-full h-[400px] relative group">
          <Image
            src={data?.profilePhoto ?? ""}
            alt="team member"
            className="object-contain inset-0 w-full h-full group-hover:scale-105 transition-all duration-300"
            fill
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <div
            dangerouslySetInnerHTML={
              data?.fullName ? { __html: data.fullName } : undefined
            }
            className="font-bold text-[26px] leading-8 text-black"
          ></div>
          <span className="text-black-70 text-lg">{data?.role}</span>
        </div>
      </div>

      {/* Review Section */}
      <div className="relative overflow-hidden">
        <div
          ref={cardRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${reviewIndex * 100}%)` }}
        >
          {reviews.map((review, index) => {
            const reviewFeedbacks = review.feedbacks ?? [];
            const totalPages = Math.ceil(
              reviewFeedbacks.length / feedbacksPerPage
            );
            const visibleFeedbacks =
              index === reviewIndex ? currentFeedbacks : [];

            return (
              <div
                key={index}
                className="min-w-full p-5 border border-black-10 rounded-[20px] space-y-4"
              >
                {/* Brand Info */}
                <div className="w-full max-w-[220px] space-y-2.5 mx-auto text-center">
                  <Image
                    width={220}
                    height={100}
                    src={review?.brandLogo ?? ""}
                    alt="brand"
                  />
                  <p className="text-primary font-bold text-lg">
                    {review?.brandName}
                  </p>
                </div>

                {/* Feedback Text */}
                <div className="flex flex-col items-center gap-y-5 text-center transition-all duration-300 ">
                  {visibleFeedbacks.map((text, i) => (
                    <p key={i} className="text-base text-black-80">
                      {i === 0 ? `“${text}` : text}
                      {i === visibleFeedbacks.length - 1 &&
                      feedbackPage === totalPages - 1
                        ? "”"
                        : ""}
                    </p>
                  ))}
                </div>

                {/* Footer (designation + controls) */}
                <div className="border-t border-black-10 pt-4 space-y-2.5">
                  <div className="flex flex-col items-center">
                    <strong className="font-bold text-primary text-lg text-center">
                      {review?.designation}
                    </strong>
                    <strong className="font-bold text-black-80 text-base">
                      {review?.brandName} {review?.country}
                    </strong>
                  </div>

                  {/* Navigation */}

                  {reviews?.length > 1 ? (
                    <div className="flex items-center justify-center gap-x-2.5">
                      <button
                        onClick={handlePrev}
                        className="border border-primary rounded-full text-primary p-3 flex items-center justify-center cursor-pointer hover:text-white hover:bg-primary transition"
                      >
                        <IconChevronLeft />
                      </button>
                      <button
                        onClick={handleNext}
                        className="border border-primary rounded-full text-primary p-3 flex items-center justify-center cursor-pointer hover:text-white hover:bg-primary transition"
                      >
                        <IconChevronRight />
                      </button>
                    </div>
                  ) : null}

                  {totalFeedbackPages > 1 ? (
                    <p className="text-sm font-medium uppercase text-primary text-center">
                      Part {feedbackPage + 1}/{totalFeedbackPages}
                    </p>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;
