import Header from '@/components/header/Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <div className="wrapper">
    <Header />
    <main className="main">{children}</main>
    <footer className="footer">2023</footer>
  </div>
);

export default Layout;
