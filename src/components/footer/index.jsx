import React from "react";
import { Link } from "react-router-dom";
import { Box, Content, About, QuickAccess, Primary, Secondary } from "./style";
import { Wrapper } from "..";

const Footer = () => {
  return (
    <>
      <Box>
        <Wrapper>
          <Content>
            <Primary>
              <About>
                <img src="/images/logo-light.svg" alt="" />
                <br />
                <br />
                <p>
                  Wateen is a B2B online marketplace and inventory management
                  platform for restaurants and distributors, making it easy to
                  manage orders, billing, and payments, all in one platform.
                </p>
              </About>
              <QuickAccess>
                <table>
                  <thead>
                    <tr>
                      <th>Solutions</th>
                      <th>Integrations</th>
                      <th>Support</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Link to="restaurants">
                          <span>
                            <img src="/images/side-arrow.svg" alt="" />
                            <p>Restaurants</p>
                          </span>
                        </Link>
                      </td>
                      <td>
                        <Link to="accounting-&-e-r-p-systems-suppliers">
                          <span>
                            <img src="/images/side-arrow.svg" alt="" />
                            <p>Suppliers</p>
                          </span>
                        </Link>
                      </td>
                      <td>
                        <Link to="about-us">
                          <span>
                            <img src="/images/side-arrow.svg" alt="" />
                            <p>About</p>
                          </span>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Link to="distributors">
                          <span>
                            <img src="/images/side-arrow.svg" alt="" />
                            <p>Distributors</p>
                          </span>
                        </Link>
                      </td>
                      <td>
                        <Link to="p-o-s">
                          <span>
                            <img src="/images/side-arrow.svg" alt="" />
                            <p>Buyers</p>
                          </span>
                        </Link>
                      </td>
                      {/* <td>
                        <img src="/images/side-arrow.svg" alt="" />
                        <p>Careers</p>
                      </td> */}
                      <td>
                        <Link to="request-a-demo">
                          <span>
                            <img src="/images/side-arrow.svg" alt="" />
                            <p>Request a Demo</p>
                          </span>
                        </Link>
                      </td>
                    </tr>

                    <tr>
                      <td></td>
                      <td></td>
                      <td>
                        <Link to="lets-talk">
                          <span>
                            <img src="/images/side-arrow.svg" alt="" />
                            <p>Contact Us</p>
                          </span>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </QuickAccess>
            </Primary>
            <Secondary>
              <p className="terms&conditions">
                © 2023 Wateen | Customer Support:{" "}
                <a href="tel:19755224865">1-975-522-4865</a>
              </p>
              <p>
                <Link to="/privacy-policy">Privacy Policy</Link>
                <span>.</span>
                <Link to="/terms-&-conditions">Terms & Conditions</Link>
              </p>
              <ul>
                <li>
                  <Link to="http://twitter.com/wateen_platform" target="_blank">
                    <img src="/images/twitter.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://instagram.com/wateen_platform?igshid=OGQ5ZDc2ODk2ZA=="
                    target="_blank"
                  >
                    <img src="/images/instagram.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://youtube.com/@Wateen_Platform?feature=shared"
                    target="_blank"
                  >
                    <img src="/images/youtube.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.facebook.com/profile.php?id=100091734840280&mibextid=D4KYlr"
                    target="_blank"
                  >
                    <img src="/images/facebook.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://sa.linkedin.com/company/wateen"
                    target="_blank"
                  >
                    <img src="/images/linkedin.svg" alt="" />
                  </Link>
                </li>
              </ul>
            </Secondary>
          </Content>
        </Wrapper>
      </Box>
    </>
  );
};

export default Footer;
