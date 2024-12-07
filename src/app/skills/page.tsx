import React from 'react'
import { MdHtml } from "react-icons/md";
import { MdCss } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";

const page = () => {
  return (
    <div className='skills'>
      <div className='card1'>
        <div className='icon'>
        <MdHtml  /></div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti vitae, molestiae id, nulla nisi esse molestias sint omnis dignissimos atque fugit illum dolorum impedit accusamus recusandae modi rerum officiis. Eligendi?</p>

      </div>
      <div className='card1'>
        <div className='icon'>
        <MdCss style={{color:'blue'}} /></div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti vitae, molestiae id, nulla nisi esse molestias sint omnis dignissimos atque fugit illum dolorum impedit accusamus recusandae modi rerum officiis. Eligendi?</p>

      </div>
      <div className='card1'>
        <div className='icon'>
        <IoLogoJavascript style={{color:'yellow'}} /></div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti vitae, molestiae id, nulla nisi esse molestias sint omnis dignissimos atque fugit illum dolorum impedit accusamus recusandae modi rerum officiis. Eligendi?</p>

      </div>
      <div className='card1'>
        <div className='icon'>
        <TbBrandTypescript style={{color:'skyblue'}}/></div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti vitae, molestiae id, nulla nisi esse molestias sint omnis dignissimos atque fugit illum dolorum impedit accusamus recusandae modi rerum officiis. Eligendi?</p>

      </div>
      <div className='card1'>
        <div className='icon'>
        <FaReact style={{color:'cyan'}}/></div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti vitae, molestiae id, nulla nisi esse molestias sint omnis dignissimos atque fugit illum dolorum impedit accusamus recusandae modi rerum officiis. Eligendi?</p>

      </div>
      <div className='card1'>
        <div className='icon'>
        <RiNextjsLine style={{color:'green'}}/></div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti vitae, molestiae id, nulla nisi esse molestias sint omnis dignissimos atque fugit illum dolorum impedit accusamus recusandae modi rerum officiis. Eligendi?</p>

      </div>
    </div>
  )
}

export default page