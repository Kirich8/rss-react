export const addPasswordStrenght = (password: string) => {
  let strenght = 0;

  if (password.replace(/[A-Z]/, '') !== password) strenght++;
  if (password.replace(/[a-z]/, '') !== password) strenght++;
  if (password.replace(/[0-9]/, '') !== password) strenght++;
  if (password.replace(/[^A-ZА-Яa-zа-я0-9Ёё\s]/, '') !== password) strenght++;

  switch (strenght) {
    case 1:
      return (
        <p className="password-strenght" style={{ color: 'red' }}>
          very weak
        </p>
      );
    case 2:
      return (
        <p className="password-strenght" style={{ color: 'orange' }}>
          weak
        </p>
      );
    case 3:
      return (
        <p className="password-strenght" style={{ color: 'yellow' }}>
          medium
        </p>
      );
    case 4:
      return (
        <p className="password-strenght" style={{ color: 'green' }}>
          strong
        </p>
      );
  }
};
