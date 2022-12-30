import Main from '../components/Home/Main'
import HeadTag from "../components/head/HeadTag";
import {BsMoonStars} from "react-icons/bs";
import React, {useState} from "react";

export default function Home() {
    const mainStyle = "bg-gradient-to-l from-cyan-50 dark:from-gray-900 dark:via-gray-700 dark:to-gray-900 dark:text-white px-10 lg:px-20"
    const [darkMode, setMode] = useState(false)
    return (
      <main className={darkMode ? 'dark ': ''}>
          <div className={mainStyle}>
              <span className={"fixed top-[-30px] right-[-30px] rounded-full text-white bg-gray-800 dark:bg-gray-100 dark:text-gray-800 p-5 pr-10 pt-10 cursor-pointer"}
                    onClick={() => setMode(!darkMode)}
              >
                            <BsMoonStars size={22}/>
              </span>
              <HeadTag />
              <Main/>
              <footer className={"mx-[-80px] text-gray-800 py-2 text-center bg-cyan-400 dark:bg-cyan-800 w-[calc(100%+80px)] lg:w-[calc(100%+160px)]"}>
                  <h6 className="" >Copyright 2022, All rights reserved &copy; AbdooHossamm</h6>
              </footer>
          </div>
      </main>
  )
}
