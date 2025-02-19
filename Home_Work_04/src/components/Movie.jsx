import PropTypes from 'prop-types';

export default function Movie({ movie }) {
  const {
    imageUrl,
    movieName,
    releaseYear,
    duration,
    genres,
    movieDescription
  } = movie;

  return (
    <div className="movie-card">
      <img src={imageUrl} alt={movieName} width="200" />
      <div className="movie-info">
        <h2>{movieName}</h2>
        <p><strong>Release Year:</strong> {releaseYear}</p>
        <p><strong>Duration:</strong> {duration} minutes</p>
        <p><strong>Genres:</strong> {genres.join(', ')}</p>
        <p>{movieDescription}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  movie: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    movieName: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    movieDescription: PropTypes.string.isRequired,
  }).isRequired,
};
