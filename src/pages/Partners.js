import React from 'react';
import Topbar from '../components/Topbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Tabs } from "flowbite-react";
import ecosystemtab1 from '../assets/images/ecosystem-tabs-1.png'
import ecosystemtab2 from '../assets/images/ecosystem-tabs-2.png'
import ecosystemtab3 from '../assets/images/ecosystem-tabs-3.png'

import listtab1 from '../assets/images/list-tab-1.png'
import listtab2 from '../assets/images/list-tab-2.png'
import listtab3 from '../assets/images/list-tab-3.png'
import listtab4 from '../assets/images/list-tab-4.png'
import listtab5 from '../assets/images/list-tab-5.png'
import listtab6 from '../assets/images/list-tab-6.png'

const Partners = () => {
  return (
    <div>
      <Topbar/>
      <Header/>
        <div>
            <div className='max-w-5xl mx-auto md:py-4 lg:px-0 px-3 py-6'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12'>
                      <div className='tabs-pills-eco'>
                        <Tabs aria-label="Pills" variant="pills">
                          <Tabs.Item active title="Product">
                            <div className='mt-5'>
                              <div className='grid grid-cols-12 items-center md:gap-x-10'>
                                <div className='md:col-span-6 col-span-12'>
                                  <span className='block text-[24px] outfit-bold text-[#17271F] md:mt-0 mt-3'>
                                    TRL Platform
                                  </span>
                                  <span className='block text-[16px] text-[#565656] md:max-w-[80%] mt-2 mb-5'>
                                    Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                  </span>
                                  <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                </div>
                                <div className='md:col-span-6 col-span-12'>
                                  <img src={ecosystemtab1} className="md:mt-0 mt-8 w-full" alt=""/>
                                </div>
                              </div>
                            </div>
                          </Tabs.Item>
                          <Tabs.Item title="Blockchain network">
                            <div className='mt-5'>
                              <div className='grid grid-cols-12 items-center md:gap-x-10'>
                                <div className='md:col-span-6 col-span-12'>
                                  <img src={ecosystemtab1} className="md:mt-0 mt-8 w-full" alt=""/>
                                </div>
                                <div className='md:col-span-6 col-span-12'>
                                  <span className='block text-[24px] outfit-bold text-[#17271F] md:mt-0 mt-3'>
                                    TRL Platform
                                  </span>
                                  <span className='block text-[16px] text-[#565656] md:max-w-[80%] mt-2 mb-5'>
                                    Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                  </span>
                                  <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                </div>
                              </div>
                            </div>
                          </Tabs.Item>
                          <Tabs.Item title="Security">
                            <div className='mt-5'>
                              <div className='grid grid-cols-12 items-center md:gap-x-10'>
                                <div className='md:col-span-6 col-span-12'>
                                  <span className='block text-[24px] outfit-bold text-[#17271F] md:mt-0 mt-3'>
                                    TRL Platform
                                  </span>
                                  <span className='block text-[16px] text-[#565656] md:max-w-[80%] mt-2 mb-5'>
                                    Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                  </span>
                                  <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                </div>
                                <div className='md:col-span-6 col-span-12'>
                                  <img src={ecosystemtab1} className="md:mt-0 mt-8 w-full" alt=""/>
                                </div>
                              </div>
                            </div>
                          </Tabs.Item>
                          <Tabs.Item title="Compliance">
                            <div className='mt-5'>
                              <div className='grid grid-cols-12 items-center md:gap-x-10'>
                                <div className='md:col-span-6 col-span-12'>
                                  <img src={ecosystemtab1} className="md:mt-0 mt-8 w-full" alt=""/>
                                </div>
                                <div className='md:col-span-6 col-span-12'>
                                  <span className='block text-[24px] outfit-bold text-[#17271F] md:mt-0 mt-3'>
                                    TRL Platform
                                  </span>
                                  <span className='block text-[16px] text-[#565656] md:max-w-[80%] mt-2 mb-5'>
                                    Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                  </span>
                                  <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                </div>
                              </div>
                            </div>
                          </Tabs.Item>
                          <Tabs.Item title="Wallets">
                            <div className='mt-5'>
                              <div className='grid grid-cols-12 items-center md:gap-x-10'>
                                <div className='md:col-span-6 col-span-12'>
                                  <span className='block text-[24px] outfit-bold text-[#17271F] md:mt-0 mt-3'>
                                    TRL Platform
                                  </span>
                                  <span className='block text-[16px] text-[#565656] md:max-w-[80%] mt-2 mb-5'>
                                    Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                  </span>
                                  <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                </div>
                                <div className='md:col-span-6 col-span-12'>
                                  <img src={ecosystemtab1} className="md:mt-0 mt-8 w-full" alt=""/>
                                </div>
                              </div>
                            </div>
                          </Tabs.Item>
                        </Tabs>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className='max-w-5xl mx-auto md:py-4 lg:px-0 px-3 py-6'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12'>
                      <div className='tabs-pills-eco'>
                        <Tabs aria-label="Pills" variant="pills">
                          <Tabs.Item active title="Product">
                            <div className='mt-5'>
                              <div className='grid grid-cols-12 items-center md:gap-x-10'>
                                <div className='md:col-span-4 col-span-12'>
                                  <div className='bg-[#fff] shadow-md px-4 py-5 rounded-[12px]'>
                                    <img src={listtab1} className="md:mt-0 mt-8 w-full" alt=""/>
                                    <span className='block text-[20px] md:mt-2 mt-4 outfit-bold text-[#17271F]'>
                                      TRL Platform
                                    </span>
                                    <span className='block text-[13px] text-[#565656] mb-3'>
                                      Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                    </span>
                                    <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                  </div>
                                </div>
                                <div className='md:col-span-4 col-span-12'>
                                  <div className='bg-[#fff] shadow-md px-4 py-5 rounded-[12px]'>
                                    <img src={listtab2} className="md:mt-0 mt-8 w-full" alt=""/>
                                    <span className='block text-[20px] md:mt-2 mt-4 outfit-bold text-[#17271F]'>
                                      TRL Platform
                                    </span>
                                    <span className='block text-[13px] text-[#565656] mb-3'>
                                      Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                    </span>
                                    <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                  </div>
                                </div>
                                <div className='md:col-span-4 col-span-12'>
                                  <div className='bg-[#fff] shadow-md px-4 py-5 rounded-[12px]'>
                                    <img src={listtab3} className="md:mt-0 mt-8 w-full" alt=""/>
                                    <span className='block text-[20px] md:mt-2 mt-4 outfit-bold text-[#17271F]'>
                                      TRL Platform
                                    </span>
                                    <span className='block text-[13px] text-[#565656] mb-3'>
                                      Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                    </span>
                                    <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Tabs.Item>
                          <Tabs.Item title="Blockchain network">
                          <div className='mt-5'>
                              <div className='grid grid-cols-12 items-center md:gap-x-10'>
                                <div className='md:col-span-4 col-span-12'>
                                  <div className='bg-[#fff] shadow-md px-4 py-5 rounded-[12px]'>
                                    <img src={listtab1} className="md:mt-0 mt-8 w-full" alt=""/>
                                    <span className='block text-[20px] md:mt-2 mt-4 outfit-bold text-[#17271F]'>
                                      TRL Platform
                                    </span>
                                    <span className='block text-[13px] text-[#565656] mb-3'>
                                      Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                    </span>
                                    <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                  </div>
                                </div>
                                <div className='md:col-span-4 col-span-12'>
                                  <div className='bg-[#fff] shadow-md px-4 py-5 rounded-[12px]'>
                                    <img src={listtab2} className="md:mt-0 mt-8 w-full" alt=""/>
                                    <span className='block text-[20px] md:mt-2 mt-4 outfit-bold text-[#17271F]'>
                                      TRL Platform
                                    </span>
                                    <span className='block text-[13px] text-[#565656] mb-3'>
                                      Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                    </span>
                                    <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                  </div>
                                </div>
                                <div className='md:col-span-4 col-span-12'>
                                  <div className='bg-[#fff] shadow-md px-4 py-5 rounded-[12px]'>
                                    <img src={listtab3} className="md:mt-0 mt-8 w-full" alt=""/>
                                    <span className='block text-[20px] md:mt-2 mt-4 outfit-bold text-[#17271F]'>
                                      TRL Platform
                                    </span>
                                    <span className='block text-[13px] text-[#565656] mb-3'>
                                      Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                    </span>
                                    <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Tabs.Item>
                          <Tabs.Item title="Security">
                          <div className='mt-5'>
                              <div className='grid grid-cols-12 items-center md:gap-x-10'>
                                <div className='md:col-span-4 col-span-12'>
                                  <div className='bg-[#fff] shadow-md px-4 py-5 rounded-[12px]'>
                                    <img src={listtab1} className="md:mt-0 mt-8 w-full" alt=""/>
                                    <span className='block text-[20px] md:mt-2 mt-4 outfit-bold text-[#17271F]'>
                                      TRL Platform
                                    </span>
                                    <span className='block text-[13px] text-[#565656] mb-3'>
                                      Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                    </span>
                                    <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                  </div>
                                </div>
                                <div className='md:col-span-4 col-span-12'>
                                  <div className='bg-[#fff] shadow-md px-4 py-5 rounded-[12px]'>
                                    <img src={listtab2} className="md:mt-0 mt-8 w-full" alt=""/>
                                    <span className='block text-[20px] md:mt-2 mt-4 outfit-bold text-[#17271F]'>
                                      TRL Platform
                                    </span>
                                    <span className='block text-[13px] text-[#565656] mb-3'>
                                      Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                    </span>
                                    <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                  </div>
                                </div>
                                <div className='md:col-span-4 col-span-12'>
                                  <div className='bg-[#fff] shadow-md px-4 py-5 rounded-[12px]'>
                                    <img src={listtab3} className="md:mt-0 mt-8 w-full" alt=""/>
                                    <span className='block text-[20px] md:mt-2 mt-4 outfit-bold text-[#17271F]'>
                                      TRL Platform
                                    </span>
                                    <span className='block text-[13px] text-[#565656] mb-3'>
                                      Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                    </span>
                                    <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Tabs.Item>
                          <Tabs.Item title="Compliance">
                          <div className='mt-5'>
                              <div className='grid grid-cols-12 items-center md:gap-x-10'>
                                <div className='md:col-span-4 col-span-12'>
                                  <div className='bg-[#fff] shadow-md px-4 py-5 rounded-[12px]'>
                                    <img src={listtab1} className="md:mt-0 mt-8 w-full" alt=""/>
                                    <span className='block text-[20px] md:mt-2 mt-4 outfit-bold text-[#17271F]'>
                                      TRL Platform
                                    </span>
                                    <span className='block text-[13px] text-[#565656] mb-3'>
                                      Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                    </span>
                                    <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                  </div>
                                </div>
                                <div className='md:col-span-4 col-span-12'>
                                  <div className='bg-[#fff] shadow-md px-4 py-5 rounded-[12px]'>
                                    <img src={listtab2} className="md:mt-0 mt-8 w-full" alt=""/>
                                    <span className='block text-[20px] md:mt-2 mt-4 outfit-bold text-[#17271F]'>
                                      TRL Platform
                                    </span>
                                    <span className='block text-[13px] text-[#565656] mb-3'>
                                      Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                    </span>
                                    <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                  </div>
                                </div>
                                <div className='md:col-span-4 col-span-12'>
                                  <div className='bg-[#fff] shadow-md px-4 py-5 rounded-[12px]'>
                                    <img src={listtab3} className="md:mt-0 mt-8 w-full" alt=""/>
                                    <span className='block text-[20px] md:mt-2 mt-4 outfit-bold text-[#17271F]'>
                                      TRL Platform
                                    </span>
                                    <span className='block text-[13px] text-[#565656] mb-3'>
                                      Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                    </span>
                                    <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Tabs.Item>
                          <Tabs.Item title="Wallets">
                          <div className='mt-5'>
                              <div className='grid grid-cols-12 items-center md:gap-x-10'>
                                <div className='md:col-span-4 col-span-12'>
                                  <div className='bg-[#fff] shadow-md px-4 py-5 rounded-[12px]'>
                                    <img src={listtab1} className="md:mt-0 mt-8 w-full" alt=""/>
                                    <span className='block text-[20px] md:mt-2 mt-4 outfit-bold text-[#17271F]'>
                                      TRL Platform
                                    </span>
                                    <span className='block text-[13px] text-[#565656] mb-3'>
                                      Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                    </span>
                                    <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                  </div>
                                </div>
                                <div className='md:col-span-4 col-span-12'>
                                  <div className='bg-[#fff] shadow-md px-4 py-5 rounded-[12px]'>
                                    <img src={listtab2} className="md:mt-0 mt-8 w-full" alt=""/>
                                    <span className='block text-[20px] md:mt-2 mt-4 outfit-bold text-[#17271F]'>
                                      TRL Platform
                                    </span>
                                    <span className='block text-[13px] text-[#565656] mb-3'>
                                      Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                    </span>
                                    <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                  </div>
                                </div>
                                <div className='md:col-span-4 col-span-12'>
                                  <div className='bg-[#fff] shadow-md px-4 py-5 rounded-[12px]'>
                                    <img src={listtab3} className="md:mt-0 mt-8 w-full" alt=""/>
                                    <span className='block text-[20px] md:mt-2 mt-4 outfit-bold text-[#17271F]'>
                                      TRL Platform
                                    </span>
                                    <span className='block text-[13px] text-[#565656] mb-3'>
                                      Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                    </span>
                                    <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Tabs.Item>
                        </Tabs>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className='max-w-5xl mx-auto md:py-4 lg:px-0 px-3 py-6'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12'>
                      <div className='tabs-pills-eco'>
                        <Tabs aria-label="Pills" variant="pills">
                          <Tabs.Item title="Product">
                            <div className='mt-5'>
                              <div className='grid grid-cols-12 items-center md:gap-x-10'>
                                <div className='md:col-span-6 col-span-12'>
                                  <span className='block text-[24px] outfit-bold text-[#17271F] md:mt-0 mt-3'>
                                    TRL Platform
                                  </span>
                                  <span className='block text-[16px] text-[#565656] md:max-w-[80%] mt-2 mb-5'>
                                    Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                  </span>
                                  <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                </div>
                                <div className='md:col-span-6 col-span-12'>
                                  <img src={ecosystemtab2} className="md:mt-0 mt-8 w-full" alt=""/>
                                </div>
                              </div>
                            </div>
                          </Tabs.Item>
                          <Tabs.Item title="Blockchain network">
                            <div className='mt-5'>
                              <div className='grid grid-cols-12 items-center md:gap-x-10'>
                                <div className='md:col-span-6 col-span-12'>
                                  <img src={ecosystemtab2} className="md:mt-0 mt-8 w-full" alt=""/>
                                </div>
                                <div className='md:col-span-6 col-span-12'>
                                  <span className='block text-[24px] outfit-bold text-[#17271F] md:mt-0 mt-3'>
                                    TRL Platform
                                  </span>
                                  <span className='block text-[16px] text-[#565656] md:max-w-[80%] mt-2 mb-5'>
                                    Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                  </span>
                                  <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                </div>
                              </div>
                            </div>
                          </Tabs.Item>
                          <Tabs.Item active title="Security">
                            <div className='mt-5'>
                              <div className='grid grid-cols-12 items-center md:gap-x-10'>
                                <div className='md:col-span-6 col-span-12'>
                                  <span className='block text-[24px] outfit-bold text-[#17271F] md:mt-0 mt-3'>
                                    TRL Platform
                                  </span>
                                  <span className='block text-[16px] text-[#565656] md:max-w-[80%] mt-2 mb-5'>
                                    Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                  </span>
                                  <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                </div>
                                <div className='md:col-span-6 col-span-12'>
                                  <img src={ecosystemtab2} className="md:mt-0 mt-8 w-full" alt=""/>
                                </div>
                              </div>
                            </div>
                          </Tabs.Item>
                          <Tabs.Item title="Compliance">
                            <div className='mt-5'>
                              <div className='grid grid-cols-12 items-center md:gap-x-10'>
                                <div className='md:col-span-6 col-span-12'>
                                  <img src={ecosystemtab2} className="md:mt-0 mt-8 w-full" alt=""/>
                                </div>
                                <div className='md:col-span-6 col-span-12'>
                                  <span className='block text-[24px] outfit-bold text-[#17271F] md:mt-0 mt-3'>
                                    TRL Platform
                                  </span>
                                  <span className='block text-[16px] text-[#565656] md:max-w-[80%] mt-2 mb-5'>
                                    Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                  </span>
                                  <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                </div>
                              </div>
                            </div>
                          </Tabs.Item>
                          <Tabs.Item title="Wallets">
                            <div className='mt-5'>
                              <div className='grid grid-cols-12 items-center md:gap-x-10'>
                                <div className='md:col-span-6 col-span-12'>
                                  <span className='block text-[24px] outfit-bold text-[#17271F] md:mt-0 mt-3'>
                                    TRL Platform
                                  </span>
                                  <span className='block text-[16px] text-[#565656] md:max-w-[80%] mt-2 mb-5'>
                                    Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                  </span>
                                  <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                </div>
                                <div className='md:col-span-6 col-span-12'>
                                  <img src={ecosystemtab2} className="md:mt-0 mt-8 w-full" alt=""/>
                                </div>
                              </div>
                            </div>
                          </Tabs.Item>
                        </Tabs>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className='max-w-5xl mx-auto md:py-4 lg:px-0 px-3 py-6'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12'>
                      <div className='tabs-pills-eco'>
                        <Tabs aria-label="Pills" variant="pills">
                          <Tabs.Item  title="Product">
                            <div className='mt-5'>
                              <div className='grid grid-cols-12 items-center md:gap-x-10'>
                                <div className='md:col-span-6 col-span-12'>
                                  <span className='block text-[24px] outfit-bold text-[#17271F] md:mt-0 mt-3'>
                                    TRL Platform
                                  </span>
                                  <span className='block text-[16px] text-[#565656] md:max-w-[80%] mt-2 mb-5'>
                                    Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                  </span>
                                  <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                </div>
                                <div className='md:col-span-6 col-span-12'>
                                  <img src={ecosystemtab3} className="md:mt-0 mt-8 w-full" alt=""/>
                                </div>
                              </div>
                            </div>
                          </Tabs.Item>
                          <Tabs.Item title="Blockchain network">
                            <div className='mt-5'>
                              <div className='grid grid-cols-12 items-center md:gap-x-10'>
                                <div className='md:col-span-6 col-span-12'>
                                  <img src={ecosystemtab3} className="md:mt-0 mt-8 w-full" alt=""/>
                                </div>
                                <div className='md:col-span-6 col-span-12'>
                                  <span className='block text-[24px] outfit-bold text-[#17271F] md:mt-0 mt-3'>
                                    TRL Platform
                                  </span>
                                  <span className='block text-[16px] text-[#565656] md:max-w-[80%] mt-2 mb-5'>
                                    Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                  </span>
                                  <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                </div>
                              </div>
                            </div>
                          </Tabs.Item>
                          <Tabs.Item title="Security">
                            <div className='mt-5'>
                              <div className='grid grid-cols-12 items-center md:gap-x-10'>
                                <div className='md:col-span-6 col-span-12'>
                                  <span className='block text-[24px] outfit-bold text-[#17271F] md:mt-0 mt-3'>
                                    TRL Platform
                                  </span>
                                  <span className='block text-[16px] text-[#565656] md:max-w-[80%] mt-2 mb-5'>
                                    Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                  </span>
                                  <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                </div>
                                <div className='md:col-span-6 col-span-12'>
                                  <img src={ecosystemtab3} className="md:mt-0 mt-8 w-full" alt=""/>
                                </div>
                              </div>
                            </div>
                          </Tabs.Item>
                          <Tabs.Item active title="Compliance">
                            <div className='mt-5'>
                              <div className='grid grid-cols-12 items-center md:gap-x-10'>
                                <div className='md:col-span-6 col-span-12'>
                                  <img src={ecosystemtab3} className="md:mt-0 mt-8 w-full" alt=""/>
                                </div>
                                <div className='md:col-span-6 col-span-12'>
                                  <span className='block text-[24px] outfit-bold text-[#17271F] md:mt-0 mt-3'>
                                    TRL Platform
                                  </span>
                                  <span className='block text-[16px] text-[#565656] md:max-w-[80%] mt-2 mb-5'>
                                    Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                  </span>
                                  <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                </div>
                              </div>
                            </div>
                          </Tabs.Item>
                          <Tabs.Item title="Wallets">
                            <div className='mt-5'>
                              <div className='grid grid-cols-12 items-center md:gap-x-10'>
                                <div className='md:col-span-6 col-span-12'>
                                  <span className='block text-[24px] outfit-bold text-[#17271F] md:mt-0 mt-3'>
                                    TRL Platform
                                  </span>
                                  <span className='block text-[16px] text-[#565656] md:max-w-[80%] mt-2 mb-5'>
                                    Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                  </span>
                                  <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                </div>
                                <div className='md:col-span-6 col-span-12'>
                                  <img src={ecosystemtab3} className="md:mt-0 mt-8 w-full" alt=""/>
                                </div>
                              </div>
                            </div>
                          </Tabs.Item>
                        </Tabs>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className='max-w-5xl mx-auto md:py-4 lg:px-0 px-3 py-6 mb-6'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12'>
                      <div className='tabs-pills-eco'>
                        <Tabs aria-label="Pills" variant="pills">
                          <Tabs.Item active title="Product">
                            <div className='mt-5'>
                              <div className='grid grid-cols-12 items-center md:gap-x-10'>
                                <div className='md:col-span-4 col-span-12'>
                                  <div className='bg-[#fff] shadow-md px-4 py-5 rounded-[12px]'>
                                    <img src={listtab4} className="md:mt-0 mt-8 w-full" alt=""/>
                                    <span className='block text-[20px] md:mt-2 mt-4 outfit-bold text-[#17271F]'>
                                      TRL Platform
                                    </span>
                                    <span className='block text-[13px] text-[#565656] mb-3'>
                                      Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                    </span>
                                    <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                  </div>
                                </div>
                                <div className='md:col-span-4 col-span-12'>
                                  <div className='bg-[#fff] shadow-md px-4 py-5 rounded-[12px]'>
                                    <img src={listtab5} className="md:mt-0 mt-8 w-full" alt=""/>
                                    <span className='block text-[20px] md:mt-2 mt-4 outfit-bold text-[#17271F]'>
                                      TRL Platform
                                    </span>
                                    <span className='block text-[13px] text-[#565656] mb-3'>
                                      Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                    </span>
                                    <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                  </div>
                                </div>
                                <div className='md:col-span-4 col-span-12'>
                                  <div className='bg-[#fff] shadow-md px-4 py-5 rounded-[12px]'>
                                    <img src={listtab6} className="md:mt-0 mt-8 w-full" alt=""/>
                                    <span className='block text-[20px] md:mt-2 mt-4 outfit-bold text-[#17271F]'>
                                      TRL Platform
                                    </span>
                                    <span className='block text-[13px] text-[#565656] mb-3'>
                                      Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                    </span>
                                    <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Tabs.Item>
                          <Tabs.Item title="Blockchain network">
                          <div className='mt-5'>
                              <div className='grid grid-cols-12 items-center md:gap-x-10'>
                                <div className='md:col-span-4 col-span-12'>
                                  <div className='bg-[#fff] shadow-md px-4 py-5 rounded-[12px]'>
                                    <img src={listtab1} className="md:mt-0 mt-8 w-full" alt=""/>
                                    <span className='block text-[20px] md:mt-2 mt-4 outfit-bold text-[#17271F]'>
                                      TRL Platform
                                    </span>
                                    <span className='block text-[13px] text-[#565656] mb-3'>
                                      Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                    </span>
                                    <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                  </div>
                                </div>
                                <div className='md:col-span-4 col-span-12'>
                                  <div className='bg-[#fff] shadow-md px-4 py-5 rounded-[12px]'>
                                    <img src={listtab2} className="md:mt-0 mt-8 w-full" alt=""/>
                                    <span className='block text-[20px] md:mt-2 mt-4 outfit-bold text-[#17271F]'>
                                      TRL Platform
                                    </span>
                                    <span className='block text-[13px] text-[#565656] mb-3'>
                                      Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                    </span>
                                    <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                  </div>
                                </div>
                                <div className='md:col-span-4 col-span-12'>
                                  <div className='bg-[#fff] shadow-md px-4 py-5 rounded-[12px]'>
                                    <img src={listtab3} className="md:mt-0 mt-8 w-full" alt=""/>
                                    <span className='block text-[20px] md:mt-2 mt-4 outfit-bold text-[#17271F]'>
                                      TRL Platform
                                    </span>
                                    <span className='block text-[13px] text-[#565656] mb-3'>
                                      Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                    </span>
                                    <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Tabs.Item>
                          <Tabs.Item title="Security">
                          <div className='mt-5'>
                              <div className='grid grid-cols-12 items-center md:gap-x-10'>
                                <div className='md:col-span-4 col-span-12'>
                                  <div className='bg-[#fff] shadow-md px-4 py-5 rounded-[12px]'>
                                    <img src={listtab4} className="md:mt-0 mt-8 w-full" alt=""/>
                                    <span className='block text-[20px] md:mt-2 mt-4 outfit-bold text-[#17271F]'>
                                      TRL Platform
                                    </span>
                                    <span className='block text-[13px] text-[#565656] mb-3'>
                                      Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                    </span>
                                    <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                  </div>
                                </div>
                                <div className='md:col-span-4 col-span-12'>
                                  <div className='bg-[#fff] shadow-md px-4 py-5 rounded-[12px]'>
                                    <img src={listtab5} className="md:mt-0 mt-8 w-full" alt=""/>
                                    <span className='block text-[20px] md:mt-2 mt-4 outfit-bold text-[#17271F]'>
                                      TRL Platform
                                    </span>
                                    <span className='block text-[13px] text-[#565656] mb-3'>
                                      Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                    </span>
                                    <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                  </div>
                                </div>
                                <div className='md:col-span-4 col-span-12'>
                                  <div className='bg-[#fff] shadow-md px-4 py-5 rounded-[12px]'>
                                    <img src={listtab6} className="md:mt-0 mt-8 w-full" alt=""/>
                                    <span className='block text-[20px] md:mt-2 mt-4 outfit-bold text-[#17271F]'>
                                      TRL Platform
                                    </span>
                                    <span className='block text-[13px] text-[#565656] mb-3'>
                                      Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                    </span>
                                    <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Tabs.Item>
                          <Tabs.Item title="Compliance">
                          <div className='mt-5'>
                              <div className='grid grid-cols-12 items-center md:gap-x-10'>
                                <div className='md:col-span-4 col-span-12'>
                                  <div className='bg-[#fff] shadow-md px-4 py-5 rounded-[12px]'>
                                    <img src={listtab1} className="md:mt-0 mt-8 w-full" alt=""/>
                                    <span className='block text-[20px] md:mt-2 mt-4 outfit-bold text-[#17271F]'>
                                      TRL Platform
                                    </span>
                                    <span className='block text-[13px] text-[#565656] mb-3'>
                                      Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                    </span>
                                    <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                  </div>
                                </div>
                                <div className='md:col-span-4 col-span-12'>
                                  <div className='bg-[#fff] shadow-md px-4 py-5 rounded-[12px]'>
                                    <img src={listtab2} className="md:mt-0 mt-8 w-full" alt=""/>
                                    <span className='block text-[20px] md:mt-2 mt-4 outfit-bold text-[#17271F]'>
                                      TRL Platform
                                    </span>
                                    <span className='block text-[13px] text-[#565656] mb-3'>
                                      Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                    </span>
                                    <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                  </div>
                                </div>
                                <div className='md:col-span-4 col-span-12'>
                                  <div className='bg-[#fff] shadow-md px-4 py-5 rounded-[12px]'>
                                    <img src={listtab3} className="md:mt-0 mt-8 w-full" alt=""/>
                                    <span className='block text-[20px] md:mt-2 mt-4 outfit-bold text-[#17271F]'>
                                      TRL Platform
                                    </span>
                                    <span className='block text-[13px] text-[#565656] mb-3'>
                                      Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                    </span>
                                    <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Tabs.Item>
                          <Tabs.Item title="Wallets">
                            <div className='mt-5'>
                              <div className='grid grid-cols-12 items-center md:gap-x-10'>
                                <div className='md:col-span-4 col-span-12'>
                                  <div className='bg-[#fff] shadow-md px-4 py-5 rounded-[12px]'>
                                    <img src={listtab4} className="md:mt-0 mt-8 w-full" alt=""/>
                                    <span className='block text-[20px] md:mt-2 mt-4 outfit-bold text-[#17271F]'>
                                      TRL Platform
                                    </span>
                                    <span className='block text-[13px] text-[#565656] mb-3'>
                                      Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                    </span>
                                    <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                  </div>
                                </div>
                                <div className='md:col-span-4 col-span-12'>
                                  <div className='bg-[#fff] shadow-md px-4 py-5 rounded-[12px]'>
                                    <img src={listtab5} className="md:mt-0 mt-8 w-full" alt=""/>
                                    <span className='block text-[20px] md:mt-2 mt-4 outfit-bold text-[#17271F]'>
                                      TRL Platform
                                    </span>
                                    <span className='block text-[13px] text-[#565656] mb-3'>
                                      Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                    </span>
                                    <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                  </div>
                                </div>
                                <div className='md:col-span-4 col-span-12'>
                                  <div className='bg-[#fff] shadow-md px-4 py-5 rounded-[12px]'>
                                    <img src={listtab6} className="md:mt-0 mt-8 w-full" alt=""/>
                                    <span className='block text-[20px] md:mt-2 mt-4 outfit-bold text-[#17271F]'>
                                      TRL Platform
                                    </span>
                                    <span className='block text-[13px] text-[#565656] mb-3'>
                                      Lorem ipsum dolor sit amet consectetur. A viverra amet ac ultrices. Vulputate tempor diam enim id at dui ullamcorper montes.
                                    </span>
                                    <button className="text-[#FF4A3F] bg-transparent border-[2px] border-[#FF4A3F] text-[14px] outfit-semibold md:px-6 px-5 py-2 rounded-[25px] mr-3">Learn more</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Tabs.Item>
                        </Tabs>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      <Footer/>
    </div>
  );
};

export default Partners;