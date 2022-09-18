interface Iprops {
  children: JSX.Element;
}
export const Container = ({ children }: Iprops) => {
  return <div className="w-full mx-auto ">{children}</div>;
};
