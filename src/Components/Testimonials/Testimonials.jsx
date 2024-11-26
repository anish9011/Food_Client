import React, { useRef } from 'react';
import Styles from './Testimonials.module.css';

export default function Testimonials() {
  // Create a reference for the scrollable container
  const scrollContainerRef = useRef(null);

  const testimonials = [
    {
      name: 'St Glx',
      location: 'South London',
      date: '24th September, 2023',
      review: 'The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald\'s standard – hot and satisfying.',
      profileImg: 'profile1.svg',
      bgImg: 'Rectangle 65.svg',
      ratingImg: 'Group 52.svg',
      timeSpanImg: 'Time Span.svg',
    },
    {
        name: 'St Glx',
        location: 'South London',
        date: '24th September, 2023',
        review: 'The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald\'s standard – hot and satisfying.',
        profileImg: 'profile1.svg',
        bgImg: 'Rectangle 65.svg',
        ratingImg: 'Group 52.svg',
        timeSpanImg: 'Time Span.svg',
      },
      {
        name: 'St Glx',
        location: 'South London',
        date: '24th September, 2023',
        review: 'The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald\'s standard – hot and satisfying.',
        profileImg: 'profile1.svg',
        bgImg: 'Rectangle 65.svg',
        ratingImg: 'Group 52.svg',
        timeSpanImg: 'Time Span.svg',
      },
      {
        name: 'St Glx',
        location: 'South London',
        date: '24th September, 2023',
        review: 'The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald\'s standard – hot and satisfying.',
        profileImg: 'profile1.svg',
        bgImg: 'Rectangle 65.svg',
        ratingImg: 'Group 52.svg',
        timeSpanImg: 'Time Span.svg',
      },

  ];

  // Function to scroll to the next testimonial
  const scrollNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 600,  // Adjust this value based on the width of each testimonial
        behavior: 'smooth',
      });
    }
  };

  // Function to scroll to the previous testimonial
  const scrollPrevious = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -600,  // Adjust this value based on the width of each testimonial
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={Styles.testimonials}>
      <div className={Styles.headerTestimonial}>
        <h1>Customer Reviews</h1>
        <div className={Styles.buttonGrp}>
          <button aria-label="Previous" onClick={scrollPrevious}>
            <img src="button1.svg" alt="Previous" />
          </button>
          <button aria-label="Next" onClick={scrollNext}>
            <img src="button2.svg" alt="Next" />
          </button>
        </div>
      </div>

      <div className={Styles.mainBanner}>
        {/* Scrollable Container */}
        <div className={Styles.scrollContainer} ref={scrollContainerRef}>
          {testimonials.map((testimonial, index) => (
            <div className={Styles.NewBanner} key={index}>
              <div className={Styles.banner}>
                <div className={Styles.firstBanner}>
                  <img
                    src={testimonial.profileImg}
                    alt="Profile"
                  />
                  <img
                    src={testimonial.bgImg}
                    alt="Background rectangle"
                  />
                  <div className={Styles.profileName}>
                    <h2>{testimonial.name}</h2>
                    <h3>{testimonial.location}</h3>
                  </div>
                </div>
                <div className={Styles.secondBanner}>
                  <img
                    src={testimonial.timeSpanImg}
                    alt="Time span"
                  />
                  <div className={Styles.starGroup}>
                    <img
                      src={testimonial.ratingImg}
                      alt="Rating stars"
                    />
                    <p>{testimonial.date}</p>
                  </div>
                </div>
              </div>
              <div className={Styles.reviewText}>
                <p>{testimonial.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
