const Panel = ({ title, children, collapsible }) => {
  return (
    <div className="p-4 m-2 rounded max-w-md">
      <div className="flex items-center">
        <span>{children}</span>
      </div>
    </div>
  );
};

export default Panel;
