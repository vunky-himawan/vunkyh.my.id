interface Props {
  stack: string;
  icon?: string;
  url?: string;
}

const Stack = ({ stack, icon, url }: Props) => {
  return (
    <>
      <a href={url}>
        <div className="flex items-center gap-x-3 bg-gray-100/80 p-2 rounded">
          <div className={`${icon}`}></div>
          <p>{stack}</p>
        </div>
      </a>
    </>
  );
};

export default Stack;
