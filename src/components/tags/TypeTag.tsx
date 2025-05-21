interface TypeTagProps {
  typeName: string | undefined;
}

export const TypeTag = ({ typeName }: TypeTagProps) => {
  return (
    <div
      className={`h-6 flex justify-end items-center px-2 bg-gray-200 border-gray-300 rounded-md shadow-md text-xs font-bold`}
    >
      {typeName}
    </div>
  );
};
