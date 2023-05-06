"use client"; // this is a client component

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { SvgArrow, SvgList } from '../items/svg'

export default function Sidebar() {

    const [openMenu, setOpenMenu] = useState<boolean>(true);
    const [openMenu2, setOpenMenu2] = useState<boolean>(false);
    const [openMenu3, setOpenMenu3] = useState<boolean>(false);
    const [openMenu4, setOpenMenu4] = useState<boolean>(false);
    const [openMenu5, setOpenMenu5] = useState<boolean>(false);


    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const toggleMenu2 = () => {
        setOpenMenu2(!openMenu2);
    };

    const toggleMenu3 = () => {
        setOpenMenu3(!openMenu3);
    };

    const toggleMenu4 = () => {
        setOpenMenu4(!openMenu4);
    };

    const toggleMenu5 = () => {
        setOpenMenu5(!openMenu5);
    };





    return (
        <div className='side-bar'>
            <div>
                <div className='main-text'>
                    <h3>면접준비</h3>
                    <div className='svg-to'>
                        <button onClick={toggleMenu}>
                            <SvgArrow />
                        </button>
                    </div>
                </div>
                {openMenu ? (<hr />) : null}
                {openMenu ? (
                    <div className="items-div">
                        <Link href='/' className="link-items"><SvgList /> 프론트엔드 면접 </Link>
                        <Link href='/' className="link-items"><SvgList /> Vue.js & Nuxt.js </Link>
                        <Link href='/' className="link-items"><SvgList /> React.js </Link>
                        <Link href='/' className="link-items"> <SvgList />JavaScript</Link>
                        <Link href='/' className="link-items"><SvgList /> HTML + CSS </Link>
                    </div>
                ) : null}
            </div>
            <hr />
            {/* Second Sidebar */}

            <div>
                <div className='main-text'>
                    <h3>FrontEnd</h3>
                    <div className='svg-to'>
                        <button onClick={toggleMenu2}>
                            <SvgArrow />
                        </button>
                    </div>
                </div>
                {openMenu2 ? (<hr />) : null}
                {openMenu2 ? (
                    <div className="items-div">
                        <Link href='/' className="link-items"><SvgList /> Vue.js 리스트 렌더링 </Link>
                        <Link href='/' className="link-items"><SvgList /> Vue.js TailwindCSS 설치 </Link>
                        <Link href='/' className="link-items"><SvgList /> Vue.js 프로젝트 꿀팁</Link>
                        <Link href='/' className="link-items"><SvgList /> React.js 이미지 슬라이드 </Link>
                        <Link href='/' className="link-items"><SvgList /> Typescript 정리,장단점  </Link>
                        <Link href='/' className="link-items"><SvgList /> Typescript 타입 종료 </Link>
                        <Link href='/' className="link-items"><SvgList /> Typescript 인터페이스 </Link>
                        <Link href='/' className="link-items"><SvgList /> Typescript 함수,매개변수 </Link>
                    </div>
                ) : null}
            </div>
            <hr />

            {/* Third Sidebar */}

            <div>
                <div className='main-text'>
                    <h3>Web Programming</h3>
                    <div className='svg-to'>
                        <button onClick={toggleMenu3}>
                            <SvgArrow />
                        </button>
                    </div>
                </div>
                {openMenu3 ? (<hr />) : null}
                {openMenu3 ? (
                    <div className="items-div">
                        <Link href='/' className="link-items"><SvgList /> 자바스크립트 총 내용 정리  </Link>
                        <Link href='/' className="link-items"><SvgList /> 자바스크립트 배열 맛보기 </Link>
                        <Link href='/' className="link-items"><SvgList /> 자바스크립트 랜덤 숫자 </Link>
                        <Link href='/' className="link-items"> <SvgList /> 자바스크립트 함수 내용 정리</Link>
                        <Link href='/' className="link-items"><SvgList /> HTML 기초 내용 정리 </Link>
                        <Link href='/' className="link-items"><SvgList /> Css 기초 내용 정리 </Link>
                    </div>
                ) : null}
            </div>
            <hr />

            <div>
                <div className='main-text'>
                    <h3>Special </h3>
                    <div className='svg-to'>
                        <button onClick={toggleMenu4}>
                            <SvgArrow />
                        </button>
                    </div>
                </div>
                {openMenu4 ? (<hr />) : null}
                {openMenu4 ? (
                    <div className="items-div">
                        <Link href='/' className="link-items"><SvgList /> Vue.js GitHub으로 배포 및 호스팅  </Link>
                        <Link href='/' className="link-items"><SvgList /> Firebase FireStore Init 오류 </Link>
                        <Link href='/' className="link-items"><SvgList /> Vue.js Firebase 호스팅 </Link>
                        <Link href='/' className="link-items"> <SvgList /> HTML a 테그 데이더 바인딩 하는법</Link>
                        <Link href='/' className="link-items"><SvgList /> Firebase 연동 오류 해결 </Link>
                    </div>
                ) : null}
            </div>
            <hr />

            <div>
                <div className='main-text'>
                    <h3> Coding Test </h3>
                    <div className='svg-to'>
                        <button onClick={toggleMenu5}>
                            <SvgArrow />
                        </button>
                    </div>
                </div>
                {openMenu5 ? (<hr />) : null}
                {openMenu5 ? (
                    <div className="items-div">
                        <Link href='/' className="link-items"><SvgList /> C/C++ 스터디  </Link>
                        <Link href='/' className="link-items"><SvgList /> C# / .NET </Link>
                        <Link href='/' className="link-items"><SvgList /> Database,  SQL </Link>
                        <Link href='/' className="link-items"> <SvgList /> 알고리즘 스터디</Link>
                        <Link href='/' className="link-items"><SvgList /> 코딩테스트 정리</Link>
                    </div>
                ) : null}
            </div>
        </div>
    );

}