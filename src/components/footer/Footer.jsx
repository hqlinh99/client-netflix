import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <p className="footerTop">
          <a href="https://help.netflix.com/contactus">
            Questions? Contact us.
          </a>
        </p>
        <ul className="footerLink structural">
          <li
            className="footerLinkItem"
            placeholder="footerResponsiveLinkFaq_item"
          >
            <a
              className="footerLink"
              data-uia="footerLink"
              href="https://help.netflix.com/support/412"
              placeholder="footerResponsiveLinkFaq"
            >
              <span id="" data-uia="data-uia-footer-label">
                FAQ
              </span>
            </a>
          </li>
          <li
            className="footerLinkItem"
            placeholder="footer_responsive_link_help_item"
          >
            <a
              className="footerLink"
              data-uia="footerLink"
              href="https://help.netflix.com"
              placeholder="footer_responsive_link_help"
            >
              <span id="" data-uia="data-uia-footer-label">
                Help Center
              </span>
            </a>
          </li>
          <li
            className="footerLinkItem"
            placeholder="footer_responsive_link_account_item"
          >
            <a
              className="footerLink"
              data-uia="footerLink"
              href="/yourAccount"
              placeholder="footer_responsive_link_account"
            >
              <span id="" data-uia="data-uia-footer-label">
                Account
              </span>
            </a>
          </li>
          <li
            className="footerLinkItem"
            placeholder="footer_responsive_link_media_center_item"
          >
            <a
              className="footerLink"
              data-uia="footerLink"
              href="https://media.netflix.com/"
              placeholder="footer_responsive_link_media_center"
            >
              <span id="" data-uia="data-uia-footer-label">
                Media Center
              </span>
            </a>
          </li>
          <li
            className="footerLinkItem"
            placeholder="footer_responsive_link_relations_item"
          >
            <a
              className="footerLink"
              data-uia="footerLink"
              href="http://ir.netflix.com/"
              placeholder="footer_responsive_link_relations"
            >
              <span id="" data-uia="data-uia-footer-label">
                Investor Relations
              </span>
            </a>
          </li>
          <li
            className="footerLinkItem"
            placeholder="footerResponsiveLinkJobsItem"
          >
            <a
              className="footerLink"
              data-uia="footerLink"
              href="https://jobs.netflix.com/jobs"
              placeholder="footer_responsive_link_jobs"
            >
              <span id="" data-uia="data-uia-footer-label">
                Jobs
              </span>
            </a>
          </li>
          <li
            className="footerLinkItem"
            placeholder="footer_responsive_link_waysToWatch_item"
          >
            <a
              className="footerLink"
              data-uia="footerLink"
              href="/watch"
              placeholder="footer_responsive_link_waysToWatch"
            >
              <span id="" data-uia="data-uia-footer-label">
                Ways to Watch
              </span>
            </a>
          </li>
          <li
            className="footerLinkItem"
            placeholder="footer_responsive_link_terms_item"
          >
            <a
              className="footerLink"
              data-uia="footerLink"
              href="https://help.netflix.com/legal/termsofuse"
              placeholder="footer_responsive_link_terms"
            >
              <span id="" data-uia="data-uia-footer-label">
                Terms of Use
              </span>
            </a>
          </li>
          <li
            className="footerLinkItem"
            placeholder="footer_responsive_link_privacy_separate_link_item"
          >
            <a
              className="footerLink"
              data-uia="footerLink"
              href="https://help.netflix.com/legal/privacy"
              placeholder="footer_responsive_link_privacy_separate_link"
            >
              <span id="" data-uia="data-uia-footer-label">
                Privacy
              </span>
            </a>
          </li>
          <li
            className="footerLinkItem"
            placeholder="footer_responsive_link_cookies_separate_link_item"
          >
            <a
              className="footerLink"
              data-uia="footerLink"
              href="/"
              placeholder="footer_responsive_link_cookies_separate_link"
            >
              <span id="" data-uia="data-uia-footer-label">
                Cookie Preferences
              </span>
            </a>
          </li>
          <li
            className="footerLinkItem"
            placeholder="footer_responsive_link_corporate_information_item"
          >
            <a
              className="footerLink"
              data-uia="footerLink"
              href="https://help.netflix.com/legal/corpinfo"
              placeholder="footer_responsive_link_corporate_information"
            >
              <span id="" data-uia="data-uia-footer-label">
                Corporate Information
              </span>
            </a>
          </li>
          <li
            className="footerLinkItem"
            placeholder="footerResponsiveLinkContactUsItem"
          >
            <a
              className="footerLink"
              data-uia="footerLink"
              href="https://help.netflix.com/contactus"
              placeholder="footer_responsive_link_contact_us"
            >
              <span id="" data-uia="data-uia-footer-label">
                Contact Us
              </span>
            </a>
          </li>
          <li
            className="footerLinkItem"
            placeholder="footer_responsive_link_speed_test_item"
          >
            <a
              className="footerLink"
              data-uia="footerLink"
              href="https://fast.com"
              placeholder="footer_responsive_link_speed_test"
            >
              <span id="" data-uia="dataUiaFooterLabel">
                Speed Test
              </span>
            </a>
          </li>
          <li
            className="footerLinkItem"
            placeholder="footerResponsiveLinkLegalNoticesItem"
          >
            <a
              className="footerLink"
              data-uia="footerLink"
              href="https://help.netflix.com/legal/notices"
              placeholder="footerResponsiveLinkLegalNotices"
            >
              <span id="" data-uia="data-uia-footer-label">
                Legal Notices
              </span>
            </a>
          </li>
          <li
            className="footerLinkItem originalsLink"
            placeholder="footerResponsiveLinkOnlyOnNetflixItem"
          >
            <a
              className="footerLink"
              data-uia="footerLink"
              href="https://www.netflix.com/vn-en/browse/genre/839338"
              placeholder="footerResponsiveLinkOnlyOnNetflix"
            >
              <span id="" data-uia="data-uia-footer-label">
                Only on Netflix
              </span>
            </a>
          </li>
        </ul>
        <div class="langSelectionContainer" id="langSwitcher">
          <div data-uia="language-picker+container" class="uiSelectWrapper">
            <label for="langSwitcherSelect" class="uiLabel">
              <span class="uiLabel-text">Select Language</span>
            </label>
            <div class="selectArrow medium prefix globe">
              <select
                data-uia="languagePicker"
                class="uiSelect medium"
                id="langSwitcherSelect"
                tabindex="0"
                placeholder="lang-switcher"
              >
                <option
                  lang="vi"
                  value="/vn/"
                  data-language="vi"
                  data-country="VN"
                >
                  Tiếng Việt
                </option>
                <option
                  selected=""
                  lang="en"
                  value="/vn-en/"
                  data-language="en"
                  data-country="VN"
                >
                  English
                </option>
              </select>
            </div>
          </div>
        </div>
        <p class="footerCountry">Netflix Vietnam</p>
      </div>
    </div>
  );
};

export default Footer;
