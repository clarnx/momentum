import Link from 'next/link';
import { useRouter } from 'next/router';

import en from '../../../locales/en/navbar';
import es from '../../../locales/es/navbar';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  const router = useRouter();
  const { locale } = router;

  const t = locale === 'en' ? en : es;

  const changeLanguage = (e: any) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <header
      {...headerProps}
      className={`w-full flex flex-row justify-between ${className}`}
    >
      <div className="space-x-5 m-5">
        <Link href="/">
          <a className="hover:underline">{t.item1}</a>
        </Link>
        <Link href="/about">
          <a className="hover:underline">{t.item2}</a>
        </Link>
      </div>
      <div className="space-x-5 m-5">
        <select defaultValue={locale} onChange={changeLanguage}>
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
        {/* <AuthButton /> */}
      </div>
    </header>
  );
};

export default Header;
