interface iPostIt {
  img: string;
  text: string;
}

export const PostIt = ({ img, text }: iPostIt) => {
  return (
    <div>
      <figure>{img}</figure>
      <p>{text}</p>
    </div>
  );
};
