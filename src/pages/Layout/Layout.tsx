import Header from '../header/Header';
import Head from '~/components/Head';

export default function Layout({ children }) {
  return (
    <>
      <Head title="Spece Y "/>
      <Header />
      <main>{children}</main>
    </>
  );
}
