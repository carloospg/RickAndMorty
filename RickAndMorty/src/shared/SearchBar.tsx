interface Props {
  placeholder?: string;
  onQuery: (value: string) => void;
}

export const SearchBar = ({ placeholder, onQuery }: Props) => {
  return (
    <div className="search-container">
      <input type="text" placeholder={placeholder} className="search-input" />
    </div>
  );
};
