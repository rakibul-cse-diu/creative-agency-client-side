import React from 'react';
import google from '../../../assets/images/logos/google.png';
import airbnb from '../../../assets/images/logos/airbnb.png';
import netflix from '../../../assets/images/logos/netflix.png';
import slack from '../../../assets/images/logos/slack.png';
import uber from '../../../assets/images/logos/uber.png';

const Partners = () => {
    return (
        <section class="bg-white py-20 lg:py-[120px]">
            <div class="container">
                <div class="flex flex-wrap">
                    <div class="w-full">
                        <div class="flex flex-wrap items-center justify-center">
                            <a
                                href="j"
                                class="mx-4 flex w-1/5 md:w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                            >
                                <img
                                    src={slack}
                                    class="h-10 w-full"
                                    alt='brands'
                                />
                            </a>
                            <a
                                href="j"
                                class="mx-4 flex w-1/5 md:w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                            >
                                <img
                                    src={google}
                                    class="h-10 w-full"
                                    alt='brands'
                                />
                            </a>
                            <a
                                href="j"
                                class="mx-4 flex w-1/5 md:w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                            >
                                <img
                                    src={uber}
                                    class="h-10 w-full"
                                    alt='brands'
                                />
                            </a>
                            <a
                                href="j"
                                class="mx-4 flex w-1/5 md:w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                            >
                                <img
                                    src={netflix}
                                    class="h-10 w-full"
                                    alt='brands'
                                />
                            </a>
                            <a
                                href="j"
                                class="mx-4 flex w-1/5 md:w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                            >
                                <img
                                    src={airbnb}
                                    class="h-10 w-full"
                                    alt='brands'
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;