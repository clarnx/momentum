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
      className={`w-full flex flex-row justify-between shadow-md ${className}`}
    >
      <div className="space-x-5 m-5">
        <Link href="/">
          <a className="hover:underline">{t.item1}</a>
        </Link>
        <Link href="/talent-register">
          <a className="hover:underline">{t.item2}</a>
        </Link>
      </div>
      <div className="space-x-5 m-5">
        <select
          className="cursor-pointer p-2 outline-none"
          defaultValue={locale}
          onChange={changeLanguage}
        >
          <option className="p-2" value="en">
            EN
          </option>
          <option className="p-2" value="es">
            ES
          </option>
        </select>
        {/* <Select
          className="min-w-[100px]"
          variant="static"
          value={locale}
          defaultValue={locale}
          onChange={changeLanguage}
        >
          <Option value="en">EN</Option>
          <Option value="es">ES</Option>
        </Select> */}
      </div>
    </header>
  );
};

export default Header;
