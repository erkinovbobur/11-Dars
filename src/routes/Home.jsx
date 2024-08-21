import { CgFigma } from "react-icons/cg"; 
import { AiFillGithub } from "react-icons/ai"; 
import { AiFillTwitterCircle } from "react-icons/ai"; 
import React, { useState } from 'react';
import Logo from "../assets/Logo.svg";
import { useTranslation } from 'react-i18next';
import { Switch } from 'antd';
import husni from "../assets/husni.svg";
import haykal from "../assets/haykal.png";
import photo2 from "../assets/photo2.png";
import photo3 from "../assets/photo3.png";
import { Link } from "react-router-dom";

const Home = () => {
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
    <div className={`container  m-auto flex justify-center ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className={`p-3 w-[1000px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'} h-[850px] transition-all duration-500`}>
        <div className='flex justify-between items-center'>
          <div>
            <img src={Logo} alt="Logo" />
          </div>
          
          <h2 className="font-bold text-[20px]">{t("nav1")}</h2>

          <div className='flex gap-[20px]'>
            <select className={`w-[50px] h-[50px] ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`} defaultValue={i18n.language} onChange={handleChangeLanguage}> 
              <option value="uz">Uzb</option>
              <option value="ru">Rus</option>
              <option value="en">Eng</option>
            </select>
            <div>
              <Switch defaultChecked onChange={onChange} />
            </div>
          </div>
        </div>

        <div className='mt-6 flex gap-5 justify-center h-[300px]'>
          <div className={`w-[200px] border-x-2 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <h1 className='text-[25px]'>{t("h1")}</h1>
            <p className='text-[10px]'>{t("h2")}</p>
            <div className='flex items-center gap-[10px] p-3 border-b-2'>
              <img src={husni} alt="Husni Ramdani" />
              <div>
                <h3 className='text-[12px]'>Husni Ramdani</h3>
                <p className='text-[8px]'>30 November 2021</p>
              </div>
            </div>
            <h1 className='text-[25px]'>{t("h1")}</h1>
            <p className='text-[10px]'>{t("h2")}</p>
          </div>

          <div className={`border-x-2 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className='w-[200px]'>
              <img src={haykal} alt="Haykal" />
              <h1 className='text-[25px]'>{t("h1")}</h1>
              <p className='text-[10px]'>{t("h2")}</p>
              <div className='flex items-center gap-[10px] p-3 border-b-2'>
                <img src={husni} alt="Husni Ramdani" />
                <div>
                  <h3 className='text-[12px]'>Husni Ramdani</h3>
                  <p className='text-[8px]'>30 November 2021</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`w-[200px] border-b-2 border-x-2 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <img src={photo2} alt="Photo 2" />
            <h1 className='text-[25px]'>{t("h1")}</h1>
            <div className='flex items-center gap-3 text-[12px]'>
              <p>{t("h6")}</p>
              <h3 className='text-[red]'>Husni Ramdani</h3>
            </div>
            <div>
              <img src={photo3} alt="Photo 3" />
            </div>
            <div>
              <h1 className='text-[25px]'>{t("h1")}</h1>
              <p className='text-[10px]'>{t("h2")}</p>
              <div className='flex items-center gap-2 text-[12px]'>
                <p>{t("h6")}</p>
                <h3 className='text-[red]'>Husni Ramdani</h3>
              </div>
            </div>
          </div>

          <div className={`w-[200px] border-x-2 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <h1 className='text-[25px]'>{t("h1")}</h1>
            <p className='text-[10px]'>{t("h2")}</p>
            <div className='flex items-center gap-[10px] p-3 border-b-2'>
              <img src={husni} alt="Husni Ramdani" />
              <div>
                <h3 className='text-[12px]'>Husni Ramdani</h3>
                <p className='text-[8px]'>30 November 2021</p>
              </div>
            </div>
            <h1 className='text-[25px]'>{t("h1")}</h1>
            <p className='text-[10px]'>{t("h2")}</p>
            <div className='flex items-center gap-[10px] p-3 border-b-2'>
              <img src={husni} alt="Husni Ramdani" />
              <div>
                <h3 className='text-[12px]'>Husni Ramdani</h3>
                <p className='text-[8px]'>30 November 2021</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[400px]">
          <div className='flex justify-between items-center'>
            <div className='flex gap-2'>
              <h3>{t("h4")}</h3>
              <Link to={"/Single"}>
                <a className="text-[red]" href="#">{t("h5")}</a>
              </Link>
            </div>
            <h2 className='underline'>
              <a href="https://github.com/godruoyi/gblog">gblog@gmail.com</a>
            </h2>
            <div className='flex gap-[20px]'>
              <AiFillTwitterCircle />
              <AiFillGithub />
              <div className="border-5">
                <CgFigma />
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
