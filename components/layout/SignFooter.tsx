import Image from 'next/image'

export default function SignFooter() {
  return (
    <footer className="bg-[#181A1E]">
      <div className="w-full max-w-[1440px] mx-auto px-2 sm:px-4 md:px-8 lg:px-[120px] py-[40px] sm:py-[60px] lg:py-[100px]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-12 lg:gap-[160px] justify-items-center sm:justify-items-start">
          {/* Logo */}
          <div className="flex justify-center sm:justify-start">
            <Image
              src="/images/Integration page - sign/Vector1.svg"
              alt="Sign Logo"
              width={62}
              height={77}
            />
          </div>

          {/* Product Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4 sm:mb-6 text-white">Product</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a href="/sign" className="text-base text-gray-400 hover:text-white transition-colors">
                  Sign
                </a>
              </li>
              <li>
                <a href="/seo-bot" className="text-base text-gray-400 hover:text-white transition-colors">
                  SEO Bot
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4 sm:mb-6 text-white">Legal</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a href="/terms" className="text-base text-gray-400 hover:text-white transition-colors">
                  Terms of use
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-base text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="cookies" className="text-base text-gray-400 hover:text-white transition-colors">
                  Cookies Policy
                </a>
              </li>
              <li>
                <a href="gdpr" className="text-base text-gray-400 hover:text-white transition-colors">
                  GDPR Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/20">
        <div className="w-full max-w-[1440px] mx-auto px-2 sm:px-4 md:px-8 lg:px-[120px] py-4 sm:py-6 flex items-center justify-center sm:justify-end">
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-11">
            <a href="https://www.facebook.com/profile.php?id=61559910162873" className="w-[30px] h-[30px] hover:opacity-70 transition-opacity" target="_blank"
                rel="noopener noreferrer">
              <Image
                src="/images/Integration page - sign/footer/facebook.svg"
                alt="Facebook"
                width={30}
                height={30}
              />
            </a>
            <a href="https://www.instagram.com/centilioofficial/" className="w-[30px] h-[30px] hover:opacity-70 transition-opacity" target="_blank"
                rel="noopener noreferrer">
              <Image
                src="/images/Integration page - sign/footer/insta.svg"
                alt="Instagram"
                width={30}
                height={30}
              />
            </a>
            <a href="https://www.youtube.com/channel/UCbeEVRQaWtUFEuqD1E2BN0w" className="w-[30px] h-[30px] hover:opacity-70 transition-opacity" target="_blank"
                rel="noopener noreferrer">
              <Image
                src="/images/Integration page - sign/footer/youtube.svg"
                alt="YouTube"
                width={30}
                height={30}
              />
            </a>
            <a href="https://www.linkedin.com/company/centilio2022/posts/?feedView=all" className="w-[30px] h-[30px] hover:opacity-70 transition-opacity" target="_blank"
                rel="noopener noreferrer">
              <Image
                src="/images/Integration page - sign/footer/link in (1).svg"
                alt="LinkedIn"
                width={30}
                height={30}
              />
            </a>
            <a href="https://x.com/CentilioSign" className="w-[30px] h-[30px] hover:opacity-70 transition-opacity" target="_blank"
                rel="noopener noreferrer">
              <Image
                src="/images/Integration page - sign/footer/twitter.svg"
                alt="Twitter"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}