/**
 * This function is responsible for reporting web vitals.
 * It dynamically imports the 'web-vitals' library and calls the
 * respective functions to collect and report various web vital metrics.
 *
 * @param {Function} onPerfEntry - A callback function to handle performance entries.
 */
const reportWebVitals = onPerfEntry => {
  // Check if the 'onPerfEntry' parameter is provided and is a function
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    // Dynamically import the 'web-vitals' library
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Collect and report Cumulative Layout Shift (CLS) metric
      getCLS(onPerfEntry);
      // Collect and report First Input Delay (FID) metric
      getFID(onPerfEntry);
      // Collect and report First Contentful Paint (FCP) metric
      getFCP(onPerfEntry);
      // Collect and report Largest Contentful Paint (LCP) metric
      getLCP(onPerfEntry);
      // Collect and report Time to First Byte (TTFB) metric
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
