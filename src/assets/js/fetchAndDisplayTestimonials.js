// Utility functions
const fractionToPercentage = (fraction) => `${((fraction / 5) * 100).toFixed(2)}%`;

const formatDate = (string) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(string).toLocaleDateString([], options);
};

const formatReview = (review) => ({
  ...review,
  starRating: fractionToPercentage(review.rating),
  dateOfReview: formatDate(review.created_at),
});

// Testimonials state manager
const createTestimonialsManager = () => {
  const testimonialsData = {
    totalReviews: [],
    initialReviews: undefined,
    overallRating: undefined,
    totalReviewCount: undefined,
    fetchAllReviewsComplete: false,
  };

  const getRating = async () => {
    try {
      const res = await fetch(
        'https://app.housecallpro.com/alpha/organizations/99a699f2-c01d-4a40-9690-d49c6b8eea83/rating',
      );
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const { overall_rating, total_ratings } = await res.json();
      testimonialsData.overallRating = overall_rating;
      testimonialsData.totalReviewCount = total_ratings;
    } catch (e) {
      console.log(e.statusText);
    }
  };

  const getTestimonials = async () => {
    try {
      const res = await fetch(
        `https://app.housecallpro.com/alpha/organizations/99a699f2-c01d-4a40-9690-d49c6b8eea83/reviews?page=1&count=${testimonialsData.totalReviewCount}`,
      );
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const { data } = await res.json();
      testimonialsData.initialReviews = data.map(formatReview);
      testimonialsData.totalReviews.push(...testimonialsData.initialReviews);
      testimonialsData.fetchAllReviewsComplete = true;
    } catch (e) {
      console.log(e.statusText);
    }
  };

  return {
    getTestimonialsData: () => testimonialsData,
    fetchAndFormatTestimonials: async () => {
      await getRating();
      await getTestimonials();
    },
  };
};

async function fetchAndDisplayTestimonials() {
  try {
    // Use the testimonials manager
    const testimonialsManager = createTestimonialsManager();

    await testimonialsManager.fetchAndFormatTestimonials();

    const testimonialsData = testimonialsManager.getTestimonialsData();
    console.log('Total review count:', testimonialsData.totalReviewCount); // Check the value

    const reviewCountElement = document.getElementById('reviewCount');
    if (reviewCountElement) {
      reviewCountElement.textContent = testimonialsData.totalReviewCount;
    }
  } catch (error) {
    console.error('An error occurred while fetching and formatting testimonials:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fetchAndDisplayTestimonials();
});
