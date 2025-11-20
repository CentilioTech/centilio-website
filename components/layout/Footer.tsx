import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const productLinks = [
    { name: 'Sign', href: '#' },
    { name: 'SEO Bot', href: '#' },
  ];

  const companyLinks = [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
  ];

  const legalLinks = [
    { name: 'Terms of use', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Cookies Policy', href: '#' },
    { name: 'GDPR Policy', href: '#' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: '/images/home page/footer/facebook.svg', href: '#' },
    { name: 'Instagram', icon: '/images/home page/footer/insta.svg', href: '#' },
    { name: 'YouTube', icon: '/images/home page/footer/youtube.svg', href: '#' },
    { name: 'LinkedIn', icon: '/images/home page/footer/link in (1).svg', href: '#' },
    { name: 'Twitter', icon: '/images/home page/footer/twitter.svg', href: '#' },
  ];

  return (
    <footer className="w-full bg-[#181A1E] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/home page/centilio logo vERSION 1 (1).png"
                alt="Centilio"
                width={120}
                height={40}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="text-base font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-base text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-base font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-base text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-base font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-base text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section with Social Media Icons */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex justify-end">
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="hover:opacity-80 transition-opacity"
                aria-label={social.name}
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={24}
                  height={24}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
