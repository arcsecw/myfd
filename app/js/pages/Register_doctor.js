import React from 'react';
import PageContainer from '../components/PageContainer';
import Header1 from '../components/FontComponents/Header';
import Qbzz from '../components/FontComponents/Qbzz';
import { browserHistory, Router, Route, Link, withRouter } from 'react-router'
import auth from '../components/auth'
var Register_doctor =withRouter( React.createClass({ 
    getInitialState() {
        return {
            InterValObj: '',
            code: '',
            startTime: '',
            phoneNum: '',
            count:'60', //间隔函数，1秒执行
            curCount: '', //当前剩余秒数
            username: '',
            password: '',
            cfmPwd: '',
            province: '',
            hospital: '',
            department: '',
            title: '',
            excel: '',
            experience: '',
            honor: '',
            checkedTeam: '',
            num: 1,
            select_group:{
                "关节":{
                    "髋关节":{"股骨头坏死":'1',"髋关节骨性关节炎":"2"},
                    "足踝":{"踝关节骨性关节炎":"13","踝关节创伤性关节炎":"14"},
                },
                "脊柱":{
                    "脊柱":{"颈椎骨折伴或不伴脱位，颈髓损伤":'16',"颈椎间盘突出伴或不伴滑脱":'17'},
                }
            },
            select_state:[
                
            ]
        };
    },
    //基于配置文件的不定组三级联动下拉选框
    my_foreach(obj){
        var childrens = []
        for(let k of Object.keys(obj)){
            childrens.push (<option value ={k}>{k}</option>)          
        }
        return childrens
    },
    option1(){
        var a = this.state.select_group
        return this.my_foreach(a)
    },
    option2(fid){
        var s = this.state.select_state[fid][0]
        var select_group = this.state.select_group
        try {
            return this.my_foreach(select_group[s])
        }
        catch(err){
            return []
        }
    },
    option3(fid){
        var s = this.state.select_state[fid][0]
        var s1 = this.state.select_state[fid][1]
        try {
            return this.my_foreach(this.state.select_group[s][s1])
        }
        catch(err){
            return
        }
    },
    select_item(fid){
        var group = []
        var base_ref = 'sel-'+fid+'-'
        group.push(<select ref = {base_ref+'1'} onChange = {this.handleSelect.bind(this,[fid,1])}>
            <option value = '' >请选择</option>
            {this.option1()}
        </select>)
         group.push(<select  ref = {base_ref+'2'} onChange = {this.handleSelect.bind(this,[fid,2])}>
            <option value = ''>请选择</option>         
            {this.option2(fid)}
        </select>)
         group.push(<select  ref = {base_ref+'3'} onChange = {this.handleSelect.bind(this,[fid,3])}>
            <option value = ''>请选择</option>         
            {this.option3(fid)}
        </select>)
        
        return group
    },
    handleSelect(par){
        var fid = par[0]
        var index = par[1]
        var base_ref = 'sel-'+fid+'-'+index
        var value = this.refs[base_ref].value
        var select_state = this.state.select_state
        select_state[fid][index-1]=value
        this.setState({select_state:select_state})
    },
    select_group(){
        var length = this.state.select_state.length
        var group = []
        for (let i=0;i<length;i++){
            group.push(<div>{this.select_item(i)}</div>)
        }
        return group
    },
    addSelect() {
        var new_select = ['','','']
        var before_select = this.state.select_state||[]
        before_select.push(new_select)
        this.setState({select_state:before_select})
    },
    delSelect(){
        var before_select = this.state.select_state||[]
        before_select.pop()
        this.setState({select_state:before_select})
    },
     //基于配置文件的不定组三级联动下拉选框 end
    submitForm() {	  
	    this.state.username = document.getElementById("u4_input").value;
        this.state.password = document.getElementById("u5_input").value;
        this.state.cfmPwd = document.getElementById("u6_input").value;
        this.state.mobile = document.getElementById("u7_input").value;
        this.state.code = document.getElementById("u9_input").value; //短信验证码
        this.state.province = document.getElementById("u31_input").value;
        this.state.hospital = document.getElementById("u32_input").value;
        this.state.department = document.getElementById("u33_input").value;
        this.state.title = document.getElementById("u34_input").value;
        
        
        this.state.experience = document.getElementById("u40_input").value;
        this.state.honor = document.getElementById("u41_input").value;
        var team = document.getElementsByName("team");
        this.state.checkedTeam = "";
        for(var i = 0;i < team.length;i ++){
            if(team[i].checked == true){
                this.state.checkedTeam += team[i].value + ",";
            }
        }
        this.handleSubmit();
    },
    handleSubmit() {
        var parm = [{'key':'regist_username','value':this.state.username}, 
               {'key':'regist_password','value':this.state.password}, 
               {'key':'regist_confirmPwd','value':this.state.cfmPwd},
               {'key':'regist_mobile','value':this.state.phoneNum}, 
               {'key':'province','value':this.state.province}, 
               {'key':'hospital','value':this.state.hospital}, 
               {'key':'department','value':this.state.department},
               {'key':'title','value':this.state.title},
               {'key':'experience','value':this.state.experience},
               {'key':'honor','value':this.state.honor}, 
               {'key':'team','value':this.state.checkedTeam},                
               {'key':'role','value':'3'}, 
               {'key':'regist_validate', 'value':this.state.code}
               ]
        
        for (let i = 0;i<this.state.select_state.length;i++){
            var s = this.state.select_state[i]
            var m = this.state.select_group
            if(s[0]!=''&&s[1]!=''&&s[2]!=''){
            var value = m[s[0]][s[1]][s[2]]
            parm.push({'key':'name','value':value})
            }           
        }
        auth.myact({to:'regist.do',
            parms:parm
        },
        (res)=>{
            if(res.regist_error){alert(res.regist_error)}else{
                var form = new FormData(<form  encType="multipart/form-data" method="post"></form>)
                form.append("imgFile", this.refs.my_file.files[0]);
                form.append("username", auth.getUsername());
                form.append("role", res.role);
                auth.post('upload.do',form,(res)=>{
                    
                })
                this.props.router.replace('/login')             
            }
        })
    },
    queryCode() {
        auth.myact(
          { 
            to:'send.do',
            parms:[{'key':'phone', 'value': this.state.phoneNum},
                    {'key':'code', 'value': this.state.code},
                    {'key':'startTime', 'value': this.state.startTime},
                ]
          },
            (res)=>{
                console.log(res)
            });
    },
    sendMessage() {        
        var codeLength = 6;//验证码长度
		this.state.curCount = this.state.count;
		this.state.phoneNum=document.getElementById("u7_input").value; //手机号码
		if(this.state.phoneNum.length > 0){
			//产生验证码
            this.state.code = '';
			for (var i = 0; i < codeLength; i++) {
				this.state.code += parseInt(Math.random() * 9).toString();
			}
			//设置button效果，开始计时
			$("#u10_input").attr("disabled", "true");
			$("#u10_input").val("请在" + this.state.curCount + "秒内输入验证码");
			this.state.InterValObj = window.setInterval(this.SetRemainTime, 1000); //启动计时器，1秒执行一次
			var myDate = new Date();
			this.state.startTime = myDate.getTime();
			//向后台发送处理数据
            console.log(this.state.phoneNum);
            console.log(this.state.code);
            this.queryCode();
		}else{
			alert("手机号码不能为空！");
		}
    },
    SetRemainTime() {
		if (this.state.curCount == 0) {
			window.clearInterval(this.state.InterValObj);//停止计时器
			$("#u10_input").removeAttr("disabled");//启用按钮
			$("#u10_input").val("重新发送验证码");
		}
		else {
			this.state.curCount--;
			$("#u10_input").val("请在" + this.state.curCount + "秒内输入验证码");
		}
	},
    render() {
        var sel = this.select_group()
        return (
            <PageContainer>
                <link href="i/resources/css/axure_rp_page.css" type="text/css" rel="stylesheet"/>
                <link href="i/data/styles.css" type="text/css" rel="stylesheet"/>
                <link href="i/css/register_doctor/styles.css" type="text/css" rel="stylesheet"/>
                <div id="base" className="">
                    <div id="u0" className="ax_shape">
                        <img id="u0_img" className="img " src="i/images/register_doctor/u0.png"/>

                        <div id="u1" className="text">
                            <p><span></span></p>
                        </div>
                    </div>


                    <div id="u2" className="ax_paragraph">
                        <img id="u2_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u3" className="text">
                            <p><span>用户名</span></p>
                        </div>
                    </div>

                    <div id="u4" className="ax_text_field">
                         <input ref="regist_username"  id="u4_input" type="text"  />
                    </div>


                    <div id="u5" className="ax_text_field">
                         <input ref="regist_password"  id="u5_input" type="password"  />
                    </div>


                    <div id="u6" className="ax_text_field">
                         <input ref="regist_confirmPwd"  id="u6_input" type="password"  />
                    </div>


                    <div id="u7" className="ax_text_field">
                         <input ref="regist_mobile"  id="u7_input" type="text"  />
                    </div>


                    <div id="u8" className="ax_text_field">
                         <input ref=""  id="u8_input" type="text"  />
                    </div>


                    <div id="u9" className="ax_text_field">
                         <input ref=""  id="u9_input" type="text"  />
                    </div>


                    <div id="u10" className="ax_html_button">
                         <input ref=""  id="u10_input" type="submit" value="获取短信验证码" onClick={this.sendMessage}/>
                    </div>


                    <div id="u11" className="ax_image">
                        <img id="u11_img" className="img " src="i/images/register_doctor/u11.png"/>

                        <div id="u12" className="text">
                            <p><span></span></p>
                        </div>
                    </div>


                    <div id="u13" className="ax_paragraph">
                        <img id="u13_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u14" className="text">
                            <p><span>看不清？换一张</span></p>
                        </div>
                    </div>


                    <div id="u15" className="ax_paragraph">
                        <img id="u15_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u16" className="text">
                            <p><span>密码</span></p>
                        </div>
                    </div>


                    <div id="u17" className="ax_paragraph">
                        <img id="u17_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u18" className="text">
                            <p><span>确认密码</span></p>
                        </div>
                    </div>


                    <div id="u19" className="ax_paragraph">
                        <img id="u19_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u20" className="text">
                            <p><span>验证手机</span></p>
                        </div>
                    </div>


                    <div id="u21" className="ax_paragraph">
                        <img id="u21_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u22" className="text">
                            <p><span>验证码</span></p>
                        </div>
                    </div>


                    <div id="u23" className="ax_paragraph">
                        <img id="u23_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u24" className="text">
                            <p><span>短信验证码</span></p>
                        </div>
                    </div>


                    <div id="u25" className="ax_h3">
                        <img id="u25_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u26" className="text">
                            <p><span>账户信息</span></p>
                        </div>
                    </div>


                    <div id="u27" className="ax_h3">
                        <img id="u27_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u28" className="text">
                            <p><span>专业信息</span></p>
                        </div>
                    </div>

                    <div id="u29" className="ax_paragraph">
                        <img id="u29_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u30" className="text">
                            <p><span>第一执业医院</span></p>
                        </div>
                    </div>


                 <div id="u31" className="ax_droplist">
                        <select id="u31_input" ref = "province">
                            <option selected value="北京">北京</option>
                            <option value="上海">上海</option>
                            <option value="广州">广州</option>
                        </select>
                    </div>


                    <div id="u32" className="ax_droplist">
                        <select id="u32_input" ref = "hospital">
                            <option selected value="积水潭医院">积水潭医院</option>
                            <option value="协和">协和</option>
                            <option value="北医三院">北医三院</option>
                        </select>
                    </div>


                    <div id="u33" className="ax_droplist">
                        <select id="u33_input" ref="department">
                            <option selected value="骨科">骨科</option>
                        </select>
                    </div>


                    <div id="u34" className="ax_droplist">
                        <select id="u34_input" ref = "title">
                            <option selected value="主任医师教授">主任医师教授</option>
                            <option value="主任医师">主任医师</option>
                            <option value="副主任">副主任</option>
                        </select>
                    </div>

                    <div id="u39" className="ax_droplist"> 
                    {sel}
                    </div>
                    <div id="u39_add" className="ax_paragraph">
                        <input type="button" value="添加" onClick={this.addSelect}/>
                        <input type="button" value="移除" onClick={this.delSelect}/>
                    </div>

                    <div id="u35" className="ax_paragraph">
                        <img id="u35_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u36" className="text">
                            <p><span>科室</span></p>
                        </div>
                    </div>

                    <div id="u37" className="ax_paragraph">
                        <img id="u37_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u38" className="text">
                            <p><span>职称</span></p>
                        </div>
                    </div>

                    <div id="u40" className="ax_text_area">
                        <textarea id="u40_input"ref="experience"></textarea>
                    </div>


                    <div id="u41" className="ax_text_area">
                        <textarea id="u41_input" ref = "honor"></textarea>
                    </div>


                    <div id="u42" className="ax_paragraph">
                        <img id="u42_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u43" className="text">
                            <p><span>擅长</span></p>
                        </div>
                    </div>


                    <div id="u44" className="ax_paragraph">
                        <img id="u44_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u45" className="text">
                            <p><span>执业经历</span></p>
                        </div>
                    </div>


                    <div id="u46" className="ax_paragraph">
                        <img id="u46_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u47" className="text">
                            <p><span>荣誉</span></p>
                        </div>
                    </div>

                    <form action="upload.do" method="post" enctype="multipart/form-data" id="form2">
                        <div id="u48" className="ax_paragraph">
                            <img id="u48_img" className="img " src="i/resources/images/transparent.gif"/>

                            <div id="u49" className="text">
                                <p><span>上传本人执业证书，职称等图片</span></p>
                            </div>
                        </div>


                        <div id="u50" className="ax_paragraph">
                            <img id="u50_img" className="img " src="i/resources/images/transparent.gif"/>

                            <div id="u51" className="text">
                                <p><span>文件名</span></p>
                            </div>
                        </div>


                        <div id="u52" className="ax_text_field">
                        <input ref = 'my_file' type ='file'/>
                        </div>


                        
                    </form>

                    <div id="u54" className="ax_h3">
                        <img id="u54_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u55" className="text">
                            <p><span>团队信息</span></p>
                        </div>
                    </div>


                    <div id="u56" className="ax_paragraph">
                        <img id="u56_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u57" className="text">
                            <p><span>我有自己的</span></p>
                        </div>
                    </div>


                    <div id="u58" className="ax_checkbox">
                        <label htmlFor="u58_input">

                            <div id="u59" className="text">
                                <p><span>助理</span></p>
                            </div>
                        </label>
                         <input ref="team"  id="u58_input" type="checkbox" name="team" value="助理"/>
                    </div>


                    <div id="u60" className="ax_checkbox">
                        <label htmlFor="u60_input">

                            <div id="u61" className="text">
                                <p><span>麻醉师</span></p>
                            </div>
                        </label>
                         <input ref=""  id="u60_input" type="checkbox" name="team" value="麻醉师"/>
                    </div>


                    <div id="u62" className="ax_checkbox">
                        <label htmlFor="u62_input">

                            <div id="u63" className="text">
                                <p><span>护士</span></p>
                            </div>
                        </label>
                         <input ref=""  id="u62_input" type="checkbox" name="team" value="护士"/>
                    </div>


                    <div id="u64" className="ax_checkbox">
                        <label htmlFor="u64_input">

                            <div id="u65" className="text">
                                <p><span>跟台</span></p>
                            </div>
                        </label>
                         <input ref=""  id="u64_input" type="checkbox" name="team" value="跟台"/>
                    </div>


                    <div id="u66" className="ax_checkbox">
                        <label htmlFor="u66_input">

                            <div id="u67" className="text">
                                <p><span>我已阅读并同意 <a href="">&lt;谷雨医生平台注册协议&gt;</a> </span></p>
                            </div>
                        </label>
                         <input ref=""  id="u66_input" type="checkbox" value="checkbox"/>
                    </div>


                    <div id="u68" className="ax_shape" onClick={this.submitForm}>
                        <img id="u68_img" className="img " src="i/images/register_doctor/u68.png"/>

                        <div id="u69" className="text">
                            <p><span >立即注册</span></p>
                        </div>
                    </div>


                    <div id="u70" className="ax_h1">
                        <img id="u70_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u71" className="text">
                            <p><span>欢迎注册</span></p>
                        </div>
                    </div>


                    <div id="u72" className="ax_shape">
                        <img id="u72_img" className="img " src="i/images/user_check_operation_reservation_page/u23.png"/>

                        <div id="u73" className="text">
                            <p><span></span></p>
                        </div>
                    </div>

                    <div id="u74" className="ax_shape">
                        <img id="u74_img" className="img " src="i/images/register_doctor/u74.png"/>

                        <div id="u75" className="text">
                            <p><Link to = '/register_user'><span>我要寻医</span></Link></p>
                            
                        </div>
                    </div>


                    <div id="u76" className="ax_shape">
                        <img id="u76_img" className="img " src="i/images/register_doctor/u76.png"/>

                        <div id="u77" className="text">
                            <p><Link to = '/register_doctor'><span>我是医生</span></Link></p>
                            
                        </div>
                    </div>


                    <div id="u78" className="ax_shape">
                        <img id="u78_img" className="img " src="i/images/register_doctor/u74.png"/>

                        <div id="u79" className="text">
                            <p><Link to = '/register_hospital'><span>我是机构</span></Link></p>
                            
                        </div>
                    </div>


                    <div id="u80" className="ax_horizontal_line">
                        <img id="u80_start" className="img " src="i/resources/images/transparent.gif" alt="u80_start"/>
                        <img id="u80_end" className="img " src="i/resources/images/transparent.gif" alt="u80_end"/>
                        <img id="u80_line" className="img " src="i/images/user_home/u68_line.png" alt="u80_line"/>
                    </div>


                    <div id="u81" className="ax_horizontal_line">
                        <img id="u81_start" className="img " src="i/resources/images/transparent.gif" alt="u81_start"/>
                        <img id="u81_end" className="img " src="i/resources/images/transparent.gif" alt="u81_end"/>
                        <img id="u81_line" className="img " src="i/images/user_home/u68_line.png" alt="u81_line"/>
                    </div>


                    <div id="u82" className="ax_horizontal_line">
                        <img id="u82_start" className="img " src="i/resources/images/transparent.gif" alt="u82_start"/>
                        <img id="u82_end" className="img " src="i/resources/images/transparent.gif" alt="u82_end"/>
                        <img id="u82_line" className="img " src="i/images/user_home/u68_line.png" alt="u82_line"/>
                    </div>


                    <div id="u83" className="ax_horizontal_line">
                        <img id="u83_start" className="img " src="i/resources/images/transparent.gif" alt="u83_start"/>
                        <img id="u83_end" className="img " src="i/resources/images/transparent.gif" alt="u83_end"/>
                        <img id="u83_line" className="img " src="i/images/user_home/u68_line.png" alt="u83_line"/>
                    </div>


                    <div id="u84" className="ax_horizontal_line">
                        <img id="u84_start" className="img " src="i/resources/images/transparent.gif" alt="u84_start"/>
                        <img id="u84_end" className="img " src="i/resources/images/transparent.gif" alt="u84_end"/>
                        <img id="u84_line" className="img " src="i/images/user_home/u68_line.png" alt="u84_line"/>
                    </div>
                    <div>
                    <br/>
                    <hr/>
                    </div>
                </div>
            </PageContainer>
        );
    }

}));
export default Register_doctor;