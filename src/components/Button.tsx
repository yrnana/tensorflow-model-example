const Button = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
) => {
  return (
    <button
      className="my-4 px-4 py-2 focus:outline-none rounded-md ring-4 ring-purple-300 bg-purple-500 text-white"
      {...props}
    />
  );
};

export default Button;
