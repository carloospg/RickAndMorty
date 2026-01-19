interface Props {
  title: string;
  description?: string;
}

export const CustomHeader = ({ title, description }: Props) => {
  return (
    <header className="custom-header">
      <h1 className="header-title">{title}</h1>
      {description && <p className="header-description">{description}</p>}
    </header>
  );
};
