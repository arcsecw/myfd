import React from 'react';
import PageContainer from '../components/PageContainer';
import Header1 from '../components/FontComponents/Header';
import Qbzz from '../components/FontComponents/Qbzz';
import {
  ButtonToolbar,
  Selected,
  Button,
  Container,
} from 'amazeui-react';
import {Link } from 'react-router'

var Index_home = React.createClass({
  mouseOver1() {  //关节右菜单
    document.getElementById("u184").style.visibility="visible";
  },
  mouseOut1() {
    document.getElementById("u184").style.visibility="hidden";
  },
  mouseOver2() {  //脊椎右菜单
    document.getElementById("u190").style.visibility="visible";
    document.getElementById("u184_state1").style.visibility="visible";
  },
  mouseOut2() {
    document.getElementById("u190").style.visibility="hidden";
    document.getElementById("u184_state1").style.visibility="hidden";
  },
  mouseOver3() {  //创伤右菜单
    document.getElementById("u184_state2").style.visibility="visible";
  },
  mouseOut3() {
    document.getElementById("u184_state2").style.visibility="hidden";
  },
  mouseOver4() {  //手外右菜单
    document.getElementById("u184_state3").style.visibility="visible";
  },
  mouseOut4() {
    document.getElementById("u184_state3").style.visibility="hidden";
  },
  mouseOver5() {  //小儿骨科右菜单
    document.getElementById("u184_state4").style.visibility="visible";
  },
  mouseOut5() {
    document.getElementById("u184_state4").style.visibility="hidden";
  },
  mouseOver6() {  //骨与软组织肿瘤右菜单
    document.getElementById("u184_state5").style.visibility="visible";
  },
  mouseOut6() {
    document.getElementById("u184_state5").style.visibility="hidden";
  },
  search(str) {
    console.log(str);
  },
  render() {
    return (
      <PageContainer>
        <script type="text/javascript">
        </script>
        <link href="i/resources/css/axure_rp_page.css" type="text/css" rel="stylesheet"/>
        <link href="i/data/styles.css" type="text/css" rel="stylesheet"/>
        <link href="i/css/index_home/styles.css" type="text/css" rel="stylesheet"/>
        <div id="base" className="">

          <div id="u0" className="ax_paragraph">
            <img id="u0_img" className="img " src="i/resources/images/transparent.gif"/>
            <div id="u1" className="text">
              <p><span>手术地点：北京 </span></p>
            </div>
          </div>

          <div id="u2" className="ax_paragraph">
            <img id="u2_img" className="img " src="i/resources/images/transparent.gif"/>
            <div id="u3" className="text">
              <p><a id="u4" className="link" data-label="CusUserName"><Link to = '/login'><span style={{ color: '#0000FF' }}>登录</span></Link></a><span style={{ color: '#CCCCCC' }}>&nbsp; |</span><span style={{ color: '#333333' }}>&nbsp; 手机APP</span><span style={{ color: '#CCCCCC' }}>&nbsp; |</span><span style={{ color: '#333333' }}>&nbsp; 客户服务&nbsp; </span><span style={{ color: '#CCCCCC' }}>|</span><span style={{ color: '#333333' }}>&nbsp; 网站导航</span></p>
            </div>
          </div>

          <div id="u5" className="ax_text_field">
            <input id="u5_input" type="text"  />
          </div>

          <div id="u6" className="ax_html_button" data-label="搜索">
            <input id="u6_input" type="submit" value="搜索"/>
          </div>

          <div id="u7" className="ax_paragraph">
            <img id="u7_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u8" className="text">
              <p><span>医生团队</span></p>
            </div>
          </div>

          <div id="u9" className="ax_paragraph">
            <img id="u9_img" className="img " src="i/resources/images/transparent.gif"/>
            <div id="u10" className="text">
              <p><span>&gt; </span><span>&gt; 更多</span></p>
            </div>
          </div>

          <div id="u11" className="ax_shape">
            <img id="u11_img" className="img " src="i/images/query_result/u55.png"/>
            <div id="u12" className="text">
              <p><span>直接预约</span></p>
            </div>
          </div>

          <div id="u13" className="ax_shape">
            <img id="u13_img" className="img " src="i/images/index_home/u13.png"/>
            <div id="u14" className="text">
              <p><span>banner</span></p>
            </div>
          </div>

          <div id="u15" className="ax_shape">
            <img id="u15_img" className="img " src="i/images/user_check_operation_reservation_page/u23.png"/>
            <div id="u16" className="text">
              <p><span>公司主 Logo</span></p>
            </div>
          </div>

          <div id="u17" className="ax_shape">
            <img id="u17_img" className="img " src="i/images/index_home/u17.png"/>
            <div id="u18" className="text">
              <p><span></span></p>
            </div>
          </div>

          <div id="u19" className="ax_shape">
            <img id="u19_img" className="img " src="i/images/query_result/u100.png"/>
            <div id="u20" className="text">
              <p><span>全部症状</span></p>
            </div>
          </div>

          <div id="u21" className="ax_horizontal_line">
            <img id="u21_start" className="img " src="i/resources/images/transparent.gif" alt="u21_start"/>
            <img id="u21_end" className="img " src="i/resources/images/transparent.gif" alt="u21_end"/>
            <img id="u21_line" className="img " src="i/images/index_home/u21_line.png" alt="u21_line"/>
          </div>

          <div id="u22" className="ax_paragraph">
            <img id="u22_img" className="img " src="i/resources/images/transparent.gif"/>
            <div id="u23" className="text" >
              <p><span>关节</span></p>
            </div>
          </div>

          <div id="u24" className="ax_horizontal_line">
            <img id="u24_start" className="img " src="i/resources/images/transparent.gif" alt="u24_start"/>
            <img id="u24_end" className="img " src="i/resources/images/transparent.gif" alt="u24_end"/>
            <img id="u24_line" className="img " src="i/images/index_home/u21_line.png" alt="u24_line"/>
          </div>

          <div id="u25" className="ax_paragraph">
            <img id="u25_img" className="img " src="i/resources/images/transparent.gif"/>
            <div id="u26" className="text">
              <p><span>脊柱</span></p>
            </div>
          </div>

          <div id="u27" className="ax_horizontal_line">
            <img id="u27_start" className="img " src="i/resources/images/transparent.gif" alt="u27_start"/>
            <img id="u27_end" className="img " src="i/resources/images/transparent.gif" alt="u27_end"/>
            <img id="u27_line" className="img " src="i/images/index_home/u21_line.png" alt="u27_line"/>
          </div>

          <div id="u28" className="ax_paragraph">
            <img id="u28_img" className="img " src="i/resources/images/transparent.gif"/>
            <div id="u29" className="text">
              <p><span>创伤</span></p>
            </div>
          </div>

          <div id="u30" className="ax_horizontal_line">
            <img id="u30_start" className="img " src="i/resources/images/transparent.gif" alt="u30_start"/>
            <img id="u30_end" className="img " src="i/resources/images/transparent.gif" alt="u30_end"/>
            <img id="u30_line" className="img " src="i/images/index_home/u21_line.png" alt="u30_line"/>
          </div>

          <div id="u31" className="ax_paragraph">
            <img id="u31_img" className="img " src="i/resources/images/transparent.gif"/>
            <div id="u32" className="text">
              <p><span>手外</span></p>
            </div>
          </div>

          <div id="u203" className="ax_horizontal_line">
            <img id="u203_start" className="img " src="i/resources/images/transparent.gif" alt="u203_start"/>
            <img id="u203_end" className="img " src="i/resources/images/transparent.gif" alt="u203_end"/>
            <img id="u203_line" className="img " src="i/images/index_home/u21_line.png" alt="u203_line"/>
          </div>

          <div id="u204" className="ax_paragraph">
            <img id="u204_img" className="img " src="i/resources/images/transparent.gif"/>
            <div id="u207" className="text">
              <p><span>小儿骨科</span></p>
            </div>
          </div>

          <div id="u205" className="ax_horizontal_line">
            <img id="u205_start" className="img " src="i/resources/images/transparent.gif" alt="u205_start"/>
            <img id="u205_end" className="img " src="i/resources/images/transparent.gif" alt="u205_end"/>
            <img id="u205_line" className="img " src="i/images/index_home/u21_line.png" alt="u205_line"/>
          </div>

          <div id="u206" className="ax_paragraph">
            <img id="u206_img" className="img " src="i/resources/images/transparent.gif"/>
            <div id="u208" className="text">
              <p><span>骨与软组织肿瘤</span></p>
            </div>
          </div>

          <div id="u33" className="ax_horizontal_line">
            <img id="u33_start" className="img " src="i/resources/images/transparent.gif" alt="u33_start"/>
            <img id="u33_end" className="img " src="i/resources/images/transparent.gif" alt="u33_end"/>
            <img id="u33_line" className="img " src="i/images/query_result/u99_line.png" alt="u33_line"/>
          </div>

          <div id="u34" className="ax_paragraph">
            <img id="u34_img" className="img " src="i/resources/images/transparent.gif"/>
            <div id="u35" className="text">
              <p><span>医生团队</span></p>
            </div>
          </div>

          <div id="u36" className="ax_paragraph">
            <img id="u36_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u37" className="text">
              <p><span>医疗</span><span>机构</span></p>
            </div>
          </div>


          <div id="u38" className="ax_shape">
            <img id="u38_img" className="img " src="i/images/index_home/u38.png"/>

            <div id="u39" className="text">
              <p><span>banner</span></p>
            </div>
          </div>


          <div id="u40" className="ax_shape">
            <img id="u40_img" className="img " src="i/images/index_home/u40.png"/>

            <div id="u41" className="text">
              <p><span></span></p>
            </div>
          </div>

          <div id="u42" className="ax_image">
            <img id="u42_img" className="img " src="i/images/index_home/u42.png"/>

            <div id="u43" className="text">
              <p><span></span></p>
            </div>
          </div>


          <div id="u44" className="ax_shape">
            <img id="u44_img" className="img " src="i/images/index_home/u44.png"/>

            <div id="u45" className="text">
              <p><span></span></p>
            </div>
          </div>


          <div id="u46" className="ax_paragraph">
            <img id="u46_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u47" className="text">
              <p><span>公告</span></p>
            </div>
          </div>

          <div id="u48" className="ax_horizontal_line">
            <img id="u48_start" className="img " src="i/resources/images/transparent.gif" alt="u48_start"/>
            <img id="u48_end" className="img " src="i/resources/images/transparent.gif" alt="u48_end"/>
            <img id="u48_line" className="img " src="i/images/index_home/u48_line.png" alt="u48_line"/>
          </div>


          <div id="u49" className="ax_paragraph">
            <img id="u49_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u50" className="text">
              <p><span style={{ color: '#333333' }}>138****1234</span><span style={{ color: '#333333' }}> 预约了</span><span style={{ color: '#333333' }}>骨科</span><span style={{ color: '#333333' }}>手</span><span style={{ color: '#333333' }}>术</span></p><p><span style={{ color: '#333333' }}></span><span style={{ color: '#999999' }}>[10分钟前]</span></p>
            </div>
          </div>


          <div id="u51" className="ax_paragraph">
            <img id="u51_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u52" className="text">
              <p><span style={{ color: '#333333' }}>138****1234</span><span style={{ color: '#333333' }}> 预约了</span><span style={{ color: '#333333' }}>骨科</span><span style={{ color: '#333333' }}>手</span><span style={{ color: '#333333' }}>术</span></p><p><span style={{ color: '#333333' }}></span><span style={{ color: '#999999' }}>[10分钟前]</span></p>
            </div>
          </div>


          <div id="u53" className="ax_paragraph">
            <img id="u53_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u54" className="text">
              <p><span style={{ color: '#333333' }}>138****1234</span><span style={{ color: '#333333' }}> 预约了</span><span style={{ color: '#333333' }}>骨科</span><span style={{ color: '#333333' }}>手</span><span style={{ color: '#333333' }}>术</span></p><p><span style={{ color: '#333333' }}></span><span style={{ color: '#999999' }}>[10分钟前]</span></p>
            </div>
          </div>


          <div id="u55" className="ax_shape">
            <img id="u55_img" className="img " src="i/images/index_home/u55.png"/>

            <div id="u56" className="text">
              <p><span></span></p>
            </div>
          </div>


          <div id="u57" className="ax_shape">
            <img id="u57_img" className="img " src="i/images/index_home/u55.png"/>

            <div id="u58" className="text">
              <p><span></span></p>
            </div>
          </div>


          <div id="u59" className="ax_shape">
            <img id="u59_img" className="img " src="i/images/index_home/u55.png"/>

            <div id="u60" className="text">
              <p><span></span></p>
            </div>
          </div>


          <div id="u61" className="ax_shape">
            <img id="u61_img" className="img " src="i/images/index_home/u61.png"/>

            <div id="u62" className="text">
              <p><span></span></p>
            </div>
          </div>

          <div id="u63" className="ax_image">
            <img id="u63_img" className="img " src="i/images/index_home/u63.png"/>

            <div id="u64" className="text">
              <p><span></span></p>
            </div>
          </div>


          <div id="u65" className="ax_h2">
            <img id="u65_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u66" className="text">
              <p><span>韩梅梅</span></p>
            </div>
          </div>


          <div id="u67" className="ax_paragraph">
            <img id="u67_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u68" className="text">
              <p><span>积水潭医院&nbsp; &nbsp; 主任医生</span></p>
            </div>
          </div>


          <div id="u69" className="ax_shape">
            <img id="u69_img" className="img " src="i/images/index_home/u69.png"/>

            <div id="u70" className="text">
              <p><span>立即预约</span></p>
            </div>
          </div>


          <div id="u71" className="ax_shape">
            <img id="u71_img" className="img " src="i/images/index_home/u71.png"/>

            <div id="u72" className="text">
              <p><span>关节置换</span></p>
            </div>
          </div>


          <div id="u73" className="ax_shape">
            <img id="u73_img" className="img " src="i/images/index_home/u73.png"/>

            <div id="u74" className="text">
              <p><span>骨肿瘤</span></p>
            </div>
          </div>


          <div id="u75" className="ax_shape">
            <img id="u75_img" className="img " src="i/images/index_home/u61.png"/>

            <div id="u76" className="text">
              <p><span></span></p>
            </div>
          </div>

          <div id="u77" className="ax_image">
            <img id="u77_img" className="img " src="i/images/index_home/u63.png"/>

            <div id="u78" className="text">
              <p><span></span></p>
            </div>
          </div>


          <div id="u79" className="ax_h2">
            <img id="u79_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u80" className="text">
              <p><span>李</span><span>梅梅</span></p>
            </div>
          </div>


          <div id="u81" className="ax_paragraph">
            <img id="u81_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u82" className="text">
              <p><span>积水潭医院&nbsp; &nbsp; 主任医生</span></p>
            </div>
          </div>


          <div id="u83" className="ax_shape">
            <img id="u83_img" className="img " src="i/images/index_home/u69.png"/>

            <div id="u84" className="text">
              <p><button>立即预约</button></p>
            </div>
          </div>


          <div id="u85" className="ax_shape">
            <img id="u85_img" className="img " src="i/images/index_home/u71.png"/>

            <div id="u86" className="text">
              <p><span>关节炎</span></p>
            </div>
          </div>


          <div id="u87" className="ax_shape">
            <img id="u87_img" className="img " src="i/images/index_home/u73.png"/>

            <div id="u88" className="text">
              <p><span>关节损伤</span></p>
            </div>
          </div>


          <div id="u89" className="ax_shape">
            <img id="u89_img" className="img " src="i/images/index_home/u61.png"/>

            <div id="u90" className="text">
              <p><span></span></p>
            </div>
          </div>

          <div id="u91" className="ax_image">
            <img id="u91_img" className="img " src="i/images/index_home/u63.png"/>

            <div id="u92" className="text">
              <p><span></span></p>
            </div>
          </div>


          <div id="u93" className="ax_h2">
            <img id="u93_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u94" className="text">
              <p><span>王</span><span>梅梅</span></p>
            </div>
          </div>


          <div id="u95" className="ax_paragraph">
            <img id="u95_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u96" className="text">
              <p><span>积水潭医院&nbsp; &nbsp; 主任医生</span></p>
            </div>
          </div>


          <div id="u97" className="ax_shape">
            <img id="u97_img" className="img " src="i/images/index_home/u69.png"/>

            <div id="u98" className="text">
              <p><span>立即预约</span></p>
            </div>
          </div>


          <div id="u99" className="ax_shape">
            <img id="u99_img" className="img " src="i/images/index_home/u71.png"/>

            <div id="u100" className="text">
              <p><span>腰椎间盘</span></p>
            </div>
          </div>


          <div id="u101" className="ax_shape">
            <img id="u101_img" className="img " src="i/images/index_home/u73.png"/>

            <div id="u102" className="text">
              <p><span>脊椎骨折</span></p>
            </div>
          </div>


          <div id="u103" className="ax_shape">
            <img id="u103_img" className="img " src="i/images/index_home/u61.png"/>

            <div id="u104" className="text">
              <p><span></span></p>
            </div>
          </div>

          <div id="u105" className="ax_image">
            <img id="u105_img" className="img " src="i/images/index_home/u63.png"/>

            <div id="u106" className="text">
              <p><span></span></p>
            </div>
          </div>


          <div id="u107" className="ax_h2">
            <img id="u107_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u108" className="text">
              <p><span>范</span><span>梅梅</span></p>
            </div>
          </div>


          <div id="u109" className="ax_paragraph">
            <img id="u109_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u110" className="text">
              <p><span>积水潭医院&nbsp; &nbsp; 主任医生</span></p>
            </div>
          </div>


          <div id="u111" className="ax_shape">
            <img id="u111_img" className="img " src="i/images/index_home/u69.png"/>

            <div id="u112" className="text">
              <p><span>立即预约</span></p>
            </div>
          </div>


          <div id="u113" className="ax_shape">
            <img id="u113_img" className="img " src="i/images/index_home/u71.png"/>

            <div id="u114" className="text">
              <p><span>骨质增生</span></p>
            </div>
          </div>


          <div id="u115" className="ax_shape">
            <img id="u115_img" className="img " src="i/images/index_home/u73.png"/>

            <div id="u116" className="text">
              <p><span>腰疼</span></p>
            </div>
          </div>


          <div id="u117" className="ax_paragraph">
            <img id="u117_img" className="img " src="i/resources/images/transparent.gif"/>


            <div id="u118" className="text">
              <p><span>合作机构</span></p>
            </div>          
          </div>


          <div id="u119" className="ax_paragraph">
            <img id="u119_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u120" className="text">
              <p><span>&gt; </span><span>&gt; 更多</span></p>
            </div>
          </div>


          <div id="u121" className="ax_shape">
            <img id="u121_img" className="img " src="i/images/index_home/u61.png"/>

            <div id="u122" className="text">
              <p><span></span></p>
            </div>
          </div>


          <div id="u123" className="ax_h2">
            <img id="u123_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u124" className="text">
              <p><span>北京大学第三医院</span></p>
            </div>
          </div>


          <div id="u125" className="ax_paragraph">
            <img id="u125_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u126" className="text">
              <p><span>三甲医院&nbsp; &nbsp; &nbsp; 北京</span></p>
            </div>
          </div>


          <div id="u127" className="ax_shape">
            <img id="u127_img" className="img " src="i/images/index_home/u71.png"/>

            <div id="u128" className="text">
              <p><span>创伤骨科</span></p>
            </div>
          </div>


          <div id="u129" className="ax_shape">
            <img id="u129_img" className="img " src="i/images/index_home/u73.png"/>

            <div id="u130" className="text">
              <p><span>矫形骨科</span></p>
            </div>
          </div>

          <div id="u131" className="ax_image">
            <img id="u131_img" className="img " src="i/images/index_home/u131.png"/>

            <div id="u132" className="text">
              <p><span></span></p>
            </div>
          </div>


          <div id="u133" className="ax_shape">
            <img id="u133_img" className="img " src="i/images/index_home/u61.png"/>

            <div id="u134" className="text">
              <p><span></span></p>
            </div>
          </div>


          <div id="u135" className="ax_h2">
            <img id="u135_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u136" className="text">
              <p><span>积水潭</span><span>医院</span></p>
            </div>
          </div>


          <div id="u137" className="ax_paragraph">
            <img id="u137_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u138" className="text">
              <p><span>三甲医院&nbsp; &nbsp; &nbsp; 北京</span></p>
            </div>
          </div>


          <div id="u139" className="ax_shape">
            <img id="u139_img" className="img " src="i/images/index_home/u71.png"/>

            <div id="u140" className="text">
              <p><span>脊椎外科</span></p>
            </div>
          </div>


          <div id="u141" className="ax_shape">
            <img id="u141_img" className="img " src="i/images/index_home/u73.png"/>

            <div id="u142" className="text">
              <p><span>创伤骨科</span></p>
            </div>
          </div>

          <div id="u143" className="ax_image">
            <img id="u143_img" className="img " src="i/images/index_home/u131.png"/>

            <div id="u144" className="text">
              <p><span></span></p>
            </div>
          </div>


          <div id="u145" className="ax_shape">
            <img id="u145_img" className="img " src="i/images/index_home/u61.png"/>

            <div id="u146" className="text">
              <p><span></span></p>
            </div>
          </div>


          <div id="u147" className="ax_h2">
            <img id="u147_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u148" className="text">
              <p><span>北京大学第三医院</span></p>
            </div>
          </div>


          <div id="u149" className="ax_paragraph">
            <img id="u149_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u150" className="text">
              <p><span>三甲医院&nbsp; &nbsp; &nbsp; 北京</span></p>
            </div>
          </div>


          <div id="u151" className="ax_shape">
            <img id="u151_img" className="img " src="i/images/index_home/u71.png"/>

            <div id="u152" className="text">
              <p><span>矫形骨科</span></p>
            </div>
          </div>


          <div id="u153" className="ax_shape">
            <img id="u153_img" className="img " src="i/images/index_home/u73.png"/>

            <div id="u154" className="text">
              <p><span>儿童骨科</span></p>
            </div>
          </div>

          <div id="u155" className="ax_image">
            <img id="u155_img" className="img " src="i/images/index_home/u131.png"/>

            <div id="u156" className="text">
              <p><span></span></p>
            </div>
          </div>


          <div id="u157" className="ax_shape">
            <img id="u157_img" className="img " src="i/images/index_home/u61.png"/>

            <div id="u158" className="text">
              <p><span></span></p>
            </div>
          </div>


          <div id="u159" className="ax_h2">
            <img id="u159_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u160" className="text">
              <p><span>北京大学第三医院</span></p>
            </div>
          </div>


          <div id="u161" className="ax_paragraph">
            <img id="u161_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u162" className="text">
              <p><span>三甲医院&nbsp; &nbsp; &nbsp; 北京</span></p>
            </div>
          </div>


          <div id="u163" className="ax_shape">
            <img id="u163_img" className="img " src="i/images/index_home/u71.png"/>

            <div id="u164" className="text">
              <p><span>关节骨科</span></p>
            </div>
          </div>


          <div id="u165" className="ax_shape">
            <img id="u165_img" className="img " src="i/images/index_home/u73.png"/>

            <div id="u166" className="text">
              <p><span>创伤骨科</span></p>
            </div>
          </div>

          <div id="u167" className="ax_image">
            <img id="u167_img" className="img " src="i/images/index_home/u131.png"/>

            <div id="u168" className="text">
              <p><span></span></p>
            </div>
          </div>

          <div id="u169" className="ax_horizontal_line">
            <img id="u169_start" className="img " src="i/resources/images/transparent.gif" alt="u169_start"/>
            <img id="u169_end" className="img " src="i/resources/images/transparent.gif" alt="u169_end"/>
            <img id="u169_line" className="img " src="i/images/index_home/u169_line.png" alt="u169_line"/>
          </div>


          <div id="u170" className="ax_paragraph">
            <img id="u170_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u171" className="text">
              <p><span>关于我们</span></p>
            </div>
          </div>


          <div id="u172" className="ax_paragraph">
            <img id="u172_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u173" className="text">
              <p><span>联系我们</span></p>
            </div>
          </div>


          <div id="u174" className="ax_paragraph">
            <img id="u174_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u175" className="text">
              <p><span>服务条款</span></p>
            </div>
          </div>


          <div id="u176" className="ax_paragraph">
            <img id="u176_img" className="img " src="i/resources/images/transparent.gif"/>

            <div id="u177" className="text">
              <p><span>媒体更新</span></p>
            </div>
            <div id="u194" class="ax_html_button">
              <input />
            </div>

          </div>
<Link to='/doctor_list'>
          <div id="u178" className="ax_hot_spot">
          </div>
</Link>
<Link to='/institution_list'>

          <div id="u179" className="ax_hot_spot">
          </div>
</Link>

          <div id="u180" className="ax_hot_spot" onMouseOver={this.mouseOver1} onMouseOut={this.mouseOut1}>
          </div>

          <div id="u181" className="ax_hot_spot" onMouseOver={this.mouseOver2} onMouseOut={this.mouseOut2}>
          </div>

          <div id="u182" className="ax_hot_spot" onMouseOver={this.mouseOver3} onMouseOut={this.mouseOut3}>
          </div>


          <div id="u183" className="ax_hot_spot"onMouseOver={this.mouseOver4} onMouseOut={this.mouseOut4}>
          </div>

          <div id="u210" className="ax_hot_spot"onMouseOver={this.mouseOver5} onMouseOut={this.mouseOut5}>
          </div>

          <div id="u211" className="ax_hot_spot"onMouseOver={this.mouseOver6} onMouseOut={this.mouseOut6}>
          </div>

          <div id="u184" className="ax_dynamic_panel">
            <div id="u184_state0" className="panel_state" data-label="关节疾病右菜单" onMouseOver={this.mouseOver1} onMouseOut={this.mouseOut1}>
              <div id="u184_state0_content" className="panel_state_content">


                <div id="u185" className="ax_shape">
                  <img id="u185_img" className="img " src="i/images/index_home/u185.png"/>

                  <div id="u186" className="text">
                    <p><span></span></p>
                  </div>
                </div>


                <div id="u187" className="ax_paragraph">
                  <img id="u187_img" className="img " src="i/resources/images/transparent.gif"/>

                  <div id="u188" className="text">
                    <p style={{ color: '#333333' }}>髋关节&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a id="u189" className="link" style={{ color: '#0000FF'}}>
                      <span onClick={this.search.bind(this,'股骨头坏死')}>股骨头坏死</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span onClick={this.search.bind(this,'髋关节骨性关节炎')}>髋关节骨性关节炎</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span onClick={this.search.bind(this,'髋关节发育不良')}>髋关节发育不良</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span onClick={this.search.bind(this,'类风湿性髋关节炎')}>类风湿性髋关节炎</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span onClick={this.search.bind(this,'强直性脊柱炎髋关节强直')}>强直性脊柱炎髋关节强直</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span onClick={this.search.bind(this,'髋臼-股骨撞击综合症')}>髋臼-股骨撞击综合症</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span onClick={this.search.bind(this,'髋关节置换术后感染')}>髋关节置换术后感染</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span onClick={this.search.bind(this,'髋关节置换术后假体松动')}>髋关节置换术后假体松动</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span onClick={this.search.bind(this,'膝关节骨性关节炎')}>膝关节骨性关节炎</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span onClick={this.search.bind(this,'膝关节内外翻畸形')}>膝关节内外翻畸形</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span onClick={this.search.bind(this,'类风湿性膝关节炎')}>类风湿性膝关节炎</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span onClick={this.search.bind(this,'膝关节僵直')}>膝关节僵直</span>
                    </a>
                    <span style={{ color: '#333333' }}></span></p>
                    <p style={{ color: '#333333' }}>足踝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a className="link" style={{ color: '#0000FF'}}>
                      <span onClick={this.search.bind(this, '踝关节骨性关节炎')}>踝关节骨性关节炎</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span onClick={this.search.bind(this, '踝关节创伤性关节炎')}>踝关节创伤性关节炎</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span onClick={this.search.bind(this, '马蹄内翻足')}>马蹄内翻足</span>
                    </a>
                    <span style={{ color: '#333333' }}></span></p>
                  </div>
                </div>
              </div>
            </div>

            <div id="u184_state1" className="panel_state" data-label="脊柱右菜单" onMouseOver={this.mouseOver2} onMouseOut={this.mouseOut2}>
              <div id="u184_state1_content" className="panel_state_content">
                <div id="u190" className="ax_shape">
                  <img id="u190_img" className="img " src="i/images/index_home/u185.png"/>

                  <div id="u191" className="text">
                    <p><span></span></p>
                  </div>
                </div>


                <div id="u192" className="ax_paragraph">
                  <img id="u192_img" className="img " src="i/resources/images/transparent.gif"/>

                  <div id="u193" className="text">
                    <p style={{ color: '#333333' }}>脊柱&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a className="link" style={{ color: '#0000FF'}}>
                      <span onClick={this.search.bind(this, '颈椎骨折伴或不伴脱位，颈髓损伤')}>颈椎骨折伴或不伴脱位，颈髓损伤</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span onClick={this.search.bind(this, '颈椎间盘突出伴或不伴滑脱')}>颈椎间盘突出伴或不伴滑脱</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span onClick={this.search.bind(this, '胸腰椎骨折伴或不伴脱位，脊髓损伤')}>胸腰椎骨折伴或不伴脱位，脊髓损伤</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span onClick={this.search.bind(this, '胸腰椎间盘突出伴或不伴滑脱')}>胸腰椎间盘突出伴或不伴滑脱</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span onClick={this.search.bind(this, '脊柱畸形矫正')}>脊柱畸形矫正</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span onClick={this.search.bind(this, '脊柱结核')}>脊柱结核</span>
                    </a>
                    <span style={{ color: '#333333' }}></span></p>
                  </div>
                </div>
              </div>
            </div>

            <div id="u184_state2" className="panel_state" data-label="创伤右菜单" onMouseOver={this.mouseOver3} onMouseOut={this.mouseOut3}>
              <div id="u184_state2_content" className="panel_state_content">
                <div id="u197" className="ax_shape">
                  <img id="u197_img" className="img " src="i/images/index_home/u185.png"/>

                  <div id="u198" className="text">
                    <p><span></span></p>
                  </div>
                </div>
                <div id="u195" className="ax_paragraph">
                  <img id="u195_img" className="img " src="i/resources/images/transparent.gif"/>

                  <div id="u196" className="text">
                    <p style={{ color: '#333333' }}>创伤&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a className="link" style={{ color: '#0000FF'}}>
                      <span onClick={this.search.bind(this, '四肢长骨干骨折')}>四肢长骨干骨折</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span onClick={this.search.bind(this, '关节周围骨折')}>关节周围骨折</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span onClick={this.search.bind(this, '老年髋部骨折')}>老年髋部骨折</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span onClick={this.search.bind(this, '骨盆骨折')}>骨盆骨折</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span onClick={this.search.bind(this, '骨折不愈合')}>骨折不愈合</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span onClick={this.search.bind(this, '骨折术后感染')}>骨折术后感染</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span onClick={this.search.bind(this, '骨折畸形愈合矫正')}>骨折畸形愈合矫正</span>
                    </a>
                    <span style={{ color: '#333333' }}></span></p>
                  </div>
                </div>
              </div>
            </div>

            <div id="u184_state3" className="panel_state" data-label="手外右菜单" onMouseOver={this.mouseOver4} onMouseOut={this.mouseOut4}>
              <div id="u184_state3_content" className="panel_state_content">
                <div id="u199" className="ax_shape">
                  <img id="u199_img" className="img " src="i/images/index_home/u185.png"/>

                  <div id="u200" className="text">
                    <p><span></span></p>
                  </div>
                </div>
                <div id="u201" className="ax_paragraph">
                  <img id="u201_img" className="img " src="i/resources/images/transparent.gif"/>

                  <div id="u202" className="text">
                    <p style={{ color: '#333333' }}>手外&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a className="link" style={{ color: '#0000FF'}}>
                      <span onClick={this.search.bind(this, '臂丛神经损伤')}>臂丛神经损伤</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span onClick={this.search.bind(this, '周围神经损伤')}>周围神经损伤</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span onClick={this.search.bind(this, '手指再造')}>手指再造</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span onClick={this.search.bind(this, '手部肿瘤')}>手部肿瘤</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    </a>
                    <span style={{ color: '#333333' }}></span></p>
                  </div>
                </div>
              </div>
            </div>

            <div id="u184_state4" className="panel_state" data-label="小儿骨科右菜单" onMouseOver={this.mouseOver5} onMouseOut={this.mouseOut5}>
              <div id="u184_state4_content" className="panel_state_content">
                <div id="u212" className="ax_shape">
                  <img id="u212_img" className="img " src="i/images/index_home/u185.png"/>

                  <div id="u213" className="text">
                    <p><span></span></p>
                  </div>
                </div>
                <div id="u214" className="ax_paragraph">
                  <img id="u214_img" className="img " src="i/resources/images/transparent.gif"/>

                  <div id="u215" className="text">
                    <p style={{ color: '#333333' }}>小儿骨科&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a className="link" style={{ color: '#0000FF'}}>
                      <span onClick={this.search.bind(this, '小儿先天性髋关节脱位')}>小儿先天性髋关节脱位</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span onClick={this.search.bind(this, '小儿骨折')}>小儿骨折</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span onClick={this.search.bind(this, '小儿股骨头坏死')}>小儿股骨头坏死</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span onClick={this.search.bind(this, '先天性关节畸形')}>先天性关节畸形</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    </a>
                    <span style={{ color: '#333333' }}></span></p>
                  </div>
                </div>
              </div>
            </div>

            <div id="u184_state5" className="panel_state" data-label="骨与软组织肿瘤右菜单" onMouseOver={this.mouseOver6} onMouseOut={this.mouseOut6}>
              <div id="u184_state5_content" className="panel_state_content">
                <div id="u216" className="ax_shape">
                  <img id="u216_img" className="img " src="i/images/index_home/u185.png"/>

                  <div id="u217" className="text">
                    <p><span></span></p>
                  </div>
                </div>
                <div id="u218" className="ax_paragraph">
                  <img id="u218_img" className="img " src="i/resources/images/transparent.gif"/>

                  <div id="u219" className="text">
                    <p style={{ color: '#333333' }}>骨与软组织肿瘤&nbsp;&nbsp;|&nbsp;&nbsp;
                    <a className="link" style={{ color: '#0000FF'}}>
                      <span onClick={this.search.bind(this, '骨肿瘤（恶性）')}>骨肿瘤（恶性）</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span onClick={this.search.bind(this, '骨肿瘤（良性）')}>骨肿瘤（良性）</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span onClick={this.search.bind(this, '软组织肿瘤（恶性）')}>软组织肿瘤（恶性）</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span onClick={this.search.bind(this, '软组织肿瘤（良性）')}>软组织肿瘤（良性）</span>&nbsp;&nbsp;&nbsp;&nbsp;
                      <span onClick={this.search.bind(this, '骨肿瘤保肢治疗')}>骨肿瘤保肢治疗</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    </a>
                    <span style={{ color: '#333333' }}></span></p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </PageContainer>
    );
  }
});
//地点选择下拉列表
export default Index_home;