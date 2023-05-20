"use client"; // this is a client component

import React, { useState, useEffect, useRef } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { SvgArrow, SvgList } from '../assets/items/svg';
import { mainSidebar } from '../assets/data/main_sidebar';

export default function Sidebar() {

    const router = useRouter();

    const [openMenu, setOpenMenu] = useState<boolean>(true);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };


    return (
        <div className='side-bar'>
            <div>
                <div className='main-text'>
                    <h3 onClick={() => router.push('/products')}><span>ツ</span>
                        면접준비
                    </h3>
                    <div className='svg-to'>
                        <button>
                            <SvgArrow />
                        </button>
                    </div>
                </div>
            </div>
            <hr />

            {mainSidebar && mainSidebar.map((key, a) => (
              <>
                    <div>
                        <div className='main-text'>
                            <h3><span>ツ</span> {mainSidebar[a].title}</h3>
                            <div className='svg-to'>
                                <button>
                                    <SvgArrow />
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr />
              </>
            ))}

            <div>
                <div className='main-text'>
                    <h3><span>ツ</span> FrontEnd</h3>
                    <div className='svg-to'>
                        <button>
                            <SvgArrow />
                        </button>
                    </div>
                </div>
            </div>
            <hr />

            <div>
                <div className='main-text'>
                    <h3><span>◡̈</span> Web Programming</h3>
                    <div className='svg-to'>
                        <button>
                            <SvgArrow />
                        </button>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <div className='main-text'>
                    <h3><span></span> Special </h3>
                    <div className='svg-to'>
                        <button>
                            <SvgArrow />
                        </button>
                    </div>
                </div>
            </div>
            <hr />

            <div>
                <div className='main-text'>
                    <h3><span>ツ</span> Coding Test </h3>
                    <div className='svg-to'>
                        <button>
                            <SvgArrow />
                        </button>
                    </div>
                </div>
                {/* {openMenu5 ? (<hr />) : null}
                {openMenu5 ? (
                    <div className="items-div">
                        <Link href='/' className="link-items"><SvgList /> C/C++ 스터디  </Link>
                        <Link href='/' className="link-items"><SvgList /> C# / .NET </Link>
                        <Link href='/' className="link-items"><SvgList /> Database,  SQL </Link>
                        <Link href='/' className="link-items"> <SvgList /> 알고리즘 스터디</Link>
                        <Link href='/' className="link-items"><SvgList /> 코딩테스트 정리</Link>
                    </div>
                ) : null} */}
            </div>
        </div>
    );

}