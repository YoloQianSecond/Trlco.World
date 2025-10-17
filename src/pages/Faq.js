// src/pages/Faq.js
import React, { useState, useEffect, useRef } from "react";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Tabs, Accordion } from "flowbite-react";
import HeroSection from "../components/HeroSection";
import faqBreadcrumb from "../assets/images/faq-main-img.png";

const Faq = () => {
  const [sections, setSections] = useState([]);
  const [articles, setArticles] = useState([]);
  const [activeSectionId, setActiveSectionId] = useState(null);
  const [showCustom, setShowCustom] = useState(true); // custom tab active by default
  const tabsRef = useRef(null);

  // Custom “TRL Overview” FAQ content
  const customFaq = [
    {
      q: "What is TRL's long-term vision for transforming the real estate market through tokenization?",
      a: (
        <>
          <p>
            TRL aims to redefine real estate through tokenization—empowering
            lifestyles with flexibility, accessibility, and global opportunity.
            We’re building an ecosystem that connects renters, homeowners, and
            investors, enabling borderless living, earning, and investing—all
            within a rewarding utility ecosystem.
          </p>
          <p className="mt-3">
            For investors, TRL simplifies global real estate investment through
            tokenized, fractional portfolios. For consumers, it introduces
            seamless access to lifestyle services, starting with the world’s
            first Home Subscription.
          </p>
          <p className="mt-3">
            Tomorrow, TRL expands into diverse RWA categories—from hospitality
            to lifestyle assets—creating a global marketplace for Web2 and Web3
            businesses to collaborate and tokenize with us.
          </p>
          <p className="mt-3">
            Our mission is to become the #1 RWA super-app bridging Web2 and
            Web3—unlocking seamless, borderless access to real-world assets with
            amplified yields and lifestyle utility. Beyond investments, TRL
            users can redeem tokens for travel, dining, and luxury experiences
            worldwide.
          </p>
        </>
      ),
    },
    {
      q: "What is TRL’s Home Subscription Service ?",
      a: (
        <>
          <p>
            TRL introduces the world’s first home subscription—giving renters
            true lifestyle freedom. Choose mid-to-long term stays, co-living or
            solo, anywhere and anytime. Earn <strong>$TRLCO</strong> tokens
            monthly to redeem for discounts, utilities, and lifestyle perks.
          </p>
          <p className="mt-3 font-semibold">
            Live Seamless. Live Accessible. Live Borderless. Live for Real.
          </p>
        </>
      ),
    },
    {
      q: "What problem is TRL solving ?",
      a: (
        <>
          <p>
            The real-world asset (RWA) market lacks an integrated approach to
            property tokenization and management. Current models tokenize
            individual properties in isolation, limiting diversification and
            yield potential. At the same time, consumers lack a flexible
            solution bridging the gap between renting and owning.
          </p>
          <p className="mt-3">
            TRL addresses these challenges by introducing a diversified property
            portfolio through tokenization, integrating DeFi features such as
            lending and borrowing, and launching a home subscription platform
            that enables seamless transitions between renting and ownership—creating a
            complete, end-to-end RWA ecosystem for investors and consumers
            alike.
          </p>
        </>
      ),
    },
    {
      q: "What is TRLCO vs TRLX  ?",
      a: (
        <>
          <p>
            <strong>$TRLCO</strong> is TRL’s utility and rewards token, used for
            subscriptions, payments, and lifestyle perks within the ecosystem.
            Users earn $TRLCO through activities like renting or staking,
            redeemable for discounts, travel, and home services.
          </p>
          <p className="mt-3">
            <strong>$TRLX</strong> is the investment and governance token,
            backed by tokenized real estate portfolios that generate real-yield
            returns. It represents long-term value and investor participation in
            TRL’s RWA ecosystem.
          </p>
          <p className="mt-3">
            Together, $TRLCO drives daily utility while $TRLX anchors real-world
            asset growth—bridging lifestyle and investment under one ecosystem.
          </p>
        </>
      ),
    },
    {
      q: "What’s the benefits of investing in TRL ?",
      a: (
        <p>
          Investing in TRL offers exposure to real-world assets through
          tokenized real estate, providing stable, yield-generating
          opportunities. Investors gain access to a diversified RWA portfolio,
          governance rights, and lifestyle rewards—combining real yield with
          real-world utility in one seamless ecosystem.
        </p>
      ),
    },
    {
      q: "What’s the benefit of an investor app ?",
      a: (
        <p>
          The TRL Investor App is a platform for users to invest in tokenized
          real estate. It allows investors to buy, manage, and track
          property-backed tokens like <strong>$TRLX</strong>, view portfolio
          performance, and earn real-yield returns—all within a transparent and
          secure ecosystem.
        </p>
      ),
    },
  ];

  // Fetch sections
  useEffect(() => {
    fetch(
      "https://thereallifestyle.zendesk.com/api/v2/help_center/categories/36562854739481/sections.json",
      {
        method: "GET",
        headers: {
          Authorization:
            "Basic " +
            btoa(
              "yenray.ng@trlco.world/token:O4N6Fysz582712RvT2Aux2gvbdabCExJOoh966nK"
            ),
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const secs = data.sections || [];
        setSections(secs);
        if (secs.length > 0 && !showCustom) {
          setActiveSectionId(secs[0].id);
        }
      })
      .catch((error) => console.error("Error fetching sections:", error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fetch articles for the active section
  useEffect(() => {
    if (!showCustom && activeSectionId) {
      fetch(
        `https://thereallifestyle.zendesk.com/api/v2/help_center/sections/${activeSectionId}/articles.json`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Basic " +
              btoa(
                "yenray.ng@trlco.world/token:O4N6Fysz582712RvT2Aux2gvbdabCExJOoh966nK"
              ),
          },
        }
      )
        .then((response) => response.json())
        .then((data) => setArticles((data && data.articles) || []))
        .catch((error) => console.error("Error fetching articles:", error));
    }
  }, [activeSectionId, showCustom]);

  // Tabs: index 0 = custom; others map to sections[index - 1]
  const handleTabChange = (index) => {
    if (index === 0) {
      setShowCustom(true);
      setActiveSectionId(null);
      setArticles([]);
    } else {
      setShowCustom(false);
      const sec = sections[index - 1];
      if (sec) setActiveSectionId(sec.id);
    }
  };

  return (
    <div>
      <Topbar />
      <Header />
      <div className="w-full">
        <HeroSection
          breadCrumUrl={faqBreadcrumb}
          title={"Frequently Asked Questions"}
          description={` Discover answers to your questions about combining real estate and cryptocurrency on our innovative platform.`}
        />
      </div>

      <div className="md:pt-[60px] pt-10 md:pb-[120px] pb-[100px] tabs-pills px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 text-center">
              <h3 className="md:text-[32px] text-2xl leading-[40px] font-bold text-[#17271F] md:mb-6 mb-4">
                Explore topics
              </h3>
            </div>

            <div className="col-span-12 faq-main-section-ct">
              <Tabs aria-label="Pills" variant="pills" ref={tabsRef} onActiveTabChange={handleTabChange}>
                {/* Custom TRL Overview tab */}
                <Tabs.Item title="TRL Overview" active={showCustom}>
                  <div className="faq-content-section md:p-[60px] py-5 px-4 shadow-[0px_4px_30px_0px_rgba(211,211,211,0.40)] bg-white rounded-3xl mt-10 [&_p]:text-base [&_p]:text-[#565656] [&_p]:font-medium [&_p]:leading-7">
                    <Accordion>
                      {customFaq.map((item, i) => (
                        <Accordion.Panel key={`custom-${i}`}>
                          <Accordion.Title className="faq-button-section flex items-center md:text-xl text-base font-medium text-[#17271F] flex-wrap gap-3 min-h-[auto] h-auto md:py-10 py-6 px-2 border-t border-solid border-[#E0E0E0] first:border-t-0 hover:!bg-white">
                            <div className="w-full flex items-center justify-between gap-3 ">
                              <span className="w-full block flex-1">{item.q}</span>
                              <div className="flex items-center justify-center w-4">
                                <span className="block w-4 h-[2px] bg-[#17271F]"></span>
                                <span className="block w-[2px] h-4 bg-[#17271F] -ml-[9px]"></span>
                              </div>
                            </div>
                          </Accordion.Title>
                          <Accordion.Content>
                            <div className="mb-2 text-gray-500 dark:text-gray-400 mt-4 block">{item.a}</div>
                          </Accordion.Content>
                        </Accordion.Panel>
                      ))}
                    </Accordion>
                  </div>
                </Tabs.Item>

                {/* Zendesk-driven tabs */}
                {sections.map((section) => (
                  <Tabs.Item
                    key={section.id}
                    title={section.name}
                    active={!showCustom && activeSectionId === section.id}
                  >
                    <div className="faq-content-section md:p-[60px] py-5 px-4 shadow-[0px_4px_30px_0px_rgba(211,211,211,0.40)] bg-white rounded-3xl mt-10 [&_p]:text-base [&_p]:text-[#565656] [&_p]:font-medium [&_p]:leading-7">
                      <Accordion>
                        {articles.map((article) => (
                          <Accordion.Panel key={article.id}>
                            <Accordion.Title className="faq-button-section flex items-center md:text-xl text-base font-medium text-[#17271F] flex-wrap gap-3 min-h-[auto] h-auto md:py-10 py-6 px-2 border-t border-solid border-[#E0E0E0] first:border-t-0 hover:!bg-white">
                              <div className="w-full flex items-center justify-between gap-3 ">
                                <span className="w-full block flex-1">{article.title}</span>
                                <div className="flex items-center justify-center w-4">
                                  <span className="block w-4 h-[2px] bg-[#17271F]"></span>
                                  <span className="block w-[2px] h-4 bg-[#17271F] -ml-[9px]"></span>
                                </div>
                              </div>
                            </Accordion.Title>
                            <Accordion.Content>
                              <div
                                className="mb-2 text-gray-500 dark:text-gray-400 mt-4 block"
                                dangerouslySetInnerHTML={{ __html: article.body }}
                              />
                            </Accordion.Content>
                          </Accordion.Panel>
                        ))}
                      </Accordion>
                    </div>
                  </Tabs.Item>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
