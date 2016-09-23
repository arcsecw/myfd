import React from 'react';
import PageContainer from '../components/PageContainer';
import auth from '../components/auth'
import { browserHistory, Router, Route, Link, withRouter } from 'react-router'

const Institution_list = withRouter( React.createClass({
    getInitialState() {
        return {
            dataSource: [
                            {
                        agencydoctorid: 0,
                        agencyprovince: "北京",
                        agencydistrict: "朝阳区",
                        agencyname: "北京市朝阳医院",
                        excel: [ ],
                        agencybed: 2,
                        agencydiscount: "有优惠",
                        agencyhot: "20.00",
                        agencyyytime: 10,
                        agencyclass: "三乙"
                        },{},{}            
            ],
            leixing:'1',//or 专家团队 or 医疗机构
            didian:'',//or 北京上海广州赤峰
            check_yuyue:false,
            check_youyouhui:false,
            search_paixu:'1',//or人气 预约时间,
            nowpage :1,
            totalpage:10,
            keyword:''
            
        };
    },
    query(page){
        auth.myact(
          {to:'list.do',
           parms:[
               {'key':'page','value':page},
               {'key':'role','value':this.state.leixing},
               {'key':'province','value':this.state.didian},
               {'key':'paixu','value':this.state.search_paixu},
               {'key':'disease','value':''},               
           ]
          },
          (res)=>{
                this.updateDataSource(res)
                });
        this.state.nowpage = page
    },
    querynext(){
        var nowpage = this.state.nowpage
        var totalpage = this.state.totalpage
        if (nowpage+1<=totalpage){
            nowpage+=1
            this.query(nowpage)
               
        }
        
    }
    ,querybefore(){
        
        var nowpage = this.state.nowpage
        var totalpage = this.state.totalpage
        if (nowpage-1>=1){
            nowpage -=1
            this.query(nowpage);
    } 
        
    },
    componentDidMount() {
        this.query(1)
    },
    updateDataSource(data) {
        this.setState({
            dataSource: data,
        })
        console.log(data)
        
    },
   
    kaifazhong (str){ 
        console.log(str)    
    },
    
     
    
    render() {
        var page =''
        var line1 ={excel:[]}
        var data =  this.state.dataSource
        if (data.length>=1){
            line1 = data[0]
        }
        var line2 ={excel:[]}
        if (data.length>=2){
            line2 = data[1]
        }
        var line3 = {excel:[]}  
       
        if (data.length>=3){
            line3 = data[2]
        }
        var black = {
            color:'black'
        }
        return (
           <PageContainer>
                
                <link href="i/resources/css/axure_rp_page.css" type="text/css" rel="stylesheet"/>
                <link href="i/data/styles.css" type="text/css" rel="stylesheet"/>
                <link href="i/css/institution_list/styles.css" type="text/css" rel="stylesheet"/>
                <div id="base" className="">

                    <div id="u0" className="ax_shape">
                        <img id="u0_img" className="img " src="i/images/doctor_list/u0.png"/>
                        <div id="u1" className="text">
                            <p><span></span></p>
                        </div>
                    </div>

                    <div id="u2" className="ax_shape">
                        <img id="u2_img" className="img " src="i/images/query_result/u0.png"/>

                        <div id="u3" className="text">
                            <p><span></span></p>
                        </div>
                    </div>


                    <div id="u4" className="ax_shape">
                        <img id="u4_img" className="img " src="i/images/query_result/u4.png"/>

                        <div id="u5" className="text">
                            <p><span></span></p>
                        </div>
                    </div>


                    <div id="u6" className="ax_paragraph">
                        <img id="u6_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u7" className="text">
                            <p><span>类型：</span></p>
                        </div>
                    </div>

<Link to ="/institution_list">
                    <div id="u8" className="ax_paragraph">
                        <img id="u8_img" className="img " src={this.state.leixing=='1'?'i/images/doctor_list/u10.png':'i/images/institution_list/u10.png'}/>

                        <div id="u9" className="text"style = {{color:this.state.leixing=='1'?'white':'black'}}  >
                            <p><span>医疗机构</span></p>
                        </div>
                    </div>
</Link>
<Link to = 'doctor_list'>
                    <div id="u10" className="ax_paragraph" style = {{color:this.state.leixing=='2'?'white':'black'}}  >
                        <img id="u10_img" className="img " src={this.state.leixing=='2'?'i/images/doctor_list/u10.png':'i/images/institution_list/u10.png'}/>

                        <div id="u11" className="text">
                            <p><span >专家团队 </span></p>
                        </div>
                    </div>
</Link>
<Link to ='/query_result'>
                    <div id="u12" className="ax_paragraph" >
                        <img id="u12_img" className="img " src={this.state.leixing=='0'?'i/images/query_result/u14.png':'i/images/institution_list/u10.png'}/>

                        <div id="u13" className="text" style = {{color:this.state.leixing=='0'?'white':'black'}} >
                            <p ><span>不限</span></p>
                        </div>
                    </div>
</Link>

                    <div id="u14" className="ax_paragraph">
                        <img id="u14_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u15" className="text">
                            <p><span>地点：</span></p>
                        </div>
                    </div>


                    <div id="u16" className="ax_paragraph" style = {{color:this.state.didian=='北京'?'white':'black'}} onClick = {()=>{this.state.didian = '北京';this.query(this.state.nowpage)}} >
                        <img id="u16_img" className="img " src={this.state.didian=='北京'?'i/images/query_result/u14.png':'i/resources/images/transparent.gif'} />

                        <div id="u17" className="text">
                            <p><span>北京</span></p>
                        </div>
                    </div>


                    <div id="u18" className="ax_paragraph"style = {{color:this.state.didian==''?'white':'black'}} onClick = {()=>{this.state.didian = '';this.query(this.state.nowpage)}} >
                        <img id="u18_img" className="img " src={this.state.didian==''?'i/images/query_result/u14.png':'i/resources/images/transparent.gif'} />

                        <div id="u19" className="text">
                            <p><span>不限</span></p>
                        </div>
                    </div>


                    <div id="u20" className="ax_horizontal_line">
                        <img id="u20_start" className="img " src="i/resources/images/transparent.gif" alt="u20_start"/>
                        <img id="u20_end" className="img " src="i/resources/images/transparent.gif" alt="u20_end"/>
                        <img id="u20_line" className="img " src="i/images/user_home/u68_line.png" alt="u20_line"/>
                    </div>


                    <div id="u21" className="ax_checkbox">
                        <label htmlFor="u21_input">

                            <div id="u22" className="text">
                                <p><span>7日内可预约</span></p>
                            </div>
                        </label>
                        <input id="u21_input" type="checkbox" value="checkbox" checked={this.state.check_yuyue?'checked':''} onClick = {()=>{
                            this.state.check_yuyue=!this.state.check_yuyue
                            ;this.query(this.state.nowpage)
                        }}/>
                    </div>


                    <div id="u23" className="ax_checkbox">
                        <label htmlFor="u23_input">

                            <div id="u24" className="text">
                                <p><span>有优惠</span></p>
                            </div>
                        </label>
                        <input id="u23_input" type="checkbox" value="checkbox" checked={this.state.check_youyouhui?'checked':''} onClick = {()=>{
                            this.state.check_youyouhui=!this.state.check_youyouhui;this.query(this.state.nowpage)

                        }}/>
                    </div>


                    <div id="u25" className="ax_paragraph">
                        <img id="u25_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u26" className="text" >
                            <p>
                            <span style = {{color:this.state.search_paixu=='1'?'red':'black'}} onClick = {()=>{
                            this.state.search_paixu='1';this.query(this.state.nowpage)
                        }}>智能</span>
                        <span>&nbsp; </span>
                        <span> |&nbsp; <span
                        style = {{color:this.state.search_paixu=='2'?'red':'black'}} onClick = {()=>{
                            this.state.search_paixu='2';this.query(this.state.nowpage)
                        }}>人气</span>&nbsp; |&nbsp; <span
                        style = {{color:this.state.search_paixu=='3'?'red':'black'}} onClick = {()=>{
                            this.state.search_paixu='3';this.query(this.state.nowpage)
                        }}
                        >预约时间</span>&nbsp; &nbsp; </span></p>
                        </div>
                    </div>




                    <div id="u29" className="ax_paragraph">
                        <img id="u29_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u30" className="text">
                            <p onClick = {this.querybefore} > <span>上一页</span></p>
                        </div>
                    </div>


                    <div id="u31" className="ax_paragraph">
                        <img id="u31_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u32" className="text">
                            <p onClick = {this.querynext} > <span>下一页</span></p>
                        </div>
                    </div>


                    <div id="u33" className="ax_text_field">
                        <input id="u33_input"  ref="des"  type="text"  />
                    </div>


                    <div id="u34" className="ax_shape">
                        <img id="u34_img" className="img " src="i/images/query_result/u55.png"/>

                        <div id="u35" className="text">
                            <p><span>快速预约</span></p>
                        </div>
                    </div>

<Link to = '/index_home'>
                    <div id="u36" className="ax_shape">
                        <img id="u36_img" className="img " src="i/images/user_check_operation_reservation_page/u23.png"/>

                        <div id="u37" className="text">
                            <p><span></span></p>
                        </div>
                    </div>
</Link>

                    <div id="u38" className="ax_paragraph">
                        <img id="u38_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u39" className="text">
                            <p><span>手术地点：</span><span>全国</span><span>&nbsp; </span></p>
                        </div>
                    </div>


                    <div id="u40" className="ax_paragraph">
                        <img id="u40_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u41" className="text">
                            <p><a id="u42" className="link" data-label="CusUserName"><Link to = '/login'><span className="u131">登录</span></Link></a><span className="133">&nbsp; |</span><span className="u132">&nbsp; 手机APP</span><span className="u133">&nbsp; |</span><span className="u132">&nbsp; 客户服务&nbsp; </span><span className="133">|</span><span className="u132">&nbsp; 网站导航</span></p>
                        </div>
                    </div>


                    <div id="u43" className="ax_shape" 
                    onClick = {
            ()=>{
                this.props.router.replace({ pathname: '/query_result', query:{query:this.refs.des.value}})
            }
          }>
                        <img id="u43_img" className="img " src="i/images/query_result/u64.png"/>

                        <div id="u44" className="text">
                            <p><span>搜索</span></p>
                        </div>
                    </div>


                    <div id="u45" className="ax_horizontal_line">
                        <img id="u45_start" className="img " src="i/resources/images/transparent.gif" alt="u45_start"/>
                        <img id="u45_end" className="img " src="i/resources/images/transparent.gif" alt="u45_end"/>
                        <img id="u45_line" className="img " src="i/images/user_home/u68_line.png" alt="u45_line"/>
                    </div>


                    <div id="u46" className="ax_horizontal_line">
                        <img id="u46_start" className="img " src="i/resources/images/transparent.gif" alt="u46_start"/>
                        <img id="u46_end" className="img " src="i/resources/images/transparent.gif" alt="u46_end"/>
                        <img id="u46_line" className="img " src="i/images/user_home/u68_line.png" alt="u46_line"/>
                    </div>


                    <div id="u47" className="ax_dynamic_panel">
                        <div id="u47_state0" className="panel_state" data-label="State1">
                            <div id="u47_state0_content" className="panel_state_content">


                                <div id="u48" className="ax_shape">
                                    <img id="u48_img" className="img " src="i/images/query_result/u81.png"/>

                                    <div id="u49" className="text">
                                        <p><span></span></p>
                                    </div>
                                </div>


                                <div id="u50" className="ax_paragraph">
                                    <img id="u50_img" className="img " src="i/resources/images/transparent.gif"/>

                                    <div id="u51" className="text">
                                        <p><span>创伤</span></p>
                                    </div>
                                </div>


                                <div id="u52" className="ax_paragraph">
                                    <img id="u52_img" className="img " src="i/resources/images/transparent.gif"/>

                                    <div id="u53" className="text">
                                        <p><span>脊椎</span></p>
                                    </div>
                                </div>


                                <div id="u54" className="ax_paragraph">
                                    <img id="u54_img" className="img " src="i/resources/images/transparent.gif"/>

                                    <div id="u55" className="text">
                                        <p><span>儿骨</span></p>
                                    </div>
                                </div>


                                <div id="u56" className="ax_shape">
                                    <img id="u56_img" className="img " src="i/images/query_result/u89.png"/>

                                    <div id="u57" className="text">
                                        <p><span></span></p>
                                    </div>
                                </div>


                                <div id="u58" className="ax_shape">
                                    <img id="u58_img" className="img " src="i/images/query_result/u89.png"/>

                                    <div id="u59" className="text">
                                        <p><span></span></p>
                                    </div>
                                </div>


                                <div id="u60" className="ax_shape">
                                    <img id="u60_img" className="img " src="i/images/query_result/u89.png"/>

                                    <div id="u61" className="text">
                                        <p><span></span></p>
                                    </div>
                                </div>


                                <div id="u62" className="ax_paragraph">
                                    <img id="u62_img" className="img " src="i/resources/images/transparent.gif"/>

                                    <div id="u63" className="text">
                                        <p><span>关节</span></p>
                                    </div>
                                </div>


                                <div id="u64" className="ax_shape">
                                    <img id="u64_img" className="img " src="i/images/query_result/u89.png"/>

                                    <div id="u65" className="text">
                                        <p><span></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div id="u66" className="ax_horizontal_line">
                        <img id="u66_start" className="img " src="i/resources/images/transparent.gif" alt="u66_start"/>
                        <img id="u66_end" className="img " src="i/resources/images/transparent.gif" alt="u66_end"/>
                        <img id="u66_line" className="img " src="i/images/query_result/u99_line.png" alt="u66_line"/>
                    </div>


                    <div id="u67" className="ax_shape">
                        <img id="u67_img" className="img " src="i/images/query_result/u100.png"/>

                        <div id="u68" className="text">
                            <p><span>全部症状</span></p>
                        </div>
                    </div>


                    <div id="u69" className="ax_paragraph">
                        <img id="u69_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u70" className="text">
                           <Link to = '/doctor_list'> <p><span>医生团队</span></p></Link>
                        </div>
                    </div>


                    <div id="u71" className="ax_paragraph">
                        <img id="u71_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u72" className="text">
                            <p><span>合作机构</span></p>
                        </div>
                    </div>


                    <div id="u73" className="ax_paragraph">
                        <img id="u73_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u74" className="text">
                            <Link to = '/index_home'><p><span>首页</span></p></Link>
                        </div>
                    </div>


                    <div id="u75" className="ax_shape">
                        <img id="u75_img" className="img " src="i/images/query_result/u108.png"/>

                        <div id="u76" className="text">
                            <p><span></span></p>
                        </div>
                    </div>


                    <div id="u77" className="ax_shape">
                        <img id="u77_img" className="img " src="i/images/index_home/u13.png"/>

                        <div id="u78" className="text">
                            <p><span></span></p>
                        </div>
                    </div>


                    <div id="u79" className="ax_paragraph" style =  {{color:this.state.didian=='上海'?'white':'black'}} onClick = {()=>{this.state.didian = '上海';this.query(this.state.nowpage)}}>
                        <img id="u79_img" className="img " src={this.state.didian=='上海'?'i/images/query_result/u14.png':'i/resources/images/transparent.gif'} />

                        <div id="u80" className="text">
                            <p><span>上海</span></p>
                        </div>
                    </div>
                    <div id="u81" className="ax_paragraph" style = {{color:this.state.didian=='广州'?'black':'black'}} onClick = {()=>{this.state.didian = '广州';this.query(this.state.nowpage)}}>
                        <img id="u81_img" className="img " src={this.state.didian=='广州'?'i/images/query_result/u14.png':'i/resources/images/transparent.gif'}/>

                        <div id="u82" className="text">
                            <p><span>广州</span></p>
                        </div>
                    </div>
                    <div id="u83" className="ax_paragraph" style =  {{color:this.state.didian=='赤峰'?'white':'black'}} onClick = {()=>{this.state.didian = '赤峰';this.query(this.state.nowpage)}}>
                        <img id="u83_img" className="img " src={this.state.didian=='赤峰'?'i/images/query_result/u14.png':'i/resources/images/transparent.gif'} />

                        <div id="u84" className="text">
                            <p><span>赤峰</span></p>
                        </div>
                    </div>

                    <div id="u85" className="ax_paragraph">
                        <img id="u85_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u86" className="text">
                            <p className="u129"><span className="u124"></span><span className="u124">&nbsp; </span><span className="u124">{line1.agencyname}</span><span className="u125"> ， </span><span className="u130">人气指数 </span><span className="u130">{line1.agencyhot}</span></p><p className="u128"><span className="u127">地点：</span><span className="u127">{line1.agencydistrict}</span><span className="u127">&nbsp; </span><span className="u126">{line1.agencyclass}</span></p><p className="u128"><span className="u127">可预约专家：知名三甲医院骨科高职及以上</span></p><p className="u128"><span className="u127">最快手术时间：{line1.agencyyytime}</span></p><p className="u128"><span className="u127">床位：{line1.agencybed}</span></p>
                        </div>
                    </div>
                    <div id="u87" className="ax_horizontal_line">
                        <img id="u87_start" className="img " src="i/resources/images/transparent.gif" alt="u87_start"/>
                        <img id="u87_end" className="img " src="i/resources/images/transparent.gif" alt="u87_end"/>
                        <img id="u87_line" className="img " src="i/images/query_result/u43_line.png" alt="u87_line"/>
                    </div>
                    <div id="u88" className="ax_paragraph">
                        <img id="u88_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u89" className="text">
                            {line1.agencydiscount!=undefined?(<p><span>优惠: </span><span>{line1.agencydiscount}</span></p>):''}
                        </div>
                    </div>


                    <div id="u90" className="ax_shape">
                        <img id="u90_img" className="img " src="i/images/query_result/u68.png"/>

                        <div id="u91" className="text">
                            <p ><span>立即预约</span></p>
                        </div>
                    </div>


                    <div id="u92" className="ax_image">
                        <img id="u92_img" className="img " src={line3.id}/>

                        <div id="u93" className="text">
                            <p><span></span></p>
                        </div>
                    </div>


                    <div id="u94" className="ax_paragraph">
                        <img id="u94_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u95" className="text">
                            <p className="u129"><span className="u124">{line2.agencyname}</span><span className="u125"> ， </span><span className="u130">人气指数 </span><span className="u130">{line2.agencyhot}</span></p><p className="u128"><span className="u127">地点：</span><span className="u127">{line2.agencyprovince}</span><span className="u127">{line2.agencydistrict}</span><span className="u127">区</span><span className="u127">&nbsp; </span><span className="u126">{line2.agencyclass}</span></p><p className="u128"><span className="u127">可预约专家：知名三甲医院骨科高职及以上</span></p><p className="u128"><span className="u127">最快手术时间：{line2.agencyyytime}</span></p><p className="u128"><span className="u127">床位：{line2.agencybed}</span></p>
                        </div>
                    </div>


                    <div id="u96" className="ax_horizontal_line">
                        <img id="u96_start" className="img " src="i/resources/images/transparent.gif" alt="u96_start"/>
                        <img id="u96_end" className="img " src="i/resources/images/transparent.gif" alt="u96_end"/>
                        <img id="u96_line" className="img " src="i/images/query_result/u43_line.png" alt="u96_line"/>
                    </div>


                    <div id="u97" className="ax_paragraph">
                        <img id="u97_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u98" className="text">
                            {line1.agencydiscount!=undefined?(<p><span>优惠: </span><span>{line1.agencydiscount}</span></p>):''}
                        </div>
                    </div>


                    <div id="u99" className="ax_shape">
                        <img id="u99_img" className="img " src="i/images/query_result/u68.png"/>

                        <div id="u100" className="text">
                            <p ><span>立即预约</span></p>
                        </div>
                    </div>


                    <div id="u101" className="ax_paragraph">
                        <img id="u101_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u102" className="text">
                            <p className="u129"><span className="u124">{line3.agencyname}</span><span className="u124">&nbsp; </span><span className="u124">医院</span><span className="u125"> ， </span><span className="u130">人气指数 </span><span className="u130">{line3.agencyhot}</span></p><p className="u128"><span className="u127">地点：</span><span className="u127">{line3.agencyprovince}</span><span className="u127">{line3.agencydistrict}</span><span className="u127">&nbsp; </span><span className="u126">{line3.agencyclass}</span></p><p className="u128"><span className="u127">可预约专家：知名三甲医院骨科高职及以上</span></p><p className="u128"><span className="u127">最快手术时间：{line3.agencyyytime}</span></p><p className="u128"><span className="u127">床位：{line3.agencybed}</span></p>
                        </div>
                    </div>


                    <div id="u103" className="ax_horizontal_line">
                        <img id="u103_start" className="img " src="i/resources/images/transparent.gif" alt="u103_start"/>
                        <img id="u103_end" className="img " src="i/resources/images/transparent.gif" alt="u103_end"/>
                        <img id="u103_line" className="img " src="i/images/query_result/u43_line.png" alt="u103_line"/>
                    </div>


                    <div id="u104" className="ax_paragraph">
                        <img id="u104_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u105" className="text">
                            {line1.agencydiscount!=undefined?(<p><span>优惠: </span><span>{line1.agencydiscount}</span></p>):''}
                        </div>
                    </div>


                    <div id="u106" className="ax_shape">
                        <img id="u106_img" className="img " src="i/images/query_result/u68.png"/>

                        <div id="u107" className="text">
                            <p ><span>立即预约</span></p>
                        </div>
                    </div>


                    <div id="u108" className="ax_image">
                        <img id="u108_img" className="img " src={line2.id}/>

                        <div id="u109" className="text">
                            <p><span></span></p>
                        </div>
                    </div>


                    <div id="u110" className="ax_image">
                        <img id="u110_img" className="img " src={line1.id}/>

                        <div id="u111" className="text">
                            <p><span></span></p>
                        </div>
                    </div>

<Link to = '/index_home'>
                    <div id="u112" className="ax_hot_spot">
                    </div>
</Link>
<Link to = '/doctor_list'>
                    <div id="u113" className="ax_hot_spot">
                    </div>
</Link>

                    <div id="u114" className="ax_horizontal_line">
                        <img id="u114_start" className="img " src="i/resources/images/transparent.gif" alt="u114_start"/>
                        <img id="u114_end" className="img " src="i/resources/images/transparent.gif" alt="u114_end"/>
                        <img id="u114_line" className="img " src="i/images/user_home/u68_line.png" alt="u114_line"/>
                    </div>


                    <div id="u115" className="ax_paragraph">
                        <img id="u115_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u116" className="text">
                            <p><span>关于我们</span></p>
                        </div>
                    </div>


                    <div id="u117" className="ax_paragraph">
                        <img id="u117_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u118" className="text">
                            <p><span>联系我们</span></p>
                        </div>
                    </div>


                    <div id="u119" className="ax_paragraph">
                        <img id="u119_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u120" className="text">
                            <p><span>服务条款</span></p>
                        </div>
                    </div>


                    <div id="u121" className="ax_paragraph">
                        <img id="u121_img" className="img " src="i/resources/images/transparent.gif"/>

                        <div id="u122" className="text">
                            <p><span>媒体更新</span></p>
                        </div>
                        <div id="haha">
                        <input/>
                        </div>


                    </div>
                </div>
            </PageContainer>
        );
    }
}));
export default Institution_list;