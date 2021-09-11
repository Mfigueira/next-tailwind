import NavLinks from './NavLinks';

const DropdownMenu = ({ open, toggle }) => {
  return (
    <div
      className={
        open
          ? 'grid grid-rows-4 text-center items-center bg-yellow-500'
          : 'hidden'
      }
      onClick={toggle}
    >
      <NavLinks />
    </div>
  );
};

export default DropdownMenu;
