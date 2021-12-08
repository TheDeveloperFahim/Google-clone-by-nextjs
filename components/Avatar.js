const Avatar = ({ url }) => {
  return (
    <img
      src={url}
      alt="profile pic"
      className="rounded-full cursor-pointer transition hover:scale-110 hover:animate-pulse"
      loading="lazy"
    />
  );
};
export default Avatar;
