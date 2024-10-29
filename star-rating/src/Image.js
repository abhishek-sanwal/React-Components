import "./styles.css";
function Image({
  index,
  tempRating,
  rating,
  onRatingClick,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <svg
      style={{
        stroke: `${
          tempRating > 0 && index < tempRating
            ? "yellow"
            : index < rating
            ? "yellow"
            : ""
        }`,
      }}
      width="50px"
      height="50px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => onRatingClick(index)}
      src="https://img.icons8.com/?size=100&id=104&format=png&color=000000"
      alt="Star Image"
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={onMouseLeave}
    >
      <path d="M1.537,9.488a1,1,0,0,0,.326,1.041l4.805,3.963-1.515,6.79a1,1,0,0,0,1.56,1.03L12,18.509l5.287,3.8a1,1,0,0,0,1.56-1.03l-1.515-6.79,4.805-3.963a1,1,0,0,0-.492-1.761l-5.817-.849L12.9,2.053a1.042,1.042,0,0,0-1.79,0L8.172,7.919l-5.817.849A1,1,0,0,0,1.537,9.488Zm7.441.335a1,1,0,0,0,.75-.542L12,4.736l2.272,4.545a1,1,0,0,0,.75.542l4.1.6L15.586,13.34a1,1,0,0,0-.339.989l1.076,4.826-3.739-2.69a1,1,0,0,0-1.168,0l-3.739,2.69,1.076-4.826a1,1,0,0,0-.339-.989L4.876,10.421Z" />
    </svg>
  );
}

export default Image;
