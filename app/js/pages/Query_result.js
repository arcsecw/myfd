import React from 'react';
import PageContainer from '../components/PageContainer';
import auth from '../components/auth'
import { browserHistory, Router, Route, Link, withRouter } from 'react-router'

var Query_result = withRouter (React.createClass({
        getInitialState() {
            return {
                dataSource: [
                        {
                        agencydoctorid: 0,
                        agencyprovince: "北京",
                        agencyname: "北京市第三医院3",
                        excel: [
                        "股骨头坏死"
                        ],
                        agencybed: 0,
                        agencyhot: 0
                        },
                        {
                        agencydoctorid: 0,
                        agencyprovince: "北京",
                        agencyname: "北京市第三医院3",
                        excel: [
                        "股骨头坏死"
                        ],
                        agencybed: 0,
                        agencyhot: 0
                        },{
                        agencydoctorid: 0,
                        agencyprovince: "北京",
                        agencyname: "北京市第三医院3",
                        excel: [
                        "股骨头坏死"
                        ],
                        agencybed: 0,
                        agencyhot: 0
                        },
                ],
                type:'0',//or 专家团队2 or 综合医院1 or 专科医院3
                place:'',//or 行政区
                check_appointment:false,
                check_discount:false,
                search_inOrder:'1',//or人气 or 预约时间,
                nowpage :1,
                totalpage:10,
                des:'',
            };
        },
        query(page){
            auth.myact(
            {to:'list.do',
            parms:[
               {'key':'page','value':page},
               {'key':'role','value':this.state.type},
               {'key':'province','value':this.state.place},
               {'key':'paixu','value':this.state.search_inOrder},
               {'key':'disease','value':this.state.des},
                ]
            },
            (res)=>{
                    this.updateDataSource(res)
                    });
            this.state.nowpage=page
        },
        querynext(){
            var nowpage = this.state.nowpage
            var totalpage = this.state.totalpage
            if (nowpage+1<=totalpage){
                nowpage+=1
                this.query(nowpage)   
            } 
        },
        querybefore(){
            var nowpage = this.state.nowpage
            var totalpage = this.state.totalpage
            console.log(nowpage)
            if (nowpage-1>=1){
                nowpage -=1
                this.query(nowpage);
            }     
        },
        componentDidMount() {
            if(this.props.location.query.query!=undefined){
                this.state.des = this.props.location.query.query
            }
            this.query(1)    
        },
        updateDataSource(data) {
            this.setState({
                dataSource: data,
            })
            console.log(data)
        },


    render() {

        var page =''
        var line1 = {excel:[]}
        var data =  this.state.dataSource
        if (data.length>=1){
            line1 = data[0]
        }
        var line2 = {excel:[]}
        if (data.length>=2){
            line2 = data[1]
        }
        var line3 ={excel:[]}   
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
                <link href="i/css/query_result/styles.css" type="text/css" rel="stylesheet"/>
                <div id="base" className="">
                    
                    <div id="u0" className="ax_shape">
                        <img id="u0_img" className="img " src="i/images/query_result/u0.png"/>
                        
                        <div id="u1" className="text">
                            <p><span></span></p>
                        </div>
                    </div>
                    
                    <div id="u2" className="ax_paragraph">
                        <img id="u2_img" className="img " src="i/resources/images/transparent.gif"/>
                        
                        <div id="u3" className="text">
                            <p><span>全部</span><span>结果</span><span> &gt; {this.state.des}</span><span>&nbsp;  </span></p>
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

<Link to = 'institution_list'>                    
                    <div id="u8" className="ax_paragraph">
                        <img id="u8_img" className="img " src={this.state.type=='1'?'i/images/doctor_list/u10.png':'i/images/institution_list/u10.png'}/>
                        
                        <div id="u9" className="text" style = {{color:this.state.type=='1'?'white':'black'}} onClick = {()=>{this.state.type='1';this.query(this.state.nowpage)}}>
                            <p><span>综合医院</span></p>
                        </div>
                    </div>
</Link>

<Link to = '/doctor_list'>                    
                    <div id="u12" className="ax_paragraph">
                        <img id="u12_img" className="img " src={this.state.type=='2'?'i/images/doctor_list/u10.png':'i/images/institution_list/u10.png'}/>
                        
                        <div id="u13" className="text" style = {{color:this.state.type=='2'?'white':'black'}} onClick = {()=>{this.state.type='2';this.query(this.state.nowpage)}}>
                            <p><span>专家团队</span></p>
                        </div>
                    </div>
</Link>
<Link to = '/query_result'>                    
                    <div id="u14" className="ax_paragraph">
                        <img id="u14_img" className="img " src={this.state.type=='0'?'i/images/query_result/u14.png':'i/images/institution_list/u10.png'}/>
                        
                        <div id="u15" className="text" style = {{color:this.state.type=='0'?'white':'black'}} >
                            <p><span>不限</span></p>
                        </div>
                    </div>
</Link>
                    
                    <div id="u16" className="ax_paragraph">
                        <img id="u16_img" className="img " src="i/resources/images/transparent.gif"/>
                        
                        <div id="u17" className="text">
                            <p><span>地点：</span></p>
                        </div>
                    </div>

                    
                    <div id="u18" className="ax_paragraph">
                        <img id="u18_img" className="img " src={this.state.place=='行政区'?'i/images/query_result/u14.png':'i/images/institution_list/u10.png'}/>
                        
                        <div id="u19" className="text" style = {{color:this.state.place=='行政区'?'white':'black'}} onClick = {()=>{this.state.place='行政区';this.query(this.state.nowpage)}}>
                            <p><span>行政区</span></p>
                        </div>
                    </div>

                    
                    <div id="u20" className="ax_paragraph">
                        <img id="u20_img" className="img " src={this.state.place==''?'i/images/query_result/u14.png':'i/images/institution_list/u10.png'}/>
                        
                        <div id="u21" className="text" style = {{color:this.state.place==''?'white':'black'}} onClick = {()=>{this.state.place='';this.query(this.state.nowpage)}}>
                            <p><span>不限</span></p>
                        </div>
                    </div>

                    
                    <div id="u22" className="ax_horizontal_line">
                        <img id="u22_start" className="img " src="i/resources/images/transparent.gif" alt="u22_start"/>
                        <img id="u22_end" className="img " src="i/resources/images/transparent.gif" alt="u22_end"/>
                        <img id="u22_line" className="img " src="i/images/user_home/u68_line.png" alt="u22_line"/>
                    </div>

                    
                    <div id="u23" className="ax_checkbox">
                        <label htmlFor="u23_input">
                            
                            <div id="u24" className="text">
                                <p><span>7日内可预约</span></p>
                            </div>
                        </label>
                        <input id="u23_input" type="checkbox" value="checkbox" checked={this.state.check_appointment?'checked':''} onClick = {()=>{
                            this.state.check_appointment=!this.state.check_appointment;this.query(this.state.nowpage)
                        }}/>
                    </div>

                    
                    <div id="u25" className="ax_checkbox">
                        <label htmlFor="u25_input">
                            
                            <div id="u26" className="text">
                                <p><span>有优惠</span></p>
                            </div>
                        </label>
                        <input id="u25_input" type="checkbox" value="checkbox" checked={this.state.check_discount?'checked':''} onClick = {()=>{
                            this.state.check_discount = !this.state.check_discount ;this.query(this.state.nowpage)  
                        }}/>
                    </div>

                    
                    <div id="u27" className="ax_paragraph">
                        <img id="u27_img" className="img " src="i/resources/images/transparent.gif"/>
                        
                        <div id="u28" className="text">
                        <p>
                            <span style = {{color:this.state.search_inOrder=='1'?'red':'black'}} onClick = {()=>{
                                this.state.search_inOrder= '1';this.query(this.state.nowpage)
                            }}>智能</span>
                        <span>&nbsp; </span>
                        <span> |&nbsp; 
                        <span style = {{color:this.state.search_inOrder=='2'?'red':'black'}} onClick = {()=>{
                            this.state.search_inOrder= '2';this.query(this.state.nowpage)
                        }}>人气
                        </span> &nbsp; |&nbsp; 
                        <span style = {{color:this.state.search_inOrder=='3'?'red':'black'}} onClick = {()=>{
                            this.state.search_inOrder= '3';this.query(this.state.nowpage)
                        }}
                        >预约时间</span>&nbsp; &nbsp; </span></p>
                            
                        </div>
                    </div>

                    
                    <div id="u29" className="ax_paragraph">
                        <img id="u29_img" className="img " src="i/resources/images/transparent.gif"/>
                        
                        <div id="u30" className="text">
                            <p onClick = {this.querybefore}><span>上一页</span></p>
                        </div>
                    </div>
                    
                    <div id="u33" className="ax_paragraph">
                        <img id="u33_img" className="img " src="i/resources/images/transparent.gif"/>
                        
                        <div id="u34" className="text">
                            <p onClick = {this.querynext}><span>下一页</span></p>
                        </div>
                    </div>

                    
                    <div id="u35" className="ax_paragraph">
                        <img id="u35_img" className="img " src="i/resources/images/transparent.gif"/>
                        
                        <div id="u36" className="text">
                            <p className="u131">
                                <span className="u120">{line1.agencyname}</span>
                                <span className="u120"> {line1.InstitutionType}</span>
                                <span className="u129"> ， </span>
                                <span className="u124">人气指数 </span>
                                <span className="u124">{line1.agencyhot}</span></p>
                            <p className="u130">
                                <span className="u129">擅长治疗: </span>
                                <span className="u129">{line1.excel.join(',')}</span></p>
                            <p className="u130">
                                <span className="u124">可预约地点: </span>
                                <span className="u124">{line1.agencyprovince}</span></p>
                            <p className="u122">
                                <span className="u124">最快手术时间: </span>
                                <span className="u124">预计</span>
                                <span className="u124">{'0'}</span>
                                <span className="u124">日内</span>
                                <span className="u123">&nbsp; </span></p>
                        </div>
                    </div>

                    
                    <div id="u37" className="ax_paragraph">
                        <img id="u37_img" className="img " src="i/resources/images/transparent.gif"/>
                        
                        <div id="u38" className="text">
                            <p>
                                <span className="u128">{}</span></p>
                           
                            <p>
                                <span className="u128">&nbsp; </span></p>
                        </div>
                    </div>

                    
                    <div id="u39" className="ax_paragraph">
                        <img id="u39_img" className="img " src="i/resources/images/transparent.gif"/>
                        
                        <div id="u40" className="text">
                            <p className="u131">
                                <span className="u120">{line2.agencyname}</span>
                                <span className="u120"> {line2.InstitutionType}</span>
                                <span className="u123"> ， </span>
                                <span className="u124">人气指数 </span>
                                <span className="u124">{line2.agencyhot}</span></p>
                            <p className="u130">
                                <span className="u129">擅长治疗: </span>
    	                        <span className="u129">{line2.excel.join(',')}</span></p>
                            <p className="u130">
                                <span className="u124">可预约地点: </span>
    	                        <span className="u124">{line2.agencyprovince}</span></p>
                            <p className="u122">
                                <span className="u124">最快手术时间: </span>
                                <span className="u124">预计</span>
                                <span className="u124">0</span>
                                <span className="u124">日内</span>
                                <span className="u123">&nbsp; </span></p>
                        </div>
                    </div>

                    
                    <div id="u41" className="ax_paragraph">
                        <img id="u41_img" className="img " src="i/resources/images/transparent.gif"/>
                        
                        <div id="u42" className="text">
                            <p><span className="u128">{line2.Staff}</span></p>
                            
                        </div>
                    </div>

                    
                    <div id="u43" className="ax_horizontal_line">
                        <img id="u43_start" className="img " src="i/resources/images/transparent.gif" alt="u43_start"/>
                        <img id="u43_end" className="img " src="i/resources/images/transparent.gif" alt="u43_end"/>
                        <img id="u43_line" className="img " src="i/images/query_result/u43_line.png" alt="u43_line"/>
                    </div>

                    
                    <div id="u44" className="ax_paragraph">
                        <img id="u44_img" className="img " src="i/resources/images/transparent.gif"/>
                        
                        <div id="u45" className="text">
                            {line1.agencydiscount!=undefined?(<p><span>优惠: </span><span>{line1.agencydiscount}</span></p>):''}
                        </div>
                    </div>

                    
                    <div id="u46" className="ax_horizontal_line">
                        <img id="u46_start" className="img " src="i/resources/images/transparent.gif" alt="u46_start"/>
                        <img id="u46_end" className="img " src="i/resources/images/transparent.gif" alt="u46_end"/>
                        <img id="u46_line" className="img " src="i/images/query_result/u43_line.png" alt="u46_line"/>
                    </div>

                    
                    <div id="u47" className="ax_paragraph">
                        <img id="u47_img" className="img " src="i/resources/images/transparent.gif"/>
                        
                        <div id="u48" className="text">
                            {line2.agencydiscount!=undefined?(<p><span>优惠: </span><span>{line2.agencydiscount}</span></p>):''}                            
                        </div>
                    </div>

                    <div id="u49" className="ax_paragraph">
                        <img id="u49_img" className="img " src="i/resources/images/transparent.gif"/>
                        
                        <div id="u50" className="text">
                            <p className="u131">
                                <span className="u120">{line3.agencyname}</span>
                                <span className="u120">&nbsp; </span>
                                <span className="u120"> {line3.InstitutionType}</span>
                                <span className="u123"> ， </span>
                                <span className="u124">人气指数 </span>
                                <span className="u124">{line3.agencyhot}</span></p>
                            <p className="u130">
                                <span className="u129">擅长治疗: </span>
    	                        <span className="u129">{line3.excel.join(',')}</span></p>
                            <p className="u130">
                                <span className="u124">可预约地点: </span>
    	                        <span className="u124">{line3.agencyprovince}</span>
                                <span className="u121">&nbsp; </span></p>
                            <p className="u122">
                                <span className="u124">最快手术时间: </span>
                                <span className="u124">预计</span>
                                <span className="u124">0</span>
                                <span className="u124">日内</span>
                                <span className="u123">&nbsp; </span></p>  
                        </div>
                    </div>

                    <div id="u133" className="ax_paragraph">
                        <img id="u133_img" className="img " src="i/resources/images/transparent.gif"/>
                        
                        <div id="u134" className="text">
                            <p>
                                <span className="u128">{line3.Staff}</span></p>
                            
                            <p>
                                <span className="u128">&nbsp; </span></p>
                        </div>
                    </div>

                    <div id="u51" className="ax_horizontal_line">
                        <img id="u51_start" className="img " src="i/resources/images/transparent.gif" alt="u51_start"/>
                        <img id="u51_end" className="img " src="i/resources/images/transparent.gif" alt="u51_end"/>
                        <img id="u51_line" className="img " src="i/images/query_result/u43_line.png" alt="u51_line"/>
                    </div>

                    
                    <div id="u52" className="ax_paragraph">
                        <img id="u52_img" className="img " src="i/resources/images/transparent.gif"/>
                        
                        <div id="u53" className="text">
                            {line3.agencydiscount!=undefined?(<p><span>优惠: </span><span>{line3.agencydiscount}</span></p>):''}                                                   
                        </div>
                    </div>

                    
                    <div id="u54" className="ax_text_field">
                        <input id="u54_input" type="text" ref="desces" defaultValue = {this.state.des}  />
                    </div>

                    
                    <div id="u55" className="ax_shape">
                        <img id="u55_img" className="img " src="i/images/query_result/u55.png"/>
                        
                        <div id="u56" className="text">
                            <p><span>直接预约</span></p>
                        </div>
                    </div>

                    <Link to = '/index_home'>
                    <div id="u57" className="ax_shape">
                        <img id="u57_img" className="img " src="i/images/user_check_operation_reservation_page/u23.png"/>
                        
                        <div id="u58" className="text">
                            <p><span>公司主 Logo</span></p>
                        </div>
                    </div>
                    </Link>
                    
                    <div id="u59" className="ax_paragraph">
                        <img id="u59_img" className="img " src="i/resources/images/transparent.gif"/>
                        
                        <div id="u60" className="text">
                            <p><span>手术地点：北京 </span></p>
                        </div>
                    </div>

                    
                    <div id="u61" className="ax_paragraph">
                        <img id="u61_img" className="img " src="i/resources/images/transparent.gif"/>
                        
                        <div id="u62" className="text">
                            <p><a id="u63" className="link" data-label="CusUserName"><span className="u126">登录</span></a><span className="u127">&nbsp; |</span><span className="u128">&nbsp; 手机APP</span><span className="u127">&nbsp; |</span><span className="u128">&nbsp; 客户服务&nbsp; </span><span className="u127">|</span><span className="u128">&nbsp; 网站导航</span></p>
                        </div>
                    </div>
                 
                    <div id="u64" className="ax_shape" onClick = {()=>{
                            this.state.des = this.refs.desces.value!=undefined?this.refs.desces.value:''
                            this.query(1)
                    }}>
                        <img id="u64_img" className="img " src="i/images/query_result/u64.png"/>
                        
                        <div id="u65" className="text">
                            <p><span>搜索</span></p>
                        </div>
                    </div>
                    
                    <div id="u66" className="ax_horizontal_line">
                        <img id="u66_start" className="img " src="i/resources/images/transparent.gif" alt="u66_start"/>
                        <img id="u66_end" className="img " src="i/resources/images/transparent.gif" alt="u66_end"/>
                        <img id="u66_line" className="img " src="i/images/user_home/u68_line.png" alt="u66_line"/>
                    </div>

                    
                    <div id="u67" className="ax_horizontal_line">
                        <img id="u67_start" className="img " src="i/resources/images/transparent.gif" alt="u67_start"/>
                        <img id="u67_end" className="img " src="i/resources/images/transparent.gif" alt="u67_end"/>
                        <img id="u67_line" className="img " src="i/images/user_home/u68_line.png" alt="u67_line"/>
                    </div>

                    
                    <div id="u68" className="ax_shape">
                        <img id="u68_img" className="img " src="i/images/query_result/u68.png"/>
                        
                        <div id="u69" className="text">
                            <p><span>立即预约</span></p>
                        </div>
                    </div>

                    
                    <div id="u70" className="ax_image">
                        <img id="u70_img" className="img " src="i/images/query_result/query_result/1.png"/>
                        
                        <div id="u71" className="text">
                            <p><span></span></p>
                        </div>
                    </div>

                    
                    <div id="u72" className="ax_shape">
                        <img id="u72_img" className="img " src="i/images/query_result/u68.png"/>
                        
                        <div id="u73" className="text">
                            <p><span>立即预约</span></p>
                        </div>
                    </div>

                    
                    <div id="u74" className="ax_shape">
                        <img id="u74_img" className="img " src="i/images/query_result/u68.png"/>
                        
                        <div id="u75" className="text">
                            <p><span>立即预约</span></p>
                        </div>
                    </div>

                    
                    <div id="u76" className="ax_image">
                        <img id="u76_img" className="img " src="i/images/query_result/query_result/2.png"/>
                        
                        <div id="u77" className="text">
                            <p><span></span></p>
                        </div>
                    </div>

                    
                    <div id="u78" className="ax_image">
                        <img id="u78_img" className="img " src="i/images/query_result/query_result/3.png"/>
                        
                        <div id="u79" className="text">
                            <p><span></span></p>
                        </div>
                    </div>

                    
                    <div id="u80" className="ax_dynamic_panel">
                        <div id="u80_state0" className="panel_state" data-label="State1">
                            <div id="u80_state0_content" className="panel_state_content">

                                
                                <div id="u81" className="ax_shape">
                                    <img id="u81_img" className="img " src="i/images/query_result/u81.png"/>
                                    
                                    <div id="u82" className="text">
                                        <p><span></span></p>
                                    </div>
                                </div>

                                
                                <div id="u83" className="ax_paragraph">
                                    <img id="u83_img" className="img " src="i/resources/images/transparent.gif"/>
                                    
                                    <div id="u84" className="text">
                                        <p><span>创伤</span></p>
                                    </div>
                                </div>

                                
                                <div id="u85" className="ax_paragraph">
                                    <img id="u85_img" className="img " src="i/resources/images/transparent.gif"/>
                                    
                                    <div id="u86" className="text">
                                        <p><span>脊椎</span></p>
                                    </div>
                                </div>

                                
                                <div id="u87" className="ax_paragraph">
                                    <img id="u87_img" className="img " src="i/resources/images/transparent.gif"/>
                                    
                                    <div id="u88" className="text">
                                        <p><span>儿骨</span></p>
                                    </div>
                                </div>

                                
                                <div id="u89" className="ax_shape">
                                    <img id="u89_img" className="img " src="i/images/query_result/u89.png"/>
                                    
                                    <div id="u90" className="text">
                                        <p><span></span></p>
                                    </div>
                                </div>

                                
                                <div id="u91" className="ax_shape">
                                    <img id="u91_img" className="img " src="i/images/query_result/u89.png"/>
                                    
                                    <div id="u92" className="text">
                                        <p><span></span></p>
                                    </div>
                                </div>

                                
                                <div id="u93" className="ax_shape">
                                    <img id="u93_img" className="img " src="i/images/query_result/u89.png"/>
                                    
                                    <div id="u94" className="text">
                                        <p><span></span></p>
                                    </div>
                                </div>

                                
                                <div id="u95" className="ax_paragraph">
                                    <img id="u95_img" className="img " src="i/resources/images/transparent.gif"/>
                                    
                                    <div id="u96" className="text">
                                        <p><span>关节</span></p>
                                    </div>
                                </div>

                                
                                <div id="u97" className="ax_shape">
                                    <img id="u97_img" className="img " src="i/images/query_result/u89.png"/>
                                    
                                    <div id="u98" className="text">
                                        <p><span></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div id="u99" className="ax_horizontal_line">
                        <img id="u99_start" className="img " src="i/resources/images/transparent.gif" alt="u99_start"/>
                        <img id="u99_end" className="img " src="i/resources/images/transparent.gif" alt="u99_end"/>
                        <img id="u99_line" className="img " src="i/images/query_result/u99_line.png" alt="u99_line"/>
                    </div>

                    
                    <div id="u100" className="ax_shape">
                        <img id="u100_img" className="img " src="i/images/query_result/u100.png"/>
                        
                        <div id="u101" className="text">
                            <p><span>全部症状</span></p>
                        </div>
                    </div>

                    
                    <div id="u102" className="ax_paragraph">
                        <img id="u102_img" className="img " src="i/resources/images/transparent.gif"/>
                        <Link to = '/doctor_list'>
                        <div id="u103" className="text">
                            <p><span>医生团队</span></p>
                        </div>
                        </Link>
                    </div>

                    
                    <div id="u104" className="ax_paragraph">
                        <img id="u104_img" className="img " src="i/resources/images/transparent.gif"/>
                        <Link to = '/institution_list'>
                        <div id="u105" className="text">
                            <p><span>合作机构</span></p>
                        </div>
                        </Link>
                    </div>

                    
                    <div id="u106" className="ax_paragraph">
                        <img id="u106_img" className="img " src="i/resources/images/transparent.gif"/>
                        
                        <div id="u107" className="text">
                            <p><Link to = '/index_home'><span>首页</span></Link></p>
                        </div>
                    </div>

                    
                    <div id="u108" className="ax_shape">
                        <img id="u108_img" className="img " src="i/images/query_result/u108.png"/>
                        
                        <div id="u109" className="text">
                            <p><span></span></p>
                        </div>
                    </div>

                    
                    <div id="u110" className="ax_horizontal_line">
                        <img id="u110_start" className="img " src="i/resources/images/transparent.gif" alt="u110_start"/>
                        <img id="u110_end" className="img " src="i/resources/images/transparent.gif" alt="u110_end"/>
                        <img id="u110_line" className="img " src="i/images/user_home/u68_line.png" alt="u110_line"/>
                    </div>

                    
                    <div id="u111" className="ax_paragraph">
                        <img id="u111_img" className="img " src="i/resources/images/transparent.gif"/>
                        
                        <div id="u112" className="text">
                            <p><span>关于我们</span></p>
                        </div>
                    </div>

                    
                    <div id="u113" className="ax_paragraph">
                        <img id="u113_img" className="img " src="i/resources/images/transparent.gif"/>
                        
                        <div id="u114" className="text">
                            <p><span>联系我们</span></p>
                        </div>
                    </div>

                    
                    <div id="u115" className="ax_paragraph">
                        <img id="u115_img" className="img " src="i/resources/images/transparent.gif"/>
                        
                        <div id="u116" className="text">
                            <p><span>服务条款</span></p>
                        </div>
                    </div>

                    
                    <div id="u117" className="ax_paragraph">
                        <img id="u117_img" className="img " src="i/resources/images/transparent.gif"/>
                        
                        <div id="u118" className="text">
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
export default Query_result;