import styled from 'styled-components'

//通过import引入图片
import logoPic from '../../statics/logo.png'

//局部样式组件
export const HeaderWrapper = styled.div`
    height:56px;
    border-bottom:1px solid #e7e7e7
    position:relative;
`;

//a标签跳转
/* 方式一：styled.a.attrs({ href:'./' })
   方式二：直接在模板中使用<Logo href="./" />
 */
export const Logo = styled.a.attrs({
    href:'./'
})`
    display:block;
    width:100px;
    height:56px;
    position:absolute;
    left:0;
    top:0;
    background: url(${logoPic}) no-repeat left center;
    background-size:contain;
    float:left;
`;

export const Nav = styled.div`
    width:735px;
    height:56px;
    margin:0 auto;
    padding-right:70px;
    box-sizing:border-box;
`;

//"&." 表示该组件下面有一个className
export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    &.left {
        float:left;
    }
    &.right {
        float:right;
        color:#969696;
    }
    &.active {
        color:#ea6f5a;
    }
`;

//伪元素&::
export const NavSerch = styled.input.attrs({
    placeholder:"搜索"
})`
    width:160px;
    height:38px;
    margin: 9px 0 0 20px ;
    padding:0 20px;
    box-sizing:border-box;
    font-size:14px;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    &::placeholder{
        color:#999;
    }
    
`;

export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px
`;

//"&." 表示该组件下面有一个className
export const Button = styled.div`
    float:right;
    line-height:38px;
    font-size:14px;
    border-radius:19px;
    margin:9px 20px 0 0;
    padding:0 20px;
    border:1px solid #ec6149;
    &.red {
        color:#ec6149;
    }
    &.writting {
        color:#fff;
        background:#ec6149;
    }
`;
