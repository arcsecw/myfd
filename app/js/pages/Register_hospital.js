import React from 'react';
import PageContainer from '../components/PageContainer';
import Header1 from '../components/FontComponents/Header';
import Qbzz from '../components/FontComponents/Qbzz';
import { browserHistory, Router, Route, Link, withRouter } from 'react-router'
import auth from '../components/auth'

var Register_hospital = React.createClass({
  handleSubmit:function(e){
    auth.myact({to:'regist.do',
               parms:[
               {key:'regist_username',value:this.refs.regist_username.value}, 
               {key:'regist_confirmPwd',value:this.refs.regist_confirmPwd.value}, 
               {key:'regist_password',value:this.refs.regist_password.value}, 
               {key:'regist_mobile',value:this.refs.regist_mobile.value}, 
               {key:'agencyName',value:this.refs.agencyName.value}, 
               {key:'province',value:this.refs.province.value}, 
               {key:'district',value:this.refs.district.value}, 
               {key:'address',value:this.refs.address.value}, 
               {key:'class',value:this.refs.class.value}, 
               {key:'bed',value:this.refs.bed.value}, 
               {key:'insurance',value:this.refs.insurance.value}, 
               {key:'contactName',value:this.refs.contactName.value}, 
               {key:'phone',value:this.refs.phone.value}, 
               
               {key:'role',value:'4'}, 
               ]
                },(res)=>{
                        if(res.regist_error){alert(res.regist_error)}else{
                            alert ('success')
                        }
                })
  },
    render() {
        return (
            <PageContainer>
                <link href="i/resources/css/axure_rp_page.css" type="text/css" rel="stylesheet"/>
                <link href="i/data/styles.css" type="text/css" rel="stylesheet"/>
                <link href="i/css/register_hospital/styles.css" type="text/css" rel="stylesheet"/>
                <script type="text/babel">
                </script>
                <div id="base" className="">

      <div id="u0" className="ax_shape">
        <img id="u0_img" className="img " src="i/images/register_hospital/u0.png"/>

        <div id="u1" className="text">
          <p><span></span></p>
        </div>
      </div>

      <div id="u2" className="ax_shape">
        <img id="u2_img" className="img " src="i/images/register_hospital/u2.png"/>

        <div id="u3" className="text">
          <p><span></span></p>
        </div>
      </div>


      <div id="u4" className="ax_horizontal_line">
        <img id="u4_start" className="img " src="i/resources/images/transparent.gif" alt="u4_start"/>
        <img id="u4_end" className="img " src="i/resources/images/transparent.gif" alt="u4_end"/>
        <img id="u4_line" className="img " src="i/images/user_home/u68_line.png" alt="u4_line"/>
      </div>


      <div id="u5" className="ax_h3">
        <img id="u5_img" className="img " src="i/resources/images/transparent.gif"/>

        <div id="u6" className="text">
          <p><span>账户信息</span></p>
        </div>
      </div>


      <div id="u7" className="ax_paragraph">
        <img id="u7_img" className="img " src="i/resources/images/transparent.gif"/>

        <div id="u8" className="text">
          <p><span>用户名</span></p>
        </div>
      </div>


      <div id="u9" className="ax_text_field">
        <input id="u9_input" ref = "regist_username"type="text"  />
      </div>

 
      <div id="u10" className="ax_text_field">
        <input id="u10_input" ref = "regist_password" type="text"  />
      </div>

   
      <div id="u11" className="ax_text_field">
        <input id="u11_input" ref = "regist_confirmPwd" type="text"  />
      </div>

      <div id="u12" className="ax_paragraph">
        <img id="u12_img" className="img " src="i/resources/images/transparent.gif"/>

        <div id="u13" className="text">
          <p><span>密码</span></p>
        </div>
      </div>

      <div id="u14" className="ax_paragraph">
        <img id="u14_img" className="img " src="i/resources/images/transparent.gif"/>

        <div id="u15" className="text">
          <p><span>确认密码</span></p>
        </div>
      </div>


      <div id="u16" className="ax_horizontal_line">
        <img id="u16_start" className="img " src="i/resources/images/transparent.gif" alt="u16_start"/>
        <img id="u16_end" className="img " src="i/resources/images/transparent.gif" alt="u16_end"/>
        <img id="u16_line" className="img " src="i/images/user_home/u68_line.png" alt="u16_line"/>
      </div>

      <div id="u17" className="ax_paragraph">
        <img id="u17_img" className="img " src="i/resources/images/transparent.gif"/>

        <div id="u18" className="text">
          <p><span>医疗机构名称</span></p>
        </div>
      </div>

     
      <div id="u19" className="ax_text_field">
        <input id="u19_input" ref = "agencyName"type="text"  />
      </div>

 
      <div id="u20" className="ax_paragraph">
        <img id="u20_img" className="img " src="i/resources/images/transparent.gif"/>

        <div id="u21" className="text">
          <p><span>所在地区</span></p>
        </div>
      </div>


      <div id="u22" className="ax_droplist">
        <select id="u22_input" ref ="province">
          <option selected value="北京">北京</option>
          <option value="上海">上海</option>
        </select>
      </div>

 
      <div id="u23" className="ax_droplist">
        <select id="u23_input" ref = "district">
          <option value="东城区">东城区</option>
          <option value="西城区">西城区</option>
          <option value="海淀区">海淀区</option>
          <option value="朝阳区">朝阳区</option>
          <option selected value="丰台区">丰台区</option>
          <option value="大兴区">大兴区</option>
          <option value="昌平区">昌平区</option>
          <option value="通州区">通州区</option>
        </select>
      </div>

  
      <div id="u24" className="ax_paragraph">
        <img id="u24_img" className="img " src="i/resources/images/transparent.gif"/>
   
        <div id="u25" className="text">
          <p><span>地址</span></p>
        </div>
      </div>


      <div id="u26" className="ax_text_field">
        <input id="u26_input" ref = "address"type="text"  />
      </div>

     
      <div id="u27" className="ax_droplist">
        <select id="u27_input" ref ="class">
          <option selected value="三甲">三甲</option>
          <option value="三乙">三乙</option>
          <option value="民营">民营</option>
        </select>
      </div>


      <div id="u28" className="ax_droplist">
        <select id="u28_input" ref ="bed">
          <option selected value="0">10以下</option>
          <option value="1">10-50</option>
          <option value="2">50-100</option>
          <option value="3">100以上</option>
        </select>
      </div>


      <div id="u29" className="ax_paragraph">
        <img id="u29_img" className="img " src="i/resources/images/transparent.gif"/>
       
        <div id="u30" className="text">
          <p><span>可用床位</span></p>
        </div>
      </div>


      <div id="u31" className="ax_paragraph">
        <img id="u31_img" className="img " src="i/resources/images/transparent.gif"/>
   
        <div id="u32" className="text">
          <p><span>级别</span></p>
        </div>
      </div>

  
      <div id="u33" className="ax_paragraph">
        <img id="u33_img" className="img " src="i/resources/images/transparent.gif"/>
        
        <div id="u34" className="text">
          <p><span>可医保</span></p>
        </div>
      </div>

   
      <div id="u35" className="ax_droplist">
        <select id="u35_input" ref = "insurance">
          <option selected value="1">是</option>
          <option value="0">否</option>
        </select>
      </div>

  
      <div id="u36" className="ax_horizontal_line">
        <img id="u36_start" className="img " src="i/resources/images/transparent.gif" alt="u36_start"/>
        <img id="u36_end" className="img " src="i/resources/images/transparent.gif" alt="u36_end"/>
        <img id="u36_line" className="img " src="i/images/user_home/u68_line.png" alt="u36_line"/>
      </div>

    
      <div id="u37" className="ax_h3">
        <img id="u37_img" className="img " src="i/resources/images/transparent.gif"/>
    
        <div id="u38" className="text">
          <p><span>机构信息</span></p>
        </div>
      </div>

      
      <div id="u39" className="ax_horizontal_line">
        <img id="u39_start" className="img " src="i/resources/images/transparent.gif" alt="u39_start"/>
        <img id="u39_end" className="img " src="i/resources/images/transparent.gif" alt="u39_end"/>
        <img id="u39_line" className="img " src="i/images/user_home/u68_line.png" alt="u39_line"/>
      </div>

    
      <div id="u40" className="ax_horizontal_line">
        <img id="u40_start" className="img " src="i/resources/images/transparent.gif" alt="u40_start"/>
        <img id="u40_end" className="img " src="i/resources/images/transparent.gif" alt="u40_end"/>
        <img id="u40_line" className="img " src="i/images/user_home/u68_line.png" alt="u40_line"/>
      </div>

 
      <div id="u41" className="ax_h3">
        <img id="u41_img" className="img " src="i/resources/images/transparent.gif"/>
  
        <div id="u42" className="text">
          <p><span>联系人信息</span></p>
        </div>
      </div>

   
      <div id="u43" className="ax_paragraph">
        <img id="u43_img" className="img " src="i/resources/images/transparent.gif"/>
     
        <div id="u44" className="text">
          <p><span>联系人姓名</span></p>
        </div>
      </div>

     
      <div id="u45" className="ax_text_field">
        <input id="u45_input" ref ="contactName"type="text"  />
      </div>

   
      <div id="u46" className="ax_text_field">
        <input id="u46_input" ref ="regist_mobile"type="text"  />
      </div>

      
      <div id="u47" className="ax_text_field">
        <input id="u47_input" type="text"  />
      </div>

      <div id="u48" className="ax_text_field">
        <input id="u48_input" type="text"  />
      </div>

     
      <div id="u49" className="ax_html_button">
        <input id="u49_input" type="submit" value="获取短信验证码"/>
      </div>

    
      <div id="u50" className="ax_image">
        <img id="u50_img" className="img " src="i/images/register_doctor/u11.png"/>
  
        <div id="u51" className="text">
          <p><span></span></p>
        </div>
      </div>

   
      <div id="u52" className="ax_paragraph">
        <img id="u52_img" className="img " src="i/resources/images/transparent.gif"/>

        <div id="u53" className="text">
          <p><span>看不清？换一张</span></p>
        </div>
      </div>

 
      <div id="u54" className="ax_paragraph">
        <img id="u54_img" className="img " src="i/resources/images/transparent.gif"/>
 
        <div id="u55" className="text">
          <p><span>验证手机</span></p>
        </div>
      </div>


      <div id="u56" className="ax_paragraph">
        <img id="u56_img" className="img " src="i/resources/images/transparent.gif"/>
    
        <div id="u57" className="text">
          <p><span>验证码</span></p>
        </div>
      </div>

 
      <div id="u58" className="ax_paragraph">
        <img id="u58_img" className="img " src="i/resources/images/transparent.gif"/>
    
        <div id="u59" className="text">
          <p><span>短信验证码</span></p>
        </div>
      </div>


      <div id="u60" className="ax_checkbox">
        <label htmlFor="u60_input">

          <div id="u61" className="text">
            <p><span>我已阅读并同意<a href="#">&lt;飞刀平台注册协议&gt;</a></span></p>
          </div>
        </label>
        <input id="u60_input" type="checkbox" value="checkbox"/>
      </div>


      <div id="u62" className="ax_shape">
        <img id="u62_img" className="img " src="i/images/register_doctor/u68.png"/>
 
        <div id="u63" className="text">
          <p><span onClick={this.handleSubmit} >立即注册</span></p>
        </div>
      </div>

  
      <div id="u64" className="ax_paragraph">
        <img id="u64_img" className="img " src="i/resources/images/transparent.gif"/>
 
        <div id="u65" className="text">
          <p><span>固定电话</span></p>
        </div>
      </div>

 
      <div id="u66" className="ax_text_field">
        <input id="u66_input" ref = "phone"type="text"  />
      </div>

   
      <div id="u67" className="ax_h1">
        <img id="u67_img" className="img " src="i/resources/images/transparent.gif"/>
        
        <div id="u68" className="text">
          <p><span>欢迎注册</span></p>
        </div>
      </div>

   
      <div id="u69" className="ax_shape">
        <img id="u69_img" className="img " src="i/images/user_check_operation_reservation_page/u23.png"/>
       
        <div id="u70" className="text">
          <p><span>公司主 Logo</span></p>
        </div>
      </div>

      
      <div id="u71" className="ax_shape">
        <img id="u71_img" className="img " src="i/images/register_doctor/u74.png"/>
       
        <div id="u72" className="text">
          <p><Link to = '/register_user'><span>我要寻医</span></Link></p>
        </div>
      </div>

 
      <div id="u73" className="ax_shape">
        <img id="u73_img" className="img " src="i/images/register_doctor/u74.png"/>
      
        <div id="u74" className="text">
           <p><Link to = '/register_doctor'><span>我是医生</span></Link></p>
          
        </div>
      </div>

    
      <div id="u75" className="ax_shape">
        <img id="u75_img" className="img " src="i/images/register_doctor/u76.png"/>
        
        <div id="u76" className="text">
         <p><Link to = '/register_hospital'><span>我是机构</span></Link></p>
 
        </div>
      </div>


      <div id="u77" className="ax_image">
        <img id="u77_img" className="img " src="i/images/register_hospital/u77.png"/>

        <div id="u78" className="text">
          <p><span></span></p>
        </div>
      </div>
    </div>
            </PageContainer>
        );
    }
});
export default Register_hospital;