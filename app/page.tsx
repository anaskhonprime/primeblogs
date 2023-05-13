'use client';

import { useState, useEffect } from "react";

import "highlight.js/styles/github-dark.css";
import hljs from "highlight.js";

import Image from 'next/image';
import { headers, content1, content2, content3, content4, content5 } from "./data/data";
import { Img1, Img2, Img3, Img4, Img5, Img6, Img7 } from './images/assets';

import HighlightCode from "./components/Highlights";


export default function Home() {
  interface User {
    name: string;
    age: number;
    isStudent: false;
  }

  let user1: User = {
    name: "Tom",
    age: 22,
    isStudent: false
  }

  const code = `let a = "Hello";
a = 10;
console.log(a);`;

  const code2 = `package org.example.dummy {
    import org.dummy.*;

    /*define package inline interface*/
    public interface IFooBarzable {
        public function foo(... pairs):Array;
    }

    public class FooBar implements IFooBarzable {
        static private var cnt:uint = 0;
        private var bar:String;

        //constructor
        public function TestBar(bar:String):void {
            bar = bar;
            ++cnt;
        }

        public function foo(... pairs):Array {
            pairs.push(bar);
            return pairs;
        }
    }
}`

    return (

      <>
        <div className="main-text">
          <div className="intro">

            {/* Section 1 */}

            <h2>{headers[0].title}</h2>
            <hr />
            <div className="img-center">
              <Image src={Img1} alt="Images"
                height={300} className="img" />
            </div>
            {content1.map((key, a) => (
              <div key={a} className="text-container">
                <p>{content1[a].text}</p>
              </div>
            ))}

            <div className="free-space"></div>

            {/* Section 2 */}

            <h2>{headers[1].title}</h2>
            <hr />
            <div className="img-center">
              <Image src={Img2} alt="Images"
                height={300} className="img" />
            </div>
            {content2.map((key, a) => (
              <div key={a} className="text-container">
                <p>
                  {content2[a].text}
                </p>
              </div>
            ))}
            <div className="img-center">
              <Image src={Img3} alt="Images"
                height={300} className="img" />
            </div>

            <div className="free-space"></div>

            {/* Section 3 */}


            <h2>{headers[2].title}</h2>
            <hr />
            <div className="img-center">
              <Image src={Img4} alt="Images"
                height={300} className="img" />
            </div>
            {content3.map((key, a) => (
              <div key={a} className="text-container">
                <p>
                  {content3[a].text}
                </p>
              </div>
            ))}

            <div className="free-space"></div>

            {/* Section 4 */}


            <h2>{headers[3].title}</h2>
            <hr />
            <div className="img-center">
              <Image src={Img5} alt="Images"
                height={300} className="img" />
            </div>
            {content4.map((key, a) => (
              <div key={a} className="text-container">
                <p>
                  {content4[a].text}
                </p>
              </div>
            ))}

            <div className="img-center">
              <Image src={Img7} alt="Images"
                height={300} className="img" />
            </div>
            {content5.map((key, a) => (
              <div key={a} className="text-container">
                <p>
                  {content5[a].text}
                </p>
              </div>
            ))}

            <div className="free-space"></div>

            {/* Section 5 */}

            <HighlightCode className="code" content={code2} />

            <div className="free-space"></div>
            
            <HighlightCode content={code} />






          </div>
        </div>
      </>

    )
  }


