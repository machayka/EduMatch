export const Header: React.FC = () => {
  return (
    <div className="w-full text-center shadow-2xl">
      <img
        src="/gov.pl-logo.png"
        className="absolute left-0 top-0"
        alt="gov.pl"
        width={145}
      ></img>
      <div className="font-bold text-2xl text-white p-4">EduMatch</div>
    </div>
  );
};
