import Link from 'next/link';
import Image from 'next/image';

const NotFoundPage = () => (
  <div className="not-found-page">
    <Image src="/oops.png" alt="error" width={200} height={250} />
    <h1>You have found a secret place.</h1>
    <p>
      You may have mistyped the address, or the page has been moved to another
      URL.
    </p>
    <Link className="button" href="/">
      Main Page
    </Link>
  </div>
);

export default NotFoundPage;
