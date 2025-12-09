import Image from 'next/image'
import Link from 'next/link'

export default function SeobotFooter() {
  return (
    <footer className="bg-[#181A1E] border-t border-[#2A3142] py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Logo Section */}
          <div className="flex justify-center sm:justify-start">
            <Link href="/seo-bot">
              <Image
                src="/images/seobothomepage/footer/logo_white Vector.svg"
                alt="Centilio Logo"
                width={80}
                height={80}
                className="opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
              />
            </Link>
          </div>

          {/* Product Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-semibold mb-4 sm:mb-6 text-lg">Product</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/sign" className="text-gray-400 hover:text-white transition-colors text-base">
                  Sign
                </Link>
              </li>
              <li>
                <Link href="/seo-bot" className="text-gray-400 hover:text-white transition-colors text-base">
                  SEO Bot
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-semibold mb-4 sm:mb-6 text-lg">Legal</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-base">
                  Terms of use
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-base">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors text-base">
                  Cookies Policy
                </Link>
              </li>
              <li>
                <Link href="/gdpr" className="text-gray-400 hover:text-white transition-colors text-base">
                  GDPR Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center sm:justify-end pt-6 sm:pt-8 border-t border-[#2A3142] gap-4 sm:gap-6">
          <a href="#" className="hover:opacity-70 transition-opacity">
            <Image
              src="/images/seobothomepage/footer/social media icons/facebook.svg"
              alt="Facebook"
              width={30}
              height={30}
              className="w-7 h-7 sm:w-[30px] sm:h-[30px]"
            />
          </a>
          <a href="#" className="hover:opacity-70 transition-opacity">
            <Image
              src="/images/seobothomepage/footer/social media icons/insta.svg"
              alt="Instagram"
              width={30}
              height={30}
              className="w-7 h-7 sm:w-[30px] sm:h-[30px]"
            />
          </a>
          <a href="#" className="hover:opacity-70 transition-opacity">
            <Image
              src="/images/seobothomepage/footer/social media icons/youtube.svg"
              alt="YouTube"
              width={30}
              height={30}
              className="w-7 h-7 sm:w-[30px] sm:h-[30px]"
            />
          </a>
          <a href="#" className="hover:opacity-70 transition-opacity">
            <Image
              src="/images/seobothomepage/footer/social media icons/link in (1).svg"
              alt="LinkedIn"
              width={30}
              height={30}
              className="w-7 h-7 sm:w-[30px] sm:h-[30px]"
            />
          </a>
          <a href="#" className="hover:opacity-70 transition-opacity">
            <Image
              src="/images/seobothomepage/footer/social media icons/twitter.svg"
              alt="Twitter"
              width={30}
              height={30}
              className="w-7 h-7 sm:w-[30px] sm:h-[30px]"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}