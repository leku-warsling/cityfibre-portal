const { NX_PUBLIC_URI = 'http://localhost:4200' } = process.env;

const redirect = (path: string, origin?: string) => {
  window.location.href = `${origin ?? window.location.origin}${path}`;
  return null;
};

const goto = {
  login: () => redirect('/login', NX_PUBLIC_URI),
};

export { redirect, goto };
