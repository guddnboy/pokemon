interface TypeTagProps {
  typeName: string;
}

export const TypeTag = ({ typeName }: TypeTagProps) => {
  return <div className="bg-gray-200 rounded-md px-2">{typeName}</div>;
};
