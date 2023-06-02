type Props = {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
};

export const Button = ({ children, onClick, disabled = false }: Props) => {
  return (
    <button
      className={
        "w-32 h-9 bg-green-400 text-white text-3xl disabled:bg-green-900"
      }
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
