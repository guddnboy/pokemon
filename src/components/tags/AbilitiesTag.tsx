interface AbilitiesTagProps {
  abilitiesName: string;
}

export const AbilitiesTag = ({ abilitiesName }: AbilitiesTagProps) => {
  return <div className="bg-gray-200 rounded-md px-2">{abilitiesName}</div>;
};
