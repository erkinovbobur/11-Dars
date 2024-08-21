import { AiOutlineArrowUp } from "react-icons/ai"; 
import { CgFigma } from "react-icons/cg"; 
import { AiFillGithub } from "react-icons/ai"; 
import { AiFillTwitterCircle } from "react-icons/ai"; 
import React, { useState } from 'react';
import Logo from "../assets/Logo.svg";
import { useTranslation } from 'react-i18next';
import { Switch } from 'antd';
import husni from "../assets/husni.svg";
import haykal from "../assets/haykal.png";
import { Link } from "react-router-dom";

const Single = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { t, i18n } = useTranslation();
  
  const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const onChange = (checked) => {
    setIsDarkMode(checked);
    console.log(`switch to ${checked ? 'dark mode' : 'light mode'}`);
  };

  return (
    <>
      <div className={`container m-auto max-w-[1550px] flex justify-center ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <div className={`p-3 w-[1000px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'} h-[1200px] transition-all duration-500`}>
          <div className='flex justify-between items-center'>
            <div>
              <img src={Logo} alt="Logo" />
            </div>

            <select className={`w-[50px] h-[50px] ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`} defaultValue={i18n.language} onChange={handleChangeLanguage}> 
              <option value="uz">Uzb</option>
              <option value="ru">Rus</option>
              <option value="en">Eng</option>
            </select>

            <div className='flex gap-[20px]'>
              <Switch defaultChecked onChange={onChange} />
            </div>
          </div>

          <div className='text-center p-12'>
            <h1 className='text-[48px] font-bold'>{t("si1")}</h1>
          </div>

          <div className='flex gap-3 justify-center'>
            <img src={husni} alt="Husni Ramdani" />
            <div>
              <h3 className='text-[12px] text-red-500'>
                <a href="#">Husni Ramdani</a>
              </h3>
              <p className='text-[8px]'>30 November 2021</p>
            </div>
          </div>

          <h1 className='text-center text-[50px]'>...</h1>

          <div className='flex items-center justify-center'>
            <img className='w-[500px]' src={haykal} alt="Haykal" />
          </div>

          <div className='flex justify-center text-justify p-[50px]'>
            <h1 className='w-[500px]'>{t("si2")}</h1>
          </div>

          <div className="flex justify-end"> 
            <Link to={"/"}>
              <button className={`border-[3px] p-2 flex rounded-lg font-bold transition-all duration-300 ${isDarkMode ? 'border-red-500 hover:bg-red-600' : 'border-pink-800 hover:bg-red-500 hover:border-red-500'}`}>
                {t("si3")} <AiOutlineArrowUp />
              </button>
            </Link> 
          </div>

          <div className="p-10">
            <div className='flex justify-between items-center'>
              <div className='flex gap-2'>
                <h3>{t("h4")}</h3>
                <Link to={"/Single"}>
                  <a className="text-red-500" href="#">{t("h5")}</a>
                </Link> 
              </div>
              <h2 className='underline'>
                <a href="https://github.com/godruoyi/gblog">gblog@gmail.com</a>
              </h2>
              <div className='flex gap-[20px]'>
                <AiFillTwitterCircle />
                <AiFillGithub />
                <CgFigma />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Single;
